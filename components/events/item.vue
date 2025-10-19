<template>
  <div class="box">
    <img :src="props.imgUrl" alt="Фото иконки" />
    <h3><slot name="name"></slot></h3>
    <p><slot name="content"></slot></p>
    <div id="btn"><SharedActionButton :classes="['btn', 'white']">Регистрация</SharedActionButton></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ imgUrl: string }>()
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0.4em;
  text-align: start;
  transition: transform 0.3s ease;
}

.box:hover {
  transform: translateY(-8px);
}

.box:hover img {
  transform: scale(1.05);
}

#btn {
  margin-top: auto;
}

img {
  border-radius: 1.5em;
  width: 100%;
  height: 15em;
  object-fit: cover;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

p {
  color: white;
  margin: 1em 0 1.7em 0;
  width: 80%;
  line-height: 1.6;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

h3 {
  font-size: 1.7em;
  color: white;
  margin: 1em 0 0 0;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
</style>
