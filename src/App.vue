<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { provide, ref } from 'vue';
import FeedbackModal from './components/FeedbackModal.vue';

// Global modal state
const isVisible = ref(false);

// Function to open the modal
const openModal = () => {
  isVisible.value = true;
};

// Function to close the modal
const closeModal = () => {
  isVisible.value = false;
};

// Provide modal control globally
provide('modal', {
  isVisible,
  openModal,
  closeModal
});
</script>

<template>
  <RouterView />
  <FeedbackModal />
</template>

<style scoped></style>
