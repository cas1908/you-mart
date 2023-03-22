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

    return { products, loading, productId };
  },
  mounted() {
    // this.getData();
  },
};
</script>

<template>
  <div>
    <main>
      <section
        class="product-list-section w-full flex justify-center bg-white/30 pt-5"
      >
        <div
          class="product-list w-[95%] mx-auto py-5 flex flex-wrap justify-around"
        >
          <div
            class="product flex flex-col my-2 gap-5 bg-white/50 border border-solid border-white/50 rounded-xl shadow-xl -shadow-xl w-[48%] bg-clip-padding backdrop-blur-xl h-[200px] pt-3 md:w-[30%] lg:w-[22%]"
            v-for="product in products"
            :key="product.id"
            @click="productId(product.id)"
          >
            <div class="product-image h-1/2 flex justify-center">
              <img
                :src="product.images[0]"
                :alt="product.title"
                class="w-[95%] h-full object-contain rounded-lg"
              />
            </div>
            <div class="product-info font-bold">
              <h3 class="text-base">{{ product.title }}</h3>
              <!-- <p>{{ product.description }}</p> -->
              <p class="text-red-500">${{ product.price }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer></footer>
  </div>
</template>
