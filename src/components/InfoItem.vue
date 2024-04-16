<template>
    <div class="about">
        <div class="about-text">
            <h1>О нас</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla efficitur enim iaculis, ultrices nisi non, tincidunt mi. Aenean ultricies consequat ipsum sit amet porttitor. Proin laoreet diam arcu, in semper dolor pulvinar sit amet. Nam mi justo, gravida quis enim ultrices, consectetur fringilla velit. Sed nec lacus maximus, dapibus neque vitae, dignissim quam. Phasellus eu eros justo. 
                Donec rutrum sem erat, commodo consequat est vehicula vitae. </p>
        </div>
        <div class="image">
            <!-- <img src="/image/photo_about.jpeg" alt="Фото кермачиского изделия" /> -->
        </div>
    </div>
</template>
<style scoped>
.about{
    width: 100%;
    display: flex;
    flex-direction: row;
}
h1 {
  font-size: 2.5em;
  margin: 0;
}
.image{
    width: 50% ;
    margin: 0em 2em;
    border-radius: 1.5em;
    background-image: url("/image/photo_about.jpeg");
    background-size:cover;
}
.about-text{
    width: 50% ;
    padding: 0em 2em;
}
</style>
<script setup>
</script>