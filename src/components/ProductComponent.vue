<script>
import axios from "axios";
import { ref } from "vue";
import { productId } from "../composable/ProductId";

export default {
  async setup() {
    const product = ref(productId);
    const item = ref([]);
    const dataIsFetched = ref(false);
    // setTimeout(() => {
    //   product.value = productId();
    //   console.log(productId());
    // }, 10000);
    console.log(product);
    // try {
    //   const res = await axios.get("https://dummyjson.com/products/" + product);
    //   console.log(res.data);
    //   item.value = res.data;
    //   dataIsFetched.value = true;
    //   console.log(item);
    // } catch (error) {
    //   console.log(error.message);
    // }

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
</template>
