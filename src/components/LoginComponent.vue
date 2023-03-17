<script>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);
    const isPending = ref(false);

    const route = useRoute();
    const router = useRouter();
    const Login = async () => {
      error.value = null;
      isPending.value = true;

      try {
        const res = await signInWithEmailAndPassword(
          getAuth(),
          email.value,
          password.value
        );
        if (!res) {
          throw new Error("Could not complete the signup");
        }
        router.push("/products");
      } catch (err) {
        console.log(err.message);
        error.value = err.message;
        isPending.value = false;
      }
    };
    return { email, password, error, isPending, route, router, Login };
  },
};
</script>

<template>
  <h1>Sign In to your account</h1>
  <form @submit.prevent="Login">
    <input type="text" placeholder="Enter email address" v-model="email" />
    <input type="password" placeholder="Enter password" v-model="password" />
    <p>{{ error }}</p>
    <button type="submit">Sign In</button>
  </form>
</template>
