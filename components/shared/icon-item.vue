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
  padding: 0;
  margin: 0 1em;
  transition: transform 0.3s ease;
}

.icon:hover {
  transform: translateY(-4px);
}

img {
  width: 4em;
  height: 4em;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.icon:hover img {
  transform: scale(1.15);
}

h1 {
  font-size: 1.2em;
  margin: 1em 0 0 0;
  font-weight: 600;
  color: var(--text-primary);
}

p {
  font-size: 1em;
  margin: 0.5em 0 0 0;
  padding: 0 1em;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .icon {
    margin: 0 0.5em;
  }

  img {
    width: 3.5em;
    height: 3.5em;
  }

  h1 {
    font-size: 1.1em;
  }

  p {
    font-size: 0.95em;
    padding: 0 0.8em;
  }
}

@media (max-width: 480px) {
  .icon {
    margin: 0;
  }

  img {
    width: 3em;
    height: 3em;
  }

  h1 {
    font-size: 1em;
  }

  p {
    font-size: 0.9em;
    padding: 0 0.5em;
  }
}
</style>
