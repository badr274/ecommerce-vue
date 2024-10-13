<template>
  <div class="products-category mt-15">
    <h1 class="text-center">{{ $route.params.title }}</h1>
    <v-container fluid>
      <v-card :loading="loading" elevation="0">
        <v-row v-if="loading">
          <v-col cols="3" v-for="num in 4" :key="num">
            <v-skeleton-loader type="image, article, button"></v-skeleton-loader
          ></v-col>
        </v-row>
        <v-row v-else>
          <v-col
            cols="3"
            v-for="item in productsByCategory.products"
            :key="item.id"
            class="px-5"
          >
            <v-lazy>
              <v-card elevation="0" class="pb-5">
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parent"
                    style="height: 150px; overflow: hidden"
                  >
                    <img
                      :src="
                        shownItem[item.title]
                          ? shownItem[item.title]
                          : item.thumbnail
                      "
                      alt=""
                      class="w-100"
                      :style="`height: 100%; transition: .5s; scale: ${
                        isHovering ? 1.1 : 1
                      }`"
                      v-bind="props"
                    />
                    <v-btn
                      density="compact"
                      width="100"
                      height="35"
                      variant="outlined"
                      class="bg-white quick-view-btn"
                      style="
                        text-transform: none;
                        position: absolute;
                        top: 20%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        border-radius: 30px;
                        font-style: 12px;
                        transition: 0.2s all ease-in-out;
                        opacity: 0;
                      "
                      @click="openQuickView(item)"
                      >Quick View</v-btn
                    >
                  </div>
                </v-hover>
                <v-card-text class="pl-0">{{
                  `${item.title} ${item.description}`.length <= 40
                    ? `${item.title} ${item.description}`
                    : `${item.title} ${item.description}`.slice(0, 40) + "..."
                }}</v-card-text>
                <v-rating
                  v-model="item.rating"
                  half-increments
                  readonly
                  color="yellow-darken-3"
                  size="x-small"
                  density="compact"
                ></v-rating>
                <v-card-text class="pl-0 pt-0"
                  ><del>${{ item.price }}</del> From
                  <span
                    class="text-red"
                    style="font-size: 16px; font-weight: 900"
                    >${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      )
                    }}</span
                  ></v-card-text
                >
                <v-btn-toggle v-model="shownItem[item.title]">
                  <v-btn
                    v-for="(pic, index) in item.images"
                    :value="pic"
                    :key="index"
                    size="x-small"
                    rounded="xl"
                    :ripple="false"
                    ><img
                      :src="pic"
                      alt=""
                      width="30"
                      height="30"
                      style="border-radius: 50%"
                  /></v-btn>
                </v-btn-toggle>
                <div class="mt-5">
                  <v-btn
                    density="combact"
                    class="py-2 px-8"
                    style="text-transform: none; border-radius: 30px"
                    variant="outlined"
                    @click="
                      $router.push({
                        name: 'product_details',
                        params: {
                          id: item.id,
                        },
                      })
                    "
                    >Choose Options</v-btn
                  >
                </div>
              </v-card></v-lazy
            >
          </v-col>
        </v-row></v-card
      >
    </v-container>
  </div>
</template>

<script>
// import ProductsComponent from "./../components/home-page/ProductsSwiper.vue";
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
export default {
  inject: ["emitter"],
  data() {
    return {
      shownItem: {},
      loading: false,
    };
  },
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
    openQuickView(product) {
      this.emitter.emit("openQuickView", product);
    },
  },
  computed: {
    ...mapState(productsModule, ["productsByCategory"]),
  },
  comcomponents: {
    VSkeletonLoader,
  },
  watch: {
    async $route() {
      // document.documentElement.scrollTo(0, 0);
      this.loading = true;
      await this.getProductsByCategory(this.$route.params.category);
      this.loading = false;
    },
  },
  async mounted() {
    // document.documentElement.scrollTo(0, 0);
    this.loading = true;
    await this.getProductsByCategory(this.$route.params.category);
    this.loading = false;
  },
};
</script>

<style lang="scss">
.img-parent:hover {
  .quick-view-btn {
    opacity: 1 !important;
  }
}
</style>
