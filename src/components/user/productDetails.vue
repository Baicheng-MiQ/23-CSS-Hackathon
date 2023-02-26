<template>
    <div class="flex flex-row space-x-4 bg-gray-50 p-4">
      <div class="w-1/3 flex flex-col">
        <h1 class="text-3xl font-bold mb-4">Product Details</h1>
        <img :src="product.img" alt="">
        <h2 class="text-xl mt-4">{{ product.name }}</h2>
      </div>
  
      <div class="w-2/3 bg-white rounded-md shadow-md p-4">
        <div class="flex flex-col space-y-4">
          <div class="flex flex-row space-x-2">
            <h2 class="text-lg font-semibold">Expiry Dates:</h2>
            <p class="date">{{ product.expiry_time }}</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h2 class="text-lg font-semibold">Dietary Required:</h2>
            <p class="labels">{{ product.dietary_Labels }}</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h2 class="text-lg font-semibold">Quantity Left:</h2>
            <p class="quantity">{{ product.qty }}</p>
          </div>
          <div class="flex flex-row space-x-4">
            <h2 class="text-2xl font-semibold text-green-600">Discounted Price:</h2>
            <h2 class="text-2xl font-semibold price-discounted">{{ product.price_discounted }}</h2>
            <h2 class="text-2xl font-semibold text-gray-400 line-through">{{ product.price_original }}</h2>
          </div>
          <div class="flex flex-row space-x-2">
            <button class="px-4 py-2 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-200 ease-in-out">Reserve!</button>
            <button class="px-4 py-2 rounded-md bg-gray-300 text-gray-700 font-semibold hover:bg-gray-400 transition duration-200 ease-in-out" @click="$emit('returnToMerchantDetail')">Return</button>
          </div>
        </div>
      </div>
    </div>
    
  </template>

<script>
export default {
    name: 'productDetails',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    computed: {
        
    }
}
</script>
<style >
.quantity {
  font-size: 1.5rem;
  color: #555;
  font-weight: bold;
  text-transform: uppercase;
}

.labels {
  font-size: 1rem;
  color: #555;
  font-weight: bold;
  text-transform: uppercase;
}

.date {
  font-size: 1rem;
  color: #555;
  font-weight: bold;
  text-transform: uppercase;
}



    
</style>