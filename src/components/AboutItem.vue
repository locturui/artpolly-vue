<template>
  <section>
    <InfoItem imgUrl="/image/photo_about.jpeg" :classes="['']">
      <template #header>О нас</template>
      <template #content
        >Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
        IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</template
      >
    </InfoItem>
  </section>
</template>
<script setup>
import InfoItem from './InfoItem.vue'
</script>
<style scoped>
section {
  width: 60%;
  margin: auto;
  padding-top: 7em;
}
</style>
