<template>
  <div class="new-products pt-10">
    <div class="title d-flex justify-space-between align-center mb-10 px-6">
      <h2
        style="font-weight: 900; font-style: 30px"
        :class="`text-${titleColor}`"
      >
        {{ title }}
      </h2>
      <a href="#" class="text-black">Shop All</a>
    </div>
    <v-container class="v-container">
      <v-row>
        <v-col class="pt-14" cols="7" v-if="!products">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader type="image, article"></v-skeleton-loader
            ></v-col>
          </v-row>
        </v-col>
        <v-col cols="7" v-else>
          <Swiper
            :pagination="{ el: '.swiper-pag', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            class="pb-9"
            :autoplay="{ delay: 3000 }"
          >
            <swiper-slide v-for="item in products" :key="item.id">
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
                      width="80"
                      height="30"
                      variant="outlined"
                      class="bg-white quick-view-btn"
                      style="
                        text-transform: none;
                        position: absolute;
                        top: 50%;
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
                    >Choose Options</v-btn
                  >
                </div>
              </v-card></swiper-slide
            >
          </Swiper>
          <div class="swiper-pag"></div
        ></v-col>
        <v-col cols="5">
          <img src="../../assets/images/vr-banner.webp" alt="" class="w-100" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
export default {
  inject: ["emitter"],
  methods: {
    openQuickView(product) {
      this.emitter.emit("openQuickView", product);
    },
  },
  data() {
    return {
      shownItem: {},
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  props: {
    products: {
      type: [],
    },
    title: {
      type: String,
    },
    titleColor: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.products-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    border: 1px solid rgb(55, 55, 55);
    border-radius: 50%;
    background-color: #fff;
    top: 39%;
    &::after {
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(55, 55, 55);
      font-weight: 900;
    }
  }
  .swiper-pag {
    text-align: center;
    margin-bottom: 70px;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
  .img-parent:hover {
    .quick-view-btn {
      opacity: 1 !important;
    }
  }
}
</style>
