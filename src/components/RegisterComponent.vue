<script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const password = ref("");
    const error = ref(null);
    const isPending = ref(false);

    const route = useRoute();
    const router = useRouter();

    const Register = async () => {
      error.value = null;
      isPending.value = true;

      try {
        const res = await createUserWithEmailAndPassword(
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
        error.value = err.message;
        isPending.value = false;
      }
    };
    return {
      firstName,
      lastName,
      email,
      password,
      error,
      isPending,
      route,
      router,
      Register,
    };
  },
};
</script>

<template>
  <div
    class="flex flex-col items-center mx-auto mt-20 w-[80%] md:w-1/2 xl:w-[35%] border border-solid border-white bg-white shadow-lg shadow-white-400 p-10"
  >
    <div class="font-medium mb-2">
      <h1 class="text-3xl tracking-wider mb-1">Create an account</h1>
      <p class="text-sm font-medium">Enter your details to continue</p>
    </div>
    <form
      @submit.prevent="Register"
      class="flex flex-col items-center gap-4 py-6 my-4 mt-8"
    >
      <section class="flex justify-between w-[90%]">
        <input
          type="text"
          placeholder="First name"
          v-model="firstName"
          class="w-[48%] p-2 border border-solid border-blue-500 rounded-lg"
        />
        <input
          type="text"
          placeholder="Last Name"
          v-model="lastName"
          class="w-[48%] p-2 border border-solid border-blue-500 rounded-lg"
        />
      </section>
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
      <p>{{ error }}</p>
      <button
        type="submit"
        class="w-1/2 rounded-lg border border-solid border-blue-700 bg-blue-700 text-white py-2"
      >
        Create account
      </button>
    </form>
    <section class="flex gap-1 font-medium">
      <p class="text-gray-600 font-thin">Already have an account?</p>
      <router-link
        to="/login"
        class="text-blue-500 hover:text-blue-600 hover:font-bold"
        >Log in</router-link
      >
    </section>
  </div>
</template>
