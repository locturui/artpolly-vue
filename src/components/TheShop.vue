<template>

    <section class="shop">
        <h2>Наша продукция</h2>
        <h3>Категория 1</h3>
        <div class="box1">
            <ShopItem v-for="shop of shops" :imgUrl="shop.url" :key="shop.id">
                <template #name>{{ shop.name }}</template>
                <template #price>{{ shop.price }} р.</template>
                <template #content>{{shop.content}} </template>
            </ShopItem>
        </div>
        <h3>Категория 2</h3>
        <div class="box2">
            <ShopItem v-for="shop2 of shops2" :imgUrl="shop2.url" :key="shop2.id">
                <template #name>{{ shop2.name }}</template>
                <template #price>{{ shop2.price }} р.</template>
                <template #content>{{shop2.content}} </template>
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
        url: "/image/photo_pot.jpeg",
        name: "Товар",
        price: 1555,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 2,
        url: "/image/photo_pot.jpeg",
        name: "Товар",
        price: 1555,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 3,
        url: "/image/photo_pot.jpeg",
        name: "Товар",
        price: 1555,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]
const shops2 = [
    {
        id: 1,
        url: "/image/photo_pot.jpeg",
        name: "Товар",
        price: 1555,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 2,
        url: "/image/photo_pot.jpeg",
        name: "Товар",
        price: 1555,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 3,
        url: "/image/photo_pot.jpeg",
        name: "Товар",
        price: 1555,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]
</script>
<style scoped>
.shop{
    padding: 6em 2em;
    width: 80%;
    margin: 0 auto;
}
h2{
    text-align: center;
}
.box1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.box2{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
h3{
    font-size: 1.5em;
}
</style>