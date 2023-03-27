<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "./index.css";
export default {
  setup() {
    const isLoggedIn = ref(false);
    const router = useRouter();
    const logOut = () => {
      signOut(getAuth()).then(() => {
        router.push("/login");
        largeScreen.value = false;
      });
    };
    const largeScreen = ref(false);
    return { isLoggedIn, router, largeScreen, logOut };
  },
  mounted() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
};
</script>
<template class="bg-[#fed74c]">
  <header
    class="flex px-[5%] sticky bg-white w-full left-0 top-0 h-[70px] z-50 text-[#1f1f1f] rounded-b-3xl shadow-md"
  >
    <nav
      :class="
        largeScreen
          ? 'max-[760px]:h-[50vh] max-[760px]:w-3/5'
          : 'max-[760px]:h-[10vh]'
      "
      class="flex items-center w-full justify-between duration-100 ease-linear max-[760px]:motion-reduce:transition-[width] max-[760px]:motion-safe:transition-[width] transition-[width] max-[760px]:w-0 p-0 font-bold text-[#1f1f1f] max-[760px]:right-0 bg-white absolute md:relative z-60"
    >
      <div
        @click="() => (largeScreen = !largeScreen)"
        class="absolute right-6 top-6 flex flex-col justify-center gap-1 max-[760px]:w-[25px] border-[#1f1f1f] border-solid h-[25px]"
      >
        <span class="border-[#1f1f1f] border-t-[3px] w-full"></span>
        <span class="border-[#1f1f1f] border-t-[3px] w-full"></span>
        <span class="border-[#1f1f1f] border-t-[3px] w-full"></span>
      </div>
      <div
        :class="largeScreen ? 'flex' : 'max-[760px]:hidden'"
        class="w-full flex md:justify-between md:items-center max-[760px]:flex-col max-[760px]:justify-end mt-10 md:mt-0 max-[760px]:gap-10"
      >
        <div class="flex gap-10 max-[760px]:flex-col max-[760px]:gap-4">
          <router-link
            @click="() => (largeScreen = false)"
            to="/"
            class="hover:text-black"
            >Home</router-link
          >
          <router-link
            @click="() => (largeScreen = false)"
            to="/products"
            class="hover:text-black"
            >Products</router-link
          >
        </div>
        <div
          class="flex font-medium max-[760px]:w-full w-1/4 md:w-[30%] lg:w-1/4 xl:w-1/5 max-[760px]:justify-center gap-10 max-[760px]:gap-4 md:gap-5 md:justify-end items-center"
        >
          <router-link
            @click="() => (largeScreen = false)"
            to="/login"
            v-show="!isLoggedIn"
            class="bg-[#1f1f1f] hover:bg-[black] text-white p-2 w-2/5 rounded-full"
            >Sign In</router-link
          >
          <router-link
            @click="() => (largeScreen = false)"
            to="/register"
            v-show="!isLoggedIn"
            class="bg-[#0155b7] hover:bg-blue-700 text-white rounded-full p-2 w-2/5"
            >Sign Up</router-link
          >
          <button
            @click="logOut"
            v-show="isLoggedIn"
            class="bg-[#1f1f1f] hover:bg-[black] text-white p-2 rounded-full w-2/5"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
    <h2
      class="flex flex-col justify-center items-start pl-6 pb-10 w-1/5 sm:w-[12%] md:w-[10%] lg:w-[8%] xl:w-[7%] rounded-full bg-white absolute -bottom-6 md:left-[45%] xl:left-[47%] z-40 border border-solid border-white shadow-sm text-5xl max-[760px]:text-3xl md:text-4xl font-bold text-[#fed74c]"
    >
      <span class="relative top-4 lg:top-3 -left-2 lg:-left-1">Y</span
      ><span
        class="text-[#0155b7] absolute bottom-2 left-8 lg:left-9 xl:left-10"
        >M</span
      >
    </h2>
  </header>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f1f1f;
}

nav a.router-link-exact-active {
  color: #fed74c;
}
</style>
