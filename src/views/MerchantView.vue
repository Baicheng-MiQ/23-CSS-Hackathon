<template>
  <div class="bg-yellow-50 py-12 flex flex-row">
    <div class="w-1/3 p-8">
      <h1 class="text-2xl font-bold">{{ merchantDetail[0].name }}</h1>
      <img :src="merchantDetail[0].logo" alt="" class="my-6 w-64 h-64 object-cover object-center rounded-full">
      <div class="my-6">
        <p class="text-lg font-bold text-gray-700 mb-2">Collection Time:</p>
        <p class="text-lg text-gray-800">{{ merchantDetail[0].collectionTimeStart }} - {{ merchantDetail[0].collectionTimeEnd}}</p>
      </div>
      <div class="flex justify-center">
        <a href="#addProduct" class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full w-1/2 text-center">
          Add Food
        </a>
        <addProductModal class="" />
      </div>
    </div>
    <div class="w-2/3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="mb-6 font-bold text-4xl text-red-500 tracking-wide">
          <span class="text-brown-600">Start </span> Food Reduce by TODAY!
        </h1>
      </div>

      <div class="grid gap-6">
        <div class="flex flex-col my-5">
          <h2 class="text-2xl font-bold text-green-600 mb-4">Our Products</h2>
          <div class="flex flex-row flex-wrap justify-center">
            <div class="w-1/3" v-for="product in merchantProducts" :key="product.Product_ID">
              <div class="flex flex-col m-1 border-2 p-3 rounded-lg h-full hover:shadow-md">
                <img :src="product.img" alt="" class="w-full h-40 object-cover object-center rounded-lg">
                <div class="text-center">
                  <h1 class="text-lg font-semibold text-gray-700 my-2">{{ product.name }}</h1>
                </div>
                <p class="text-md text-gray-900 mb-2">Price : {{ product.price_discounted }}</p>
                <button class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg" @click="showProductDetail(product)">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




  
<script>
import addProductModal from '../components/merchant/addProduct.vue'
import axios from 'axios'
export default {
    components: { 
        addProductModal,
    },
    data() {
        return {
            merchantID: "DEMO",
            merchantDetail: [{}],
            merchantProducts: [],
        }
    },
    methods: {
        getMerchantDetail() {
            axios.get('https://css-hackathon-23-b6erdbabxa-nw.a.run.app/merchants/' + this.merchantID)
            .then((response) => {
                this.merchantDetail = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        },
        getMerchantProduct(){
            axios.get('https://css-hackathon-23-b6erdbabxa-nw.a.run.app/products/' + this.merchantID)
            .then((response) => {
                this.merchantProducts = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },
    mounted() {
        this.getMerchantDetail();
        this.getMerchantProduct();
    },
}
</script>
<style >
    
</style>