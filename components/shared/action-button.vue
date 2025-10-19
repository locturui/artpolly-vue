<template>
  <button :class="props.classes.join(' ')" @click="openModal">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
const props = defineProps(['classes'])

const { openModal } = useModal()
</script>
<style scoped>
.btn {
  background: none;
  color: inherit;
  border: 2px solid white;
  padding: 0.8em 1.8em;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border-radius: 3em;
  font-family: inherit;
  font-size: 0.95em;
  font-weight: 600;
  color: #ffffff;
  transition: all 0.3s ease;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.nav-btn {
  background: linear-gradient(135deg, var(--secondary) 0%, var(--secondary-light) 100%);
  opacity: 1;
  border: none;
  color: white;
  font-weight: bold;
}

.nav-btn:hover {
  background: linear-gradient(135deg, var(--secondary-dark) 0%, var(--secondary) 100%);
  transform: translateY(-2px);
}

.dark-btn {
  color: var(--text-primary);
  border-color: var(--primary);
  background: var(--warm-white);
}

.dark-btn:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.green {
  color: white;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  border: none;
  font-weight: bold;
}

.green:hover {
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--sage-light) 100%);
}

.white {
  font-weight: bold;
  color: white;
  width: fit-content;
  border-color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
}

.white:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
}

.black {
  font-weight: bold;
  color: var(--text-primary);
  border-color: var(--primary);
  background: var(--warm-white);
  width: fit-content;
}

.black:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}
</style>
