<template>
  <button
    :class="
      props.variant == 'primary'
        ? 'bg-yellow-500 rounded-lg w-7 h-72'
        : props.variant == 'secondary'
        ? 'bg-yellow-200 rounded-lg w-7 h-72'
        : props.variant == 'tertiary'
        ? 'bg-yellow-200 rounded-lg w-7 h-44'
        : props.variant == 'semisecond'
        ? 'bg-yellow-200 rounded-lg w-7 h-32'
        : ''
    "
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
  },
});
</script>
