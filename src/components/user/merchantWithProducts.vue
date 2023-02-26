<template>
    <div class="flex flex-row space-x-3">
      <div class="w-1/3">
        <!-- merchant name and img -->
        <div class="flex flex-col my-5">
          <h2 class="text-4xl font-bold text-green-600">{{ merchant.name }}</h2>
          <img :src="merchant.logo" alt="" class="w-full h-full object-cover object-center rounded-lg shadow-lg">
          <p class="text-lg font-semibold text-gray-600 my-2">{{ merchantProducts.length }} Listings</p>
        </div>
      </div>
      <div class="w-2/3 border-l-2 p-3 h-full overflow-scroll">
        <!-- merchant products -->
        <div class="flex flex-col my-5">
          <h2 class="text-4xl font-bold text-green-600 mb-4">Our Products</h2>
          <div class="flex flex-row flex-wrap justify-center">
            <div class="w-1/3" v-for="product in merchantProducts" :key="product.Product_ID">
              <div class="flex flex-col m-1 border-2 p-3 rounded-lg h-full hover:shadow-md">
                <img :src="product.img" alt="" class="w-full h-40 object-cover object-center rounded-lg">
                <h1 class="text-xl font-semibold text-gray-700 my-2"> {{ product.name }}</h1>
                <p class="text-lg font-bold text-gray-900 mb-2">Price : {{ product.price_discounted }}</p>
                <button class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
                  @click="showProductDetail(product)">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
import axios from 'axios'
export default {
    name: 'merchantWithProducts',
    props: {
        merchant: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            merchantProducts: [
                
            ]
        }
    },
    methods: {
        showProductDetail(product) {
            this.$emit('viewProduct', product)
        },
        getProducts() {
            axios.get('https://css-hackathon-23-b6erdbabxa-nw.a.run.app/products/' + this.merchant.id)
            .then((response) => {
                this.merchantProducts = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },
    mounted() {
        this.getProducts()
    }
}
</script>
<style>
    
</style>