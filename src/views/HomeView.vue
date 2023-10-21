<script setup>
import Container from "../components/Menus/Container.vue";
import Items from "../components/Menus/Items.vue";
import DashBoard from "../components/Dashboard/Dashboard.vue";
import Modules from "../components/Dashboard/Modules.vue";
import { useRoute } from "vue-router";
import Overview from "../components/Dashboard/Overview.vue";
import Dbutton from "../components/Dashboard/Dbutton.vue";
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
    <article>
      <DashBoard>
        <div class="flex items-center">
          <p class="text-xl font-light">Hello Amal</p>
          <div class="relative">
            <input
              class="outline-none bg-transparent border border-black px-4"
              type="search"
              placeholder="search"
            />
            <img
              class="w-4 absolute top-[6px] left-[3px]"
              src="https://res.cloudinary.com/dxiflsxek/image/upload/v1697880347/search_jbzyru.png"
              alt=""
            />
          </div>
        </div>
        <div class="grid grid-cols-4 gap-14">
          <Modules>
            <template #icon>
              <img
                src="https://res.cloudinary.com/dxiflsxek/image/upload/v1697879719/foodi/Untitled-1dolla_ivptiw.jpg"
                alt=""
              />
            </template>
            <template #text>
              <p class="text-xs text-gray-500">Earning</p>
              <p class="font-bold">$198k</p>
              <p class="text-xs">
                <span class="text-xs text-green-600">37.3% </span>this month
              </p>
            </template>
          </Modules>
          <Modules>
            <template #icon>
              <img
                src="https://res.cloudinary.com/dxiflsxek/image/upload/v1697879719/foodi/order_ewhuse.jpg"
                alt=""
              />
            </template>
            <template #text>
              <p class="text-xs text-gray-500">Orders</p>
              <p class="font-bold">$2.4k</p>
              <p class="text-xs">
                <span class="text-xs text-red-600">2% </span>this month
              </p>
            </template>
          </Modules>
          <Modules>
            <template #icon>
              <img
                src="https://res.cloudinary.com/dxiflsxek/image/upload/v1697879719/foodi/balance_sclabu.jpg"
                alt=""
              />
            </template>
            <template #text>
              <p class="text-xs text-gray-500">Balance</p>
              <p class="font-bold">$2.4k</p>
              <p class="text-xs">
                <span class="text-xs text-red-600">2% </span>this month
              </p>
            </template>
          </Modules>

          <Modules>
            <template #icon>
              <img
                src="https://res.cloudinary.com/dxiflsxek/image/upload/v1697879719/foodi/total_zygeak.jpg"
                alt=""
              />
            </template>
            <template #text>
              <p class="text-xs text-gray-500">Total Sales</p>
              <p class="font-bold">$198k</p>
              <p class="text-xs">
                <span class="text-xs text-green-600">37.3% </span>this month
              </p>
            </template>
          </Modules>
        </div>

        <Overview>
          <template #Overview> </template>

          <template #customer>
            <p class="text-3xl font-bold">Customers</p>
            <p class="text-gray-300">Customer that buy products</p>
            <img
              class="w-52"
              src="https://res.cloudinary.com/dxiflsxek/image/upload/v1697886814/pie_gezme3.svg"
              alt=""
            />
          </template>
        </Overview>
      </DashBoard>
    </article>
  </section>
</template>
