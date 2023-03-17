<script>
import { ref } from "vue";
import axios from "axios";
import { productId } from "../composable/ProductId";

export default {
  async setup() {
    const products = ref([]);
    const loading = ref(true);
    // const getData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      console.log(res.data);
      products.value = res.data.products;
      if (products.value) {
        loading.value = false;
      }
      console.log(products);
    } catch (err) {
      console.log(err);
    }
    // };
    // try {
    //   const res = await axios.get("https://dummyjson.com/products");
    //   console.log(res.data);
    //   products.value = res.data.products;
    //   if (products.value) {
    //     loading.value = false;
    //   }
    //   console.log(products);
    // } catch (err) {
    //   console.log(err);
    // }

    return { products, loading, productId };
  },
  mounted() {
    // this.getData();
  },
};
</script>

<template>
  <h1>Fetching Data in Vue</h1>
  <div
    v-for="product in products"
    :key="product.id"
    class="item-box"
    @click="productId(products.indexOf(product) + 1)"
  >
    <router-link :to="'/products/' + product.title">
      <img
        v-if="product.id == 1"
        :src="product.images[2]"
        :alt="product.description"
      />
      <img v-else :src="product.images[0]" :alt="product.description" />
      <div>
        <h2>{{ product.title }}</h2>
        <p>${{ product.price }}</p>
      </div>
    </router-link>
  </div>
  <h1 v-show="loading">loading......</h1>
</template>
