<script setup lang="ts">
import ActionButton from './ActionButton.vue'
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

// Add a ref to control the visibility of the menu
const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

// Check if the screen is mobile-sized
const { width } = useWindowSize()
const isMobile = computed(() => width.value < 1220)
</script>

<template>
  <div class="bar">
    <RouterLink to="/">
      <div class="logo-wrapper">
        <div class="logo"></div>
        <span>Artpolly Studio</span>
      </div>
    </RouterLink>

    <ul :class="{ hidden: isMobile && !showMenu }">
      <li><RouterLink to="/classes">Мастер классы</RouterLink></li>
      <li><RouterLink to="/schedule">Расписание</RouterLink></li>
      <li><RouterLink to="/offering">Услуги</RouterLink></li>
      <li><RouterLink to="/shop">Наша продукция</RouterLink></li>
    </ul>

    <ActionButton v-if="!isMobile" :classes="['btn', 'nav-btn']" >Узнать больше</ActionButton>
    <button v-if="isMobile" class="menu-toggle" @click="toggleMenu">
      <span class="toggle" v-if="!showMenu">☰</span>
      <span class="toggle" v-else>✕</span>
    </button>
  </div>
</template>

<style scoped>
.toggle {
  font-size: 1.5em;
}
.bar {
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 208, 212, 0.8);
  padding: 0.5em;
  width: 70%;
  margin: 1em auto;
  border-radius: 3em;
  z-index: 999999 !important;
  transition: all 0.3s ease-in-out;
}

/* Logo styling */
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
  font-size: 15px;
}

/* Hide the ul on mobile unless the menu is toggled */
.hidden {
  display: none;
}

/* Toggle button for mobile menu */
.menu-toggle {
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: white;
  margin-right: 1em; /* Position to the left of the logo */
}

/* Responsive Styling */
@media (max-width: 1220px) {
  .bar {
    width: 100%;
    flex-direction: row; /* Keep in a row for better alignment */
    padding: 1em;
    border-radius: 0;
    margin: 0;
  }

  .logo-wrapper {
    flex-grow: 1;
  }

  ul {
    flex-direction: column;
    width: 100%;
    margin-top: 1em;
    justify-content: center;
  }

  ul li {
    margin-bottom: 0.5em;
  }

  .logo {
    width: 3em;
    height: 3em;
  }

  span {
    font-size: 13px;
  }
}

@media (min-width: 1220px) {
  /* Ensure the desktop layout is maintained */
  .menu-toggle {
    display: none;
  }

  ul {
    display: flex !important;
  }
}

@media (max-width: 480px) {
  .bar {
    width: 100%;
    padding: 1em 0.5em;

    margin: 0;
  }

  ul {
    width: 100%;
  }

  .logo {
    width: 2.5em;
    height: 2.5em;
  }

  span {
    font-size: 12px;
  }
}
</style>
