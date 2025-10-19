<script setup lang="ts">
const props = defineProps<{
  imgUrl: string
  classes: string[]
}>()
</script>

<template>
  <div :class="['info-card'].concat(props.classes)">
    <div class="card-image">
      <img :src="props.imgUrl" alt="Фото керамического изделия" />
    </div>
    <div class="card-content">
      <h2><slot name="header"></slot></h2>
      <p><slot name="content"></slot></p>
      <div class="btn"><slot name="button"></slot></div>
    </div>
  </div>
</template>

<style scoped>
.info-card {
  width: 100%;
  background: var(--warm-white);
  border-radius: 2em;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(139, 115, 85, 0.12);
  border: 1px solid var(--soft-gray);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: row;
  min-height: 350px;
}

.info-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 50px rgba(139, 115, 85, 0.2);
}

.reverse {
  flex-direction: row-reverse;
}

.card-image {
  position: relative;
  width: 45%;
  overflow: hidden;
  flex-shrink: 0;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.info-card:hover .card-image img {
  transform: scale(1.1);
}

.card-content {
  padding: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  flex: 1;
}

h2 {
  margin: 0;
  font-size: 2em;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.2;
}

p {
  margin: 0;
  line-height: 1.7;
  color: var(--text-secondary);
  font-size: 1.08em;
}

.btn {
  margin-top: 0;
}

@media (max-width: 1024px) {
  .card-image {
    width: 40%;
  }

  .card-content {
    padding: 2.5em;
  }
}

@media (max-width: 768px) {
  .info-card {
    flex-direction: column;
    min-height: auto;
  }

  .reverse {
    flex-direction: column;
  }

  .card-image {
    width: 100%;
    height: 260px;
  }

  .card-content {
    padding: 2em;
  }

  h2 {
    font-size: 1.7em;
  }

  p {
    font-size: 1.05em;
  }
}

@media (max-width: 480px) {
  .card-image {
    height: 220px;
  }

  .card-content {
    padding: 1.8em 1.5em;
    gap: 1.5em;
  }

  h2 {
    font-size: 1.5em;
  }

  p {
    font-size: 1em;
  }
}
</style>


