<script>
import HomeC from "../components/home.vue";
export default {
    name: 'Home',
    components: {
    HomeC
}
}
</script>

<template>
<HomeC class="text-center"/>
<div>
    <h1 class="text-8xl text-pink-800 hover:text-blue-300 text-center">
        Home
    </h1>
    <div class="flex flex-col justify-center items-center">
        <router-link to="/user"> User View </router-link>
        <router-link to="/merchant"> Merchant View </router-link>
    </div>
</div>
</template>



<style>

</style>