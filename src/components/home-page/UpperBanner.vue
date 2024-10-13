<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="cont">
              <h2>
                <span>Huge Saving</span>
                on UHD Televisions
              </h2>
              <p class="hint">Sale up to 70% off on selected items</p>
              <v-btn
                variant="outlined"
                class="py-3 px-10"
                density="combact"
                style="border-radius: 30px; text-transform: none"
                >Shop Now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  .parent {
    height: 400px;
    background-image: url(../../assets/images/banner-bg.jpg);
    background-size: cover;
    background-position: left top;
    .cont {
      color: #fff;
      padding: 45px 0 0 0;
      h2 {
        font-size: 47px;
        font-weight: 900;
        span {
          color: rgb(45, 251, 223);
        }
      }
      .hint {
        margin: 20px 0 40px;
      }
    }
  }
}
</style>
