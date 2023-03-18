<script>
import axios from "axios";
import { ref } from "vue";
import { productId } from "../composable/ProductId";

export default {
  async setup() {
    const product = ref(productId);
    const item = ref([]);
    const dataIsFetched = ref(false);
    console.log(product);

    return { item, product, dataIsFetched, productId };
  },
  methods: {
    getProduct(product) {
      axios
        .get("https://dummyjson.com/products/" + product)
        .then((res) => {
          console.log(res.data);
          this.item = res.data;
          this.dataIsFetched = true;
          console.log(this.item);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },

  // beforeMount(()=>{
  //     console.log(productId())
  // })

  mounted() {
    this.product = productId();
    this.getProduct(this.product);
    // setTimeout(() => {
    //   this.product = productId();
    //   console.log(this.product);
    //   this.getProduct(this.product);
    // }, 10000);
  },
};
</script>
<template>
  {{ dataIsFetched ? item.title : "Loading...." }}
  <main>
    <section class="product-info-section"></section>
    <section class="product-gallery-section"></section>
    <section class="product-details-section"></section>
  </main>
</template>
