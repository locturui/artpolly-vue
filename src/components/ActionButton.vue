<template>
  <button :class="props.classes.join(' ')">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{
  classes: string[]
}>()
</script>
<style scoped>
.btn {
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  border: 0.2em solid white;
  border-radius: 3em;
  padding: 1.2em 2em;
  font-family: Helvetica, sans-serif;
}
.nav-btn{
  background-color: #FFFFFF;
  opacity: 90%;
  border-color: none;
}
</style>
