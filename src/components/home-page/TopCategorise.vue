<template>
  <div class="top-catego">
    <div class="cyber-banner">
      <img src="../../assets/images/cyber-banner.webp" alt="" class="w-100" />
    </div>
    <div class="catego pt-12">
      <div class="title d-flex align-center justify-space-between px-5 mb-3">
        <h3
          class="text-center flex-grow-1"
          style="font-weight: 900; font-style: 20px"
        >
          Top Categorise
        </h3>
        <a href="#" class="text-black">Shop All</a>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="2" v-for="catego in categorise" :key="catego.title">
            <v-card class="text-center py-2 px-2" elevation="0">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="img-parent"
                  style="
                    overflow: hidden;
                    width: 100%;
                    height: 180px;
                    border-radius: 50%;
                  "
                >
                  <img
                    :src="catego.image"
                    alt=""
                    :v-bind="props"
                    :style="`width:100%; height:100%; cursor: pointer;transition: 0.5s; scale: ${
                      isHovering ? 1.05 : 1
                    }`"
                  />
                </div>
              </v-hover>
              <v-card-text>{{ catego.title }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categorise: [
        {
          title: "Mobile Phones",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
        },
        {
          title: "Mobile Phones",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
        },
        {
          title: "Mobile Phones",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
        },
        {
          title: "Mobile Phones",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
        },
        {
          title: "Mobile Phones",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
        },
        {
          title: "Mobile Phones",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
        },
        {
          title: "Mobile Phones",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
        },
        {
          title: "Mobile Phones",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
        },
        {
          title: "Mobile Phones",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
        },
        {
          title: "Mobile Phones",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
        },
        {
          title: "Mobile Phones",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
        },
        {
          title: "Mobile Phones",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
        },
      ],
    };
  },
};
</script>
