<template>
  <section>
    <slot></slot>
  </section>
</template>
<script setup>
import AboutItem from './AboutItem.vue'
</script>
<style scoped>
section {
  width: 60% !important;
  margin: auto;
  padding-top: 8em;
}
</style>
