<template>
  <div class="icon-items">
    <SharedIconItem imgUrl="/image/photo_about.jpeg">
      <template #header>Новым клиентам</template>
      <template #content>Получите скидку <b>5%</b> на первое посещение</template>
    </SharedIconItem>
    <SharedIconItem imgUrl="/image/photo_about.jpeg">
      <template #header>Приведи друга</template>
      <template #content>Приведите друга и получите скидку <b>100р</b> за каждого человека. </template>
    </SharedIconItem>
    <SharedIconItem imgUrl="/image/photo_about.jpeg">
      <template #header>Активность в соцсетях</template>
      <template #content>Скидка <b>5%</b> за отметку в соц сетях. Бонус за отзыв</template>
    </SharedIconItem>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.icon-items {
  display: flex;
  justify-content: space-between;
  gap: 1em;
}

@media (max-width: 768px) {
  .icon-items {
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
  }
}

@media (max-width: 480px) {
  .icon-items {
    gap: 1em;
  }
}
</style>

