<template>
  <section class="shop">
    <h2>Наша продукция</h2>
    <h3>Категория 1</h3>
    <div class="wrapper">
      <ShopItem v-for="shop of shops" :imgUrl="shop.url" :key="shop.id">
        <template #name>{{ shop.name }}</template>
        <template #price>{{ shop.price }} р.</template>
        <template #content>{{ shop.content }} </template>
      </ShopItem>
    </div>
    <h3>Категория 2</h3>
    <div class="wrapper">
      <ShopItem v-for="shop2 of shops2" :imgUrl="shop2.url" :key="shop2.id">
        <template #name>{{ shop2.name }}</template>
        <template #price>{{ shop2.price }} р.</template>
        <template #content>{{ shop2.content }} </template>
      </ShopItem>
    </div>
  </section>
  <TheFooter></TheFooter>
</template>
<script setup>
import ShopItem from './ShopItem.vue'
import TheFooter from './TheFooter.vue'
const shops = [
  {
    id: 1,
    url: '/image/photo_pot.jpeg',
    name: 'Товар',
    price: 1555,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum leo augue, quis cursus nisl sagittis vel'
  },
  {
    id: 2,
    url: '/image/photo_pot.jpeg',
    name: 'Товар',
    price: 1555,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum leo augue, quis cursus nisl sagittis vel'
  },
  {
    id: 3,
    url: '/image/photo_pot.jpeg',
    name: 'Товар',
    price: 1555,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum leo augue, quis cursus nisl sagittis vel'
  }
]
const shops2 = [
  {
    id: 1,
    url: '/image/photo_pot.jpeg',
    name: 'Товар',
    price: 1555,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum leo augue, quis cursus nisl sagittis vel'
  },
  {
    id: 2,
    url: '/image/photo_pot.jpeg',
    name: 'Товар',
    price: 1555,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum leo augue, quis cursus nisl sagittis vel'
  },
  {
    id: 3,
    url: '/image/photo_pot.jpeg',
    name: 'Товар',
    price: 1555,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum leo augue, quis cursus nisl sagittis vel'
  }
]
</script>
<style scoped>
.shop {
  padding-top: 6em;
  width: 75%;
  margin: 0 auto;
}
h2 {
  text-align: center;
}
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5em;
}

h3 {
  font-size: 1.5em;
}
</style>
