<template>
  <app-layout>
    <router-view />
    <QuickView />
    <v-snackbar
      v-model="bar"
      location="left bottom"
      max-width="300"
      timeout="3000"
      >{{ itemTitle }} has been added to your cart successfully!
      <template v-slot:actions
        ><v-icon @click="bar = false">mdi-close</v-icon></template
      ></v-snackbar
    >
  </app-layout>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}
v-rating__wrapper {
  margin-right: 5px;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

<script>
import AppLayout from "./components/global/AppLayout.vue";
import QuickView from "./components/global/QuickView.vue";
export default {
  inject: ["emitter"],
  components: {
    AppLayout,
    QuickView,
  },
  data() {
    return {
      bar: false,
      itemTitle: "",
    };
  },
  mounted() {
    this.emitter.on("succAdding", (data) => {
      this.itemTitle = data;
      this.bar = true;
    });
  },
};
</script>
