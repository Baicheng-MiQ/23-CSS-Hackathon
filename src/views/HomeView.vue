
<template>
    <div class="bg-gray-100 h-screen">
      <HomeC class="text-center text-5xl pt-12"/>
  
      <div class="max-w-md mx-auto mt-16 bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-3xl text-pink-800 text-center font-bold mb-8">
          Login
        </h1>
        <div class="flex flex-col justify-center items-center mb-8">
          <router-link to="/user" class="py-4 px-8 bg-pink-800 text-white rounded-full text-lg tracking-wide hover:bg-pink-900 transition duration-200">
            User View
          </router-link>
          <router-link to="/merchant" class="py-4 px-8 bg-pink-800 text-white rounded-full text-lg tracking-wide hover:bg-pink-900 transition duration-200 mt-4">
            Merchant View
          </router-link>
        </div>
      </div>
    </div>
  </template>
  

<script>
import HomeC from "../components/home.vue";
export default {
    name: 'Home',
    components: {
    HomeC
}
}
</script>

<style>

</style>