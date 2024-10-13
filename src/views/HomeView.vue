<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsComponent
      :products="flashDeals"
      title="Flash Deals"
      titleColor="red"
    />
    <TopCategorise />
    <NewProducts
      :products="laptopsCategory"
      title="New Products"
      titleColor="black"
    />
    <QualityFeatures />
    <ProductsComponent
      :products="phonesCategory"
      title="Top Mobile Phones"
      titleColor="black"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="6" class="pr-5"
          ><img
            src="../assets/images/band-left-cover.webp"
            alt=""
            class="w-100"
        /></v-col>
        <v-col cols="6" class="pl-5"
          ><img
            src="../assets/images/band-right-cover.webp"
            alt=""
            class="w-100"
        /></v-col>
      </v-row>
    </v-container>
    <ProductsComponent
      :products="fragrances"
      title="Top Fragrances"
      titleColor="black"
    />
    <img src="../assets/images/tv-banner.webp" alt="" class="w-100" />
    <ProductsComponent
      :products="groceries"
      title="Top Groceries"
      titleColor="black"
    />
    <WhyShopWithUs />
  </div>
</template>

<script>
import UpperBanner from "./../components/home-page/UpperBanner.vue";
import TheFeatures from "./../components/home-page/TheFeatures.vue";
import TopOffers from "./../components/home-page/TopOffers.vue";
import ProductsComponent from "./../components/home-page/ProductsSwiper.vue";
import NewProducts from "./../components/home-page/NewProducts.vue";
import TopCategorise from "./../components/home-page/TopCategorise.vue";
import QualityFeatures from "./../components/home-page/QualityFeatures.vue";
import WhyShopWithUs from "./../components/home-page/WhyShopWithUs.vue";

import { productsModule } from "../stores/products";
import { mapActions, mapState } from "pinia";

export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsComponent,
    TopCategorise,
    NewProducts,
    QualityFeatures,
    WhyShopWithUs,
  },
  computed: {
    ...mapState(productsModule, [
      "flashDeals",
      "laptopsCategory",
      "phonesCategory",
      "fragrances",
      "groceries",
    ]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
