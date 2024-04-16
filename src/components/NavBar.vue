<script setup lang="ts">
import ActionButton from './ActionButton.vue'
import { RouterLink, RouterView } from 'vue-router'
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
      <li>Мастерклассы</li>
      <li>Расписание</li>
      <li>Контакты</li>
      <li>Услуги</li>
      <li>Наша продукция</li>
    </ul>
    <ActionButton :classes="['btn', 'nav-btn']">Узнать больше</ActionButton>
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
  background-color: #ffd0d4;
  opacity: 80%;
  padding: 0.5em;
  width: 75%;
  margin: 1em auto;
  border-radius: 3em;
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
  display: flex;
  align-items: center;
}

li {
  padding: 0 1em;
}

span {
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  font-size: 15;
}
</style>
