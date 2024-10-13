<template>
  <div class="shop-with-us text-white">
    <div class="cont">
      <h2 class="title"><span>Why Shop</span> With Us</h2>
      <v-container fluid>
        <v-row>
          <v-col cols="3" v-for="card in cards" :key="card.title">
            <v-card elevation="0" class="text-center" variant="none">
              <div class="img-parent">
                <img src="../../assets/images/free-shipping.png" alt="" />
              </div>
              <v-card-title
                style="
                  white-space: pre-wrap;
                  line-height: 1.2;
                  font-weight: 700;
                "
                >{{ card.title }}</v-card-title
              >
              <v-card-text>{{ card.desc }}</v-card-text>
              <a href="#" class="text-white" style="font-weight: 700"
                >learn more</a
              >
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
      cards: [
        {
          image: "../../assets/images/free-shipping.png",
          title: "quality and saving",
          desc: "Comperhensive quality control and affordable price",
        },
        {
          image: "../../assets/images/weekly-flash-sales.png",
          title: "quality and saving",
          desc: "Comperhensive quality control and affordable price",
        },
        {
          image: "../../assets/images/discount.png",
          title: "quality and saving",
          desc: "Comperhensive quality control and affordable price",
        },
        {
          image: "../../assets/images/cash-back.png",
          title: "quality and saving",
          desc: "Comperhensive quality control and affordable price",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.shop-with-us {
  background-image: url(../../assets/images/why-shop-with-us-banner.webp);
  background-repeat: repeat-x;
  background-size: cover;
  .cont {
    padding: 50px;
  }
  .title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    span {
      color: rgb(113 244 240);
    }
  }
}
</style>
