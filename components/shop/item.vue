<template>
  <div class="box">
    <img :src="props.imgUrl" alt="Фото иконки" />
    <span><slot name="name"></slot></span>
    <span class="price"><slot name="price"></slot></span>
    <p><slot name="content"></slot></p>
    <SharedActionButton :classes="['btn', 'black']">Купить</SharedActionButton>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ imgUrl: string }>()
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--soft-gray);
  border-radius: 1.5em;
  padding: 1.5em;
  background: var(--warm-white);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(139, 115, 85, 0.08);
  transition: all 0.3s ease;
}

.box:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(139, 115, 85, 0.15);
  border-color: var(--accent);
}

.box:hover img {
  transform: scale(1.05);
}

img {
  border-radius: 1em;
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1em;
  transition: transform 0.3s ease;
}

span {
  font-size: 1.3em;
  font-weight: 600;
  margin-bottom: 0.3em;
  color: var(--text-primary);
}

.price {
  font-size: 1.2em;
  color: var(--primary);
  font-weight: bold;
  margin-bottom: 0.8em;
}

p {
  margin-bottom: 1.5em;
  color: var(--text-secondary);
  flex-grow: 1;
  line-height: 1.6;
}
</style>
