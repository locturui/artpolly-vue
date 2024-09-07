<template>
  <div class="icon-items">
    <IconItem imgUrl="/image/photo_about.jpeg">
      <template #header>Новым клиентам</template>
      <template #content>Получите скидку <b>5%</b> на первое посещение</template>
    </IconItem>
    <IconItem imgUrl="/image/photo_about.jpeg">
      <template #header>Приведи друга</template>
      <template #content>Приведите друга и получите скидку <b>100р</b> за каждого человека. </template>
    </IconItem>
    <IconItem imgUrl="/image/photo_about.jpeg">
      <template #header>Активность в соцсетях</template>
      <template #content>Скидка <b>5%</b> за отметку в соц сетях. Бонус за отзыв</template>
    </IconItem>
  </div>
</template>

<script setup lang="ts">
import IconItem from './IconItem.vue'
</script>

<style scoped>
.icon-items {
  display: flex;
  justify-content: space-between;
  gap: 1em;
}

/* Mobile-specific styles */
@media (max-width: 768px) {
  .icon-items {
    flex-direction: column; /* Stack the items vertically on mobile */
    align-items: center; /* Center align for better mobile display */
    gap: 1.5em; /* Adjust the gap between items */
  }
}

@media (max-width: 480px) {
  .icon-items {
    gap: 1em; /* Reduce gap on smaller mobile screens */
  }
}
</style>

