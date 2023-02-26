<template>
  <div class="bg-yellow-50 h-screen">
    <h1 class="text-center text-6xl font-serif font-bold text-red-600 pt-24">
      Welcome to <span class="text-white bg-red-600 px-4 py-1 rounded-md">YumYumNow</span>
    </h1>
    <div class="max-w-md mx-auto mt-16 bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-3xl text-red-600 text-center font-bold mb-8">
        Login
      </h1>
      <div class="flex flex-col justify-center items-center mb-8">
        <router-link to="/user" class="py-4 px-8 bg-red-600 text-white rounded-full text-lg tracking-wide hover:bg-red-700 transition duration-200">
          User View
        </router-link>
        <router-link to="/merchant" class="py-4 px-8 bg-red-600 text-white rounded-full text-lg tracking-wide hover:bg-red-700 transition duration-200 mt-4">
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