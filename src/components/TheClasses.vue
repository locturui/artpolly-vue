<template>
  <NarrowSection>
    <div v-for="(cat, i) in data" class="wrapper" :key="cat.ID">
      <InfoItem :imgUrl="cat.ImageURL" :classes="[i % 2 == 1 ? '' : 'reverse']">
        <template #header>{{ cat.Title }}</template>
        <template #content>{{ cat.Description }} </template>
        <template #button>
          <ActionButton :classes="['btn', 'dark-btn']">Записаться</ActionButton>
        </template>
      </InfoItem>
    </div>
  </NarrowSection>
  <TheFooter></TheFooter>
</template>

<script setup lang="ts">
import InfoItem from './InfoItem.vue'
import ActionButton from './ActionButton.vue'
import NarrowSection from './NarrowSection.vue'
import TheFooter from './TheFooter.vue'
const res = await fetch('http://localhost:3000/class')
const data = await res.json()
console.log(data)
</script>

<style scoped>
.wrapper {
  margin-bottom: 8em;
}
</style>
