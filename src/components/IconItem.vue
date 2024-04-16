<template>
  <div class="icon">
    <img :src="props.imgUrl" alt="Фото иконки" />
    <h1><slot name="header"></slot></h1>
    <p><slot name="content"></slot></p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  imgUrl: string
}>()
</script>

<style scoped>
.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 1em;
}
img {
  width: 4em;
  height: 4em;
  border-radius: 100%;
}
h1 {
  font-size: 1.2em;
  margin: 0;
  margin-top: 1em;
}
</style>
<script setup></script>
