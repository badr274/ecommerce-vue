<template>
  <div class="app-footer">
    <v-footer :app="true" absolute>
      <v-container fluid>
        <v-row>
          <v-col cols="3" v-for="num in 3" :key="num">
            <v-card elevation="0" color="transparent">
              <v-card-title> SHOP </v-card-title>
              <v-card-text
                v-for="category in categories"
                :key="category.title"
                class="pt-0 pb-3"
              >
                <router-link
                  :to="{
                    name: 'products_category',
                    params: { category: category.route, title: category.title },
                  }"
                  style="color: rgb(71, 71, 71); text-decoration: none"
                  >{{ category.title }}</router-link
                ></v-card-text
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
};
</script>
