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
        router.push("/");
      } catch (err) {
        console.log(err.message);
        switch (err.code) {
          case "auth/invalid-email":
            error.value = "Invalid email";
            break;
          case "auth/user-not-found":
            error.value = "NO account with email";
            break;
          case "auth/wrong-password":
            error.value = "Incorrect password";
            break;
          default:
            error.value = "Invalid Email or password";
            break;
        }
        // error.value = err.message;
        isPending.value = false;
      }
    };
    return { email, password, error, isPending, route, router, Login };
  },
};
</script>

<template>
  <div
    class="flex flex-col max-[500px]:w-[90%] items-center mx-auto mt-14 w-[80%] md:w-1/2 xl:w-[35%] border border-solid border-white bg-white shadow-lg shadow-white-400 py-10 px-5"
  >
    <div class="font-medium mb-2">
      <h1 class="text-3xl tracking-wider mb-1">Welcome back</h1>
      <p class="text-sm font-medium">Enter your details to continue</p>
    </div>
    <form
      @submit.prevent="Login"
      class="flex flex-col max-[500px]:w-full w-[90%] items-center gap-4 py-6 my-4"
    >
      <input
        type="text"
        placeholder="Email Address"
        v-model="email"
        class="w-[90%] p-2 border border-solid border-blue-500 rounded-lg"
      />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        class="w-[90%] p-2 border border-solid border-blue-500 rounded-lg"
      />
      <section class="flex gap-3 text-blue-600 w-[90%] text-sm items-center">
        <label for="remember">Remember Me</label>
        <input
          type="checkbox"
          id="remember"
          class="border border-solid border-black w-[15px] h-[20px]"
        />
      </section>
      <p class="text-red-600">{{ error }}</p>
      <button
        type="submit"
        class="w-1/2 rounded-lg border border-solid border-blue-700 bg-blue-700 text-white py-2"
      >
        Login
      </button>
    </form>
    <section class="flex gap-1 font-medium">
      <p class="text-gray-600 font-thin">Don't have an account?</p>
      <router-link
        to="/register"
        class="text-blue-500 hover:text-blue-600 hover:font-bold"
        >Sign Up</router-link
      >
    </section>
  </div>
</template>
