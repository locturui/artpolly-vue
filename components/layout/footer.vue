<template>
  <footer>
    <div class="footer-content">
      <span>© Stepan Leonov, {{ new Date().getFullYear() }}</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
footer {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%);
  color: var(--text-primary);
  padding: 3em 2em;
  margin-top: 0;
  position: relative;
  overflow: hidden;
}

footer::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
}

span {
  font-size: 0.95em;
  opacity: 0.7;
  letter-spacing: 0.02em;
}

@media (max-width: 768px) {
  footer {
    padding: 2.5em 1.5em;
  }
}

@media (max-width: 480px) {
  footer {
    padding: 2em 1em;
  }
  
  span {
    font-size: 0.9em;
  }

  footer::before {
    display: none;
  }
}
</style>
