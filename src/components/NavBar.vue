<script setup lang="ts">
import ActionButton from './ActionButton.vue'
import { RouterLink, RouterView } from 'vue-router'
const btnClick = () => {
  alert('modal')
}
</script>

<template>
  <div class="bar">
    <RouterLink to="/">
      <div class="logo-wrapper">
        <div class="logo"></div>
        <span>Artpolly Studio</span>
      </div>
    </RouterLink>
    <ul>
      <li><RouterLink to="/classes">Мастер классы</RouterLink></li>
      <li><RouterLink to="/schedule">Расписание</RouterLink></li>
      <li><RouterLink to="/contacts">Контакты</RouterLink></li>
      <li><RouterLink to="/offering">Услуги</RouterLink></li>
      <li><RouterLink to="/shop">Наша продукция</RouterLink></li>
    </ul>
    <ActionButton :classes="['btn', 'nav-btn']" @click="btnClick">Узнать больше</ActionButton>
  </div>
</template>

<style>
.bar {
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(255, 208, 212, 0.8);
  padding: 0.5em;
  width: 70%;
  margin: 1em auto;
  border-radius: 3em;
  z-index: 999999 !important;
}
.logo-wrapper {
  display: flex;
  align-items: center;
}
.logo {
  background-color: white;
  border-radius: 50%;
  width: 4em;
  height: 4em;
  margin-right: 0.7em;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

span {
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  font-size: 15;
}
</style>
