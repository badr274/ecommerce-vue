<template>
  <div class="quick-view mt-15">
    <v-dialog v-model="dialog" max-width="900" max-height="500">
      <v-icon
        style="
          position: absolute;
          right: -14px;
          top: -14px;
          background-color: black;
          color: #ddd;
          font-style: 18px;
          padding: 13px;
          z-index: 10;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-card elevation="0" class="content-card"
        ><v-container fluid class="bg-white px-10">
          <v-row>
            <v-col cols="7">
              <v-skeleton-loader
                v-if="loading"
                type="image, image"
              ></v-skeleton-loader>
              <img
                :src="tab ? tab : product.thumbnail"
                alt=""
                width="100%"
                height="400"
                v-else
              />
              <v-tabs center-active class="mt-10" height="250" v-model="tab">
                <v-tab
                  v-for="(image, i) in product.images"
                  :key="i"
                  class="mx-10"
                  :value="image"
                >
                  <img :src="image" alt="" width="70" height="100" />
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
                  style="
                    font-size: 20px;
                    font-weight: bold;
                    white-space: pre-wrap;
                  "
                >
                  ({{ product.title }}) Sample -
                  {{ product.category }}
                </v-card-title>
                <div
                  class="rating-parent d-flex align-center"
                  style="gap: 10px"
                >
                  <v-rating
                    v-model="product.rating"
                    half-increments
                    readonly
                    color="yellow-darken-3"
                    density="compact"
                  ></v-rating>
                  <!-- <span style="color: #777; font-style: 11px"
                    >{{ product.reviews.length }}Review</span
                  > -->
                  <span class="mx-3" style="color: red"
                    >Stock: {{ product.stock }}</span
                  >
                </div>
                <v-card-text
                  class="px-0"
                  style="color: #777; font-style: 13px"
                  >{{ product.description }}</v-card-text
                >
                <v-card-text
                  class="px-0 pt-0"
                  style="color: #777; font-style: 13px"
                  >Brand: {{ product.brand }}</v-card-text
                >
                <v-card-text
                  class="px-0 pt-0"
                  style="color: #777; font-style: 13px"
                  >Availability:
                  {{
                    product.stock > 0 ? "In Stock" : "Out Of Stock"
                  }}</v-card-text
                >
                <v-card-text class="pl-0 pt-0"
                  ><del>${{ product.price }}</del> From
                  <span style="font-size: 16px; font-weight: 900"
                    >${{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
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
                      product.price -
                        product.price * (product.discountPercentage / 100)
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
                    @click="addToCart(product)"
                    :loading="btnLoading"
                    >Add To Cart</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container></v-card
      ></v-dialog
    >
  </div>
</template>

<script>
import { cartStore } from "@/stores/cart";
import { mapActions, mapState } from "pinia";
export default {
  inject: ["emitter"],
  data() {
    return {
      dialog: false,
      quantity: 1,
      loading: false,
      product: [],
      btnLoading: false,
    };
  },
  computed: {
    ...mapState(cartStore, ["cartItems"]),
  },
  methods: {
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.dialog = false;
        this.emitter.emit("openCart");
        this.emitter.emit("succAdding", item.title);
      }, 1000);

      this.quantity = 1;
    },
  },
  mounted() {
    this.emitter.on("openQuickView", (data) => {
      this.loading = true;
      this.product = data;
      this.dialog = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  },
};
</script>

<style lang="scss">
.content-card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #a3a3a3;
  }
  &::-webkit-scrollbar-track {
    background-color: #eee;
  }
}
</style>
