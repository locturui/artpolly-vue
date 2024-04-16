<template>
  <button :class="props.classes.join(' ')">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{
  classes: string[]
}>()
</script>
<style scoped>
.btn {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border: 0.07em solid white;
  border-radius: 3em;
  padding: 1em 2em;
  font-family: Helvetica, sans-serif;
  font-size: 14;
  color:#ffffff;
}
.nav-btn {
  background-color: #ffffff;
  opacity: 90%;
  border-color: none;
  color:inherit;
}
</style>
