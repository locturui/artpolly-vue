<script setup lang="ts">
import { ref } from 'vue'

const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const closeMenu = () => {
  showMenu.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <NuxtLink to="/" class="logo-link" @click="closeMenu">
        <div class="logo"></div>
        <span class="brand">Artpolly Studio</span>
      </NuxtLink>

      <ul class="nav-menu desktop-menu">
        <li><NuxtLink to="/classes">Мастер классы</NuxtLink></li>
        <li><NuxtLink to="/offering">Услуги</NuxtLink></li>
        <li><NuxtLink to="/shop">Наша продукция</NuxtLink></li>
      </ul>

      <SharedActionButton class="desktop-btn" :classes="['btn', 'nav-btn']">
        Узнать больше
      </SharedActionButton>

      <button 
        class="hamburger" 
        :class="{ active: showMenu }"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="mobile-menu" :class="{ open: showMenu }">
      <ul>
        <li><NuxtLink to="/classes" @click="closeMenu">Мастер классы</NuxtLink></li>
        <li><NuxtLink to="/offering" @click="closeMenu">Услуги</NuxtLink></li>
        <li><NuxtLink to="/shop" @click="closeMenu">Наша продукция</NuxtLink></li>
        <li>
          <SharedActionButton :classes="['btn', 'mobile-cta']" @click="closeMenu">
            Узнать больше
          </SharedActionButton>
        </li>
      </ul>
    </div>

    <div 
      v-if="showMenu" 
      class="overlay" 
      @click="closeMenu"
    ></div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999999;
  display: flex;
  justify-content: center;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, rgba(250, 248, 246, 0.98) 0%, rgba(250, 248, 246, 0.95) 100%);
  backdrop-filter: blur(20px);
  padding: 1.2em 3em;
  width: 100%;
  margin: 0;
  border-radius: 0;
  box-shadow: 0 1px 0 rgba(139, 115, 85, 0.08);
  border-bottom: 1px solid var(--soft-gray);
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.8em;
  transition: transform 0.3s ease;
}

.logo-link:hover {
  transform: translateY(-2px);
}

.logo {
  background: linear-gradient(135deg, var(--secondary) 0%, var(--secondary-light) 100%);
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(212, 165, 154, 0.3);
}

.brand {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 600;
  font-size: 1.15em;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
  letter-spacing: -0.01em;
}

.desktop-menu {
  display: flex;
  align-items: center;
  gap: 2.5em;
  list-style: none;
  margin: 0 auto;
  padding: 0;
}

.desktop-menu li {
  margin: 0;
}

.desktop-menu a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 0.9em;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  position: relative;
  padding: 0.5em 0;
}

.desktop-menu a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.desktop-menu a:hover {
  color: var(--primary);
}

.desktop-menu a:hover::after {
  width: 100%;
}

.desktop-menu a.router-link-active {
  color: var(--primary);
  font-weight: 600;
}

.desktop-menu a.router-link-active::after {
  width: 100%;
}

.desktop-btn {
  flex-shrink: 0;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5em;
  z-index: 1000001;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: #252525;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

.mobile-menu {
  display: none;
}

.overlay {
  display: none;
}

@media (max-width: 768px) {
  .navbar-container {
    width: 100%;
    margin: 0;
    padding: 1em 1.5em;
    border-radius: 0;
    background: rgba(255, 255, 255, 0.98);
  }

  .desktop-menu {
    display: none;
  }

  .desktop-btn {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-menu {
    display: block;
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 280px;
    background: linear-gradient(135deg, var(--cream) 0%, var(--warm-white) 100%);
    backdrop-filter: blur(20px);
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
    transition: right 0.3s ease;
    z-index: 1000000;
    padding-top: 80px;
  }

  .mobile-menu.open {
    right: 0;
  }

  .mobile-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .mobile-menu li {
    margin: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .mobile-menu a {
    display: block;
    padding: 1.2em 2em;
    color: var(--text-primary);
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s;
    letter-spacing: 0.01em;
  }

  .mobile-menu a:hover {
    background-color: var(--accent-light);
    padding-left: 2.5em;
    color: var(--primary-dark);
  }

  .mobile-menu li:last-child {
    border-bottom: none;
    padding: 1.5em 2em;
  }

  .overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999998;
    opacity: 0;
    animation: fadeIn 0.3s forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  .logo {
    width: 2.8em;
    height: 2.8em;
  }

  .brand {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0.8em 1em;
  }

  .logo {
    width: 2.5em;
    height: 2.5em;
  }

  .brand {
    font-size: 13px;
  }

  .mobile-menu {
    width: 240px;
  }
}
</style>
