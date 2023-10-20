<template>
  <li
    class="px-5 py-2 hover:bg-yellow-200"
    :class="isActive ? 'bg-yellow-500' : ''"
  >
    <slot></slot>
  </li>
</template>
<script setup>
const props = defineProps({
  isActive: {
    default: false,
    type: Boolean,
  },
});
</script>
