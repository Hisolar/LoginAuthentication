<script setup>
import Container from "../components/Menus/Container.vue";
import Items from "../components/Menus/Items.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <section class="bg-yellow-100 flex overflow-hidden w-full h-screen">
    <div class="w-56 shrink-0 bg-yellow-50 h-full">
      <div class="font-bold text-2xl px-4 py-2">Admin Portal</div>
      <Container>
        <Items class="flex items-center gap-2" :is-active="route.name == 'home'"
          ><font-awesome-icon
            :icon="['fas', 'unlock-keyhole']"
            style="color: #000000"
          />DashBoard</Items
        >
        <Items class="flex items-center gap-2">
          <font-awesome-icon :icon="['fas', 'gear']" style="color: #000000" />
          Setting</Items
        >
        <Items class="flex items-center gap-2"
          ><font-awesome-icon
            :icon="['fas', 'tent-arrow-left-right']"
            style="color: #000000"
          />
          Transactions</Items
        >
        <Items class="flex items-center gap-2"
          ><font-awesome-icon
            :icon="['fas', 'circle-down']"
            style="color: #000000"
          />Courses</Items
        >
        <Items class="flex items-center gap-2">
          <font-awesome-icon
            :icon="['fas', 'graduation-cap']"
            style="color: #000000"
          />Students</Items
        >
      </Container>
    </div>
    <article></article>
  </section>
</template>
