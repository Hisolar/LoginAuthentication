<template>
  <section
    class="bg-yellow-200 w-screen min-h-screen flex flex-col items-center justify-center"
  >
    <div class="bg-white max-w-md">
      <div class="mx-auto px-5 py-2">
        <h1 class="font-bold text-2xl my-4 text-center">LoginAuthentication</h1>

        <form
          class="flex flex-col gap-5 max-w-sm mx-auto"
          @submit.prevent="adminLogin"
        >
          <div class="flex flex-col gap-5">
            <div class="">
              <label class="">Username</label>
              <input
                v-model="email"
                class="outline-none w-full p-3 border"
                type="Email"
                placeholder="Enter your Username"
              />
            </div>
            <div class="">
              <label class="">Password</label>
              <input
                v-model="password"
                class="outline-none w-full p-3 border"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button
            type="submit"
            class="bg-yellow-400 px-3 py-1 text-white uppercase tracking-widest w-full flex items-center justify-center"
          >
            <div v-if="formIsLoading">
              <Loading class="w-6"></Loading>
            </div>
            <div>Login</div>
          </button>

          {{ email }} {{ password }}
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import Loading from "../components/Loading.vue";
const email = ref("");
const password = ref("");

const formIsLoading = ref(false);

const adminLogin = () => {
  formIsLoading.value = true;
  axios
    .post("https://aa.apis.micakin.com/api/admins/auth/login", {
      email: email.value,
      password: password.value,
    })
    .then((success) => {
      formIsLoading.value = false;
    })
    .catch((err) => {
      formIsLoading.value = false;
      toast(err.response.data.message, {
        autoClose: 1000,
      }); // ToastOptions
    });
};
</script>
