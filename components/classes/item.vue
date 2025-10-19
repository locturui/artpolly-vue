<template>
  <div class="box">
    <div class="header">
      <h3><slot name="name"></slot></h3>
      <span><slot name="price"></slot></span>
    </div>
    <div class="content">
      <p><slot name="content"></slot></p>
      <SharedActionButton :classes="['btn', 'green']">Выбрать</SharedActionButton>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  border-collapse: separate;
  width: 100%;
  margin: 0.4em;
  text-align: start;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border-radius: 2em;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.box:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.header {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  color: white;
  padding: 2em 2em 2em 1.4em;
  font-weight: bold;
  font-size: 0.8em;
  width: 100%;
}

.content {
  background: var(--warm-white);
  color: inherit;
  padding: 2em 1.4em;
  font-size: 0.9em;
}

p {
  margin-bottom: 5rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

h3 {
  margin: 0;
  font-size: 1.7em;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .header {
    padding: 1.5em 1.2em;
  }

  .content {
    padding: 1.5em 1.2em;
  }

  h3 {
    font-size: 1.5em;
  }

  p {
    margin-bottom: 3rem;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 1.2em;
  }

  .content {
    padding: 1.2em;
  }

  h3 {
    font-size: 1.3em;
  }

  p {
    margin-bottom: 2rem;
  }
}
</style>

