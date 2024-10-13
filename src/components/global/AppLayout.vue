<template>
  <div class="layout">
    <v-layout class="position-relative">
      <AppDrawer />
      <v-main style="padding-top: 150px">
        <slot></slot>
      </v-main>
      <AppNav />
      <FixedNav />
      <AppFooter />
    </v-layout>
  </div>
</template>

<script>
import AppDrawer from "./AppDrawer.vue";
import AppFooter from "./AppFooter.vue";
import AppNav from "./AppNav.vue";
import FixedNav from "./FixedNav.vue";
export default {
  data() {
    return {};
  },
  components: {
    AppDrawer,
    AppFooter,
    AppNav,
    FixedNav,
  },
};
</script>
