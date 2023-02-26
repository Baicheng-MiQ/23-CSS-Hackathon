<template>
    <div class="bg-yellow-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="mb-6 font-bold text-4xl text-red-500 tracking-wide">
            <span class="text-brown-600">Start </span>
          </h1>
          <div class="flex justify-center mb-8">
            <a href="#addProduct" class="btn bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full">
              Add Food!
            </a>
            <addProductModal class="" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
<script>
import addProductModal from '../components/merchant/addProduct.vue'

export default {
    components: { 
        addProductModal,
    },
}
</script>
<style >
    
</style>