<template>
    <div class="box">
        <h3><slot name="name"></slot></h3>
        <p><slot name="content"></slot></p>
    </div>
</template>
<script setup>

</script>
<style scoped>
.box{
    background-color: #FFFFFF;
    padding: 0.5em 1.5em;
    border-radius: 1.5em;
}
</style>