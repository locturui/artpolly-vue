<template>
    <section class="contacts">
        <h2>Наши контакты</h2>
        <div class="info-contact">
            <div class="box1">
                <ContactItem>
                    <template #name>Телефон</template>
                    <template #content>+7(935)652-65-34</template>
                </ContactItem>
                <ContactItem>
                    <template #name>Адрес</template>
                    <template #content>ул. Аиаии</template>
                </ContactItem>
            </div>
            <div class="box2">
                <ContactItem>
                    <template #name>Email</template>
                    <template #content>64543@34576</template>
                </ContactItem>
                <ContactItem>
                    <template #name>Часы работы</template>
                    <template #content>пн-вт 12</template>
                </ContactItem>
            </div>
        </div>
    </section>
</template>
<script setup>
import ContactItem from './ContactItem.vue'
</script>
<style scoped>
.contacts{
background-color: #FFECED;
padding: 0 0 2em 0;
}
h2{
    text-align: center;
}
.info-contact{
display: grid;
grid-template-columns: 50% 50% ;

}
.box1{
    display: grid;
    justify-items: end; 
}
.box2{
    display: grid;
    justify-items: start; 
}
</style>