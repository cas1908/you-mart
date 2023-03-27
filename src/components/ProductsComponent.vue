<script>
import Footer from "@/components/FooterComponent.vue";
import { ref } from "vue";
import axios from "axios";
import { productId } from "../composable/ProductId";

export default {
  components: {
    Footer: Footer,
  },
  async setup() {
    const products = ref([]);
    const loading = ref(true);
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
};
</script>

<template>
  <div>
    <main>
      <section class="product-list-section w-full flex justify-center pt-10">
        <div
          class="product-list w-[95%] mx-auto py-5 flex flex-wrap justify-around"
        >
          <div
            class="product my-2 bg-white/50 border border-solid border-white/50 rounded-xl shadow-xl -shadow-xl w-[48%] bg-clip-padding backdrop-blur-xl h-[200px] md:w-[30%] lg:w-[22%]"
            v-for="product in products"
            :key="product.id"
            @click="productId(product.id)"
          >
            <router-link
              :to="`/products/${product.id}`"
              class="flex flex-col justify-between"
            >
              <div class="product-image h-[120px] flex justify-center">
                <img
                  :src="product.thumbnail"
                  :alt="product.title"
                  class="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div class="product-info font-bold p-2 container">
                <h3 class="text-sm">{{ product.title }}</h3>
                <p class="text-red-500 text-sm">${{ product.price }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
