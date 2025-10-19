<template>
  <div class="about-card">
    <div class="about-content">
      <h2>О нас</h2>
      <p>
        АртПолли - студия для взрослых и детей, в которой каждый человек сможет раскрыть свой творческий потенциал, получить удовольствие от рисования и узнать, как помогать себе с помощью искусства. У нас дружелюбная среда, где комфортно людям любого возраста, и с разными возможностями здоровья. В нашей студии работают специалисты с высшим художественным и педагогическим образованиями.
      </p>
    </div>
    <div class="about-image">
      <img src="/image/photo_about.jpeg" alt="О нас" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4em;
  padding: 0;
}

.about-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}

h2 {
  margin: 0;
  font-size: 2.5em;
  color: var(--text-primary);
  font-weight: 600;
}

p {
  margin: 0;
  line-height: 1.8;
  color: var(--text-secondary);
  font-size: 1.05em;
  text-indent: 2em;
  text-align: justify;
}

.about-image {
  flex-shrink: 0;
  width: 50%;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 2em;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease;
}

.about-card:hover .about-image img {
  transform: scale(1.03) translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .about-card {
    flex-direction: column;
    gap: 2em;
  }

  h2 {
    font-size: 2em;
  }

  p {
    font-size: 1em;
  }

  .about-image {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .about-card {
    gap: 1.5em;
  }

  h2 {
    font-size: 1.8em;
  }

  p {
    font-size: 0.95em;
  }

  .about-image img {
    border-radius: 1.5em;
  }
}
</style>
