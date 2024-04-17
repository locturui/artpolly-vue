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
  padding: 0.7em 1.2em;
  font-family: Helvetica, sans-serif;
  font-size: 14;
  color: #ffffff;
}
.nav-btn {
  background-color: #ffffff;
  opacity: 90%;
  border-color: none;
  color: inherit;
  font-weight: bold;
}
.dark-btn {
  color: inherit;
  border-color: #252525;
}
.green {
  color: white;
  background-color: #83a165;
  border-color: none;
  font-weight: bold;
}
</style>
