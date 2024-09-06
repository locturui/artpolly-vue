<template>
  <section class="contacts">
    <h2>Наши контакты</h2>
    <div class="info-contact">
      <ContactItem>
        <template #name>Телефон</template>
        <template #content>{{ contacts.Phone }}</template>
      </ContactItem>
      <ContactItem>
        <template #name>Email</template>
        <template #content>{{ contacts.Email }}</template>
      </ContactItem>
      <ContactItem>
        <template #name>Адрес</template>
        <template #content>{{ contacts.Address }}</template>
      </ContactItem>
      <ContactItem>
        <template #name>Часы работы</template>
        <template #content>{{ contacts.WHours }}</template>
      </ContactItem>
    </div>
  </section>
</template>

<script setup>
import ContactItem from './ContactItem.vue'
const uri = import.meta.env.VITE_BASE_URI

const res = await fetch(uri + '/contacts')
const contacts = await res.json()
console.log(contacts)
</script>

<style scoped>
.contacts {
  padding-top: 1.5em!important;
  background-color: #ffeced;
  padding: 0 0 2em 0;
}

h2 {
  text-align: center;
  margin-bottom: 2em;
}

.info-contact {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  grid-template-rows: repeat(2, 1fr); /* Two rows */
  gap: 1em; /* Space between the boxes */
  max-width: 800px;
  margin: 0 auto; /* Center the grid */
  padding: 0 2em;
}

ContactItem {
  background-color: #fff;
  padding: 1em;
  border-radius: 1em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%; /* Full height for grid item */
  aspect-ratio: 1 / 1; /* Maintain square shape */
  max-height: 200px;
  max-width: 200px;
}

h2 {
  font-size: 2rem;
}

ContactItem h3 {
  font-size: 1.2rem;
}

ContactItem p {
  font-size: 1rem;
}

/* Mobile view adjustments */
@media (max-width: 768px) {
  .info-contact {
    grid-template-columns: repeat(2, 1fr); /* Still 2 columns on mobile */
    gap: 0.5em;
  }

  ContactItem {
    min-height: 150px; /* Reduce size for mobile */
    min-width: 150px; /* Ensure square-like shapes on mobile */
  }

  h2 {
    font-size: 1.5rem; /* Adjust title size on mobile */
  }

  ContactItem h3 {
    font-size: 1rem; /* Adjust text size inside contact items */
  }

  ContactItem p {
    font-size: 0.875rem; /* Smaller font size for mobile */
  }
}

@media (max-width: 480px) {
  .info-contact {
    grid-template-columns: repeat(2, 1fr); /* Still maintain 2 columns on smaller screens */
    gap: 0.5em;
  }

  ContactItem {
    min-height: 120px; /* Further reduce size for smaller mobile */
    min-width: 120px; /* Ensure square-like shapes on smaller mobile */
  }

  h2 {
    font-size: 1.2rem; /* Further adjust title size on smaller screens */
  }

  ContactItem h3 {
    font-size: 0.875rem; /* Smaller header inside contact items */
  }

  ContactItem p {
    font-size: 0.75rem; /* Smaller paragraph size */
  }
}
</style>
