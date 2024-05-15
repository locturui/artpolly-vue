<template>
  <section class="contacts">
    <h2>Наши контакты</h2>
    <div class="info-contact">
      <div class="box1">
        <ContactItem>
          <template #name>Телефон</template>
          <template #content>{{ contacts.Phone }}</template>
        </ContactItem>
        <ContactItem>
          <template #name>Адрес</template>
          <template #content>{{ contacts.Address }}</template>
        </ContactItem>
      </div>
      <div class="box2">
        <ContactItem>
          <template #name>Email</template>
          <template #content>{{ contacts.Email }}</template>
        </ContactItem>
        <ContactItem>
          <template #name>Часы работы</template>
          <template #content>{{ contacts.WHours }}</template>
        </ContactItem>
      </div>
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
  background-color: #ffeced;
  padding: 0 0 2em 0;
}
h2 {
  text-align: center;
}
.info-contact {
  display: grid;
  grid-template-columns: 50% 50%;
}
.box1 {
  display: grid;
  justify-items: end;
}
.box2 {
  display: grid;
  justify-items: start;
}
</style>
