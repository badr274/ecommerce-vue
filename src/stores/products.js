import axios from "axios";
import { defineStore } from "pinia";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    laptopsCategory: [],
    phonesCategory: [],
    fragrances: [],
    groceries: [],
    categories: [
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Mens Shirts",
        route: "mens-shirts",
      },
      {
        title: "Mens Shoes",
        route: "mens-shoes",
      },
      {
        title: "Mens Watches",
        route: "mens-watches",
      },
      {
        title: "Tablets",
        route: "tablets",
      },
      {
        title: "Motorcycle",
        route: "motorcycle",
      },
    ],
    productsByCategory: [],
    productDetails: [],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.flashDeals = res.data.products.slice(0, 8);
          this.laptopsCategory = res.data.products.filter((product) => {
            product.category === "laptops";
          });
          this.phonesCategory = res.data.products.filter((product) => {
            product.category === "smartphones";
          });
          this.fragrances = res.data.products.filter((product) => {
            product.category === "fragrances";
          });
          this.groceries = res.data.products.filter((product) => {
            product.category === "groceries";
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.productsByCategory = res.data));
    },
    async getProductDetails(id) {
      await axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => (this.productDetails = res.data));
    },
  },
});
