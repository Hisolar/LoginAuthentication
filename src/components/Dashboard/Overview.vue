<template>
  <section class="w-full">
    <div class="grid grid-cols-4 gap-5">
      <div class="col-span-3 bg-white rounded-lg px-4 py-2">
        <div class="flex items-end justify-between">
          <div class="flex flex-col items-center">
            <Dbutton variant="semisecond"></Dbutton>

            <p>Jan</p>
          </div>
          <div class="flex flex-col items-center">
            <Dbutton variant="tertiary"></Dbutton>

            <p>Feb</p>
          </div>
          <div class="flex flex-col items-center">
            <Dbutton variant="secondary"></Dbutton>

            <p>Mar</p>
          </div>
          <div class="flex flex-col items-center">
            <Dbutton variant="tertiary"></Dbutton>

            <p>Apr</p>
          </div>
          <div class="flex flex-col items-center">
            <Dbutton variant="secondary"></Dbutton>

            <p>Jun</p>
          </div>
          <div class="flex flex-col items-center">
            <Dbutton variant="semisecond"></Dbutton>

            <p>July</p>
          </div>
          <div class="flex flex-col items-center">
            <Dbutton variant="primary"></Dbutton>

            <p>Aug</p>
          </div>
          <div class="flex flex-col items-center">
            <Dbutton variant="tertiary"></Dbutton>

            <p>Sept</p>
          </div>
          <div class="flex flex-col items-center">
            <Dbutton variant="semisecond"></Dbutton>

            <p>Oct</p>
          </div>
          <div class="flex flex-col items-center">
            <Dbutton variant="secondary"></Dbutton>

            <p>Nov</p>
          </div>
          <div class="flex flex-col items-center">
            <Dbutton variant="semisecond"></Dbutton>

            <p>Dec</p>
          </div>
        </div>
      </div>

      <div class="col-span-1 bg-white rounded-lg px-4 py-2">
        <slot name="customer"></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import Dbutton from "../Dashboard/Dbutton.vue";
</script>
