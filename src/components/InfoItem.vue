<script setup lang="ts">
const props = defineProps<{
  imgUrl: string
  classes: string[]
}>()
</script>

<template>
  <div class="about" :class="props.classes.join(' ')">
    <div class="about-text">
      <h1><slot name="header"></slot></h1>
      <p><slot name="content"></slot></p>
      <slot name="button"></slot>
    </div>
    <img :src="props.imgUrl" alt="Фото кермачиского изделия" />
  </div>
</template>
<style scoped>
.about {
  width: 100%;
  display: flex;
  flex-direction: row;
}
h1 {
  font-size: 2.5em;
  margin: 0;
}
img {
  width: 50%;
  height: max-content;
  margin: 0em 2em;
  border-radius: 1.5em;
}
.about-text {
  width: 50%;
  padding: 0em 2em;
}
.reverse {
  flex-direction: row-reverse;
}
</style>
