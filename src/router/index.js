import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products/:category/:title",
    name: "products_category",
    component: () => import("@/views/ProductsCategory.vue"),
  },
  {
    path: "/products/product-details/:id",
    name: "product_details",
    component: () => import("@/views/ProductDetails.vue"),
  },
  {
    path: "/cart-page",
    name: "cart-page",
    component: () => import("@/views/CartPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});

export default router;
