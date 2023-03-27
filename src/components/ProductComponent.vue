<script>
import Footer from "@/components/FooterComponent.vue";
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    Footer: Footer,
  },
  async setup() {
    const item = ref([]);
    const router = useRoute();
    const id = ref(" ");
    const dataIsFetched = ref(false);

    return { item, id, router, dataIsFetched };
  },
  mounted() {
    this.id = this.router.params.title;
    // console.log(this.router.params.title);
    this.getProduct(this.id);
  },
  methods: {
    async getProduct(id) {
      try {
        const res = await axios.get("https://dummyjson.com/products/" + id);
        this.item = res.data;
        this.dataIsFetched = true;
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>
<template>
  <main class="-mt-5">
    <section v-show="dataIsFetched" class="product-info-section mt-20">
      <div class="w-1/2 border border-solid border-white/50 mx-auto mb-5">
        <img :src="item.thumbnail" :alt="item.description" />
      </div>
      <div>
        <h2>{{ item.title }}</h2>
        <p class="w-3/4 mx-auto">{{ item.description }}</p>
      </div>
    </section>
    <div class="mt-20" v-show="!dataIsFetched">
      <img src="@/assets/loader.gif" alt="loader gif" class="m-auto" />
    </div>
    <section class="product-gallery-section"></section>
    <section class="product-details-section"></section>
  </main>
  <Footer />
</template>
