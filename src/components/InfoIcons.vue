<template>
  <div>
    <IconItem imgUrl="/image/photo_about.jpeg">
      <template #header>Творчество рядом</template>
      <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </template>
    </IconItem>
    <IconItem imgUrl="/image/photo_about.jpeg">
      <template #header>Творчество рядом</template>
      <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </template>
    </IconItem>
    <IconItem imgUrl="/image/photo_about.jpeg">
      <template #header>Творчество рядом</template>
      <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </template>
    </IconItem>
  </div>
</template>

<script setup lang="ts">
import IconItem from './IconItem.vue'
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
}
</style>
