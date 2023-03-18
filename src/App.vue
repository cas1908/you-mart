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
        router.push("/signin");
      });
    };
    return { isLoggedIn, router, logOut };
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
<template>
  <nav>
    <router-link to="/">Home page</router-link> |
    <router-link to="/products" v-show="isLoggedIn">Products</router-link>
    <router-link to="/register" v-show="!isLoggedIn">Sign Up</router-link> |
    <router-link to="/login" v-show="!isLoggedIn">Sign In</router-link>
    <button @click="logOut">Sign Out</button>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
