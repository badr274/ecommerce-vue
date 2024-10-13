<template>
  <div class="product-details mt-15">
    <h1 class="mb-10">Product Details</h1>
    <v-container fluid>
      <v-row>
        <v-col cols="7">
          <v-skeleton-loader
            v-if="loading"
            type="image, image"
          ></v-skeleton-loader>
          <img
            :src="!tab ? productDetails.thumbnail : tab"
            alt=""
            width="100%"
            height="550"
            v-else
          />
          <v-tabs center-active class="mt-10" height="250" v-model="tab">
            <v-tab
              v-for="(image, i) in productDetails.images"
              :key="i"
              class="mx-10"
              :value="image"
            >
              <img :src="image" alt="" width="100" height="200" />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="5">
          <v-skeleton-loader
            v-if="loading"
            type="article, article, button"
          ></v-skeleton-loader>
          <v-card v-else elevation="0" class="pt-0 pl-7">
            <v-card-title
              class="px-0"
              style="font-size: 20px; font-weight: bold"
            >
              ({{ productDetails.title }}) Sample -
              {{ productDetails.category }}
            </v-card-title>
            <div class="rating-parent d-flex align-center" style="gap: 10px">
              <v-rating
                v-model="productDetails.rating"
                half-increments
                readonly
                color="yellow-darken-3"
                density="compact"
              ></v-rating>
              <!-- <span style="color: #777; font-style: 11px"
                >{{ productDetails.reviews }}Review</span
              > -->
              <span class="mx-3" style="color: red"
                >Stock: {{ productDetails.stock }}</span
              >
            </div>
            <v-card-text class="px-0" style="color: #777; font-style: 13px">{{
              productDetails.description
            }}</v-card-text>
            <v-card-text class="px-0 pt-0" style="color: #777; font-style: 13px"
              >Brand: {{ productDetails.brand }}</v-card-text
            >
            <v-card-text class="px-0 pt-0" style="color: #777; font-style: 13px"
              >Availability:
              {{
                productDetails.stock > 0 ? "In Stock" : "Out Of Stock"
              }}</v-card-text
            >
            <v-card-text class="pl-0 pt-0"
              ><del>${{ productDetails.price }}</del> From
              <span style="font-size: 16px; font-weight: 900"
                >${{
                  Math.ceil(
                    productDetails.price -
                      productDetails.price *
                        (productDetails.discountPercentage / 100)
                  )
                }}</span
              ></v-card-text
            >
            <v-card-text
              style="
                border: 1px solid #ddd;
                border-radius: 30px;
                width: fit-content;
              "
            >
              <v-icon size="22" @click="quantity > 1 ? quantity-- : false"
                >mdi-minus</v-icon
              >
              <input
                type="number"
                min="1"
                value="1"
                style="
                  outline: none;
                  width: 60px;
                  border: none;
                  font-style: 13px;
                "
                class="text-center py-3"
                v-model="quantity"
              />
              <v-icon size="22" @click="quantity++">mdi-plus</v-icon>
            </v-card-text>
            <v-card-text
              >Subtotal: ${{
                Math.ceil(
                  productDetails.price -
                    productDetails.price *
                      (productDetails.discountPercentage / 100)
                ) * quantity
              }}</v-card-text
            >
            <v-card-actions class="mt-8 w-100">
              <v-btn
                class="w-75 text-white"
                variant="outlined"
                density="compact"
                height="50"
                style="
                  text-transform: none;
                  border-radius: 30px;
                  background-color: #111;
                  font-weight: 500;
                "
                @click="addToCart(productDetails)"
                :loading="btnLoading"
                >Add To Cart</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "../stores/products.js";
import { cartStore } from "@/stores/cart";
import { mapActions, mapState } from "pinia";
export default {
  inject: ["emitter"],
  data() {
    return {
      quantity: 1,
      tab: "",
      loading: false,
      btnLoading: false,
    };
  },
  computed: {
    ...mapState(productsModule, ["productDetails"]),
    ...mapState(cartStore, ["cartItems"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProductDetails"]),
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.emitter.emit("openCart");
        this.emitter.emit("succAdding", item.title);
      }, 1000);

      this.quantity = 1;
    },
  },
  watch: {
    async $route() {
      // document.documentElement.scrollTo(0, 0);
      this.loading = true;
      await this.getProductsByCategory(this.$route.params.id);
      this.loading = false;
    },
  },
  async beforeMount() {
    this.loading = true;
    await this.getProductDetails(this.$route.params.id);
    this.loading = false;
  },
};
</script>
