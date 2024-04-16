<template>
    <div class="icon">
      <img  src="/image/photo_about.jpeg" alt="Фото иконки" />
      <h1><slot name="header"></slot></h1>
      <p><slot name="content"></slot></p>
    </div>
</template>
<style scoped>
.icon{
    display: flex;
    flex-direction: column;
    align-items: center;
}
img{
    width: 4em;
    height: 4em;
    border-radius: 100%;
}
h1{
  font-size: 1.2em;
  margin: 0;
  margin-top: 1em;
}
</style>
<script setup>
</script>