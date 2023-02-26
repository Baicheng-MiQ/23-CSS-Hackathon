<template>
    <div class="modal" id="addProduct">
      <div class="modal-box w-11/12 max-w-5xl p-6">
        <h1 class="font-bold text-2xl mb-6">
          Add Product
        </h1>
        <div class="flex flex-row items-start">
          <div class="w-1/2 mr-6">
            <label for="img" class="text-xl font-bold mb-4">Image</label>
            <ImageUpload @imageUploaded="addImageToProductDetail" class="w-full rounded-lg overflow-hidden">
              <template #default>
                <div class="h-60 bg-gray-100 flex justify-center items-center">
                  <i class="fas fa-camera text-gray-500 text-2xl"></i>
                </div>
              </template>
            </ImageUpload>
          </div>
          <form action="" class="flex flex-col w-1/2">
            <label for="name" class="text-xl font-bold mb-2">Name</label>
            <input type="text" name="name" id="name" v-model="product_details.name" class="border-2 border-gray-400 rounded-lg p-2 mb-4">
            <div style="display: flex; justify-content: space-between;">
            <label for="price_original" class="text-xl font-bold mb-2" style="text-align: left;">Original Price</label>            <label for="price_discounted" class="text-xl font-bold mb-2" style="text-align: right;">Discounted Price</label></div>
            
            <div class="flex items-center">
              <div class="relative w-1/2 mr-2">
                <input type="number" name="price_original" id="price_original" v-model="product_details.price_original" class="border-2 border-blue-500 rounded-lg p-2 w-full" placeholder="Original Price">
                <div class="absolute top-0 bottom-0 right-0 h-full flex items-center pr-2 text-gray-400">
                  <i class="fas fa-money-bill-wave"></i>
                </div>
              </div>
              <div class="relative w-1/2 ml-2">
                <input type="number" name="price_discount" id="price_discount" v-model="product_details.price_discounted" class="border-2 border-blue-500 rounded-lg p-2 w-full" placeholder="Discounted Price">
                <div class="absolute top-0 bottom-0 right-0 h-full flex items-center pr-2 text-gray-400">
                  <i class="fas fa-tags"></i>
                </div>
              </div>
            </div>
            <label for="qty" class="text-xl font-bold mb-2">Quantity</label>
            <div class="relative">
              <input type="number" name="qty" id="qty" v-model="product_details.qty" class="border-2 border-blue-500 rounded-lg p-2 w-full" placeholder="Quantity">
              <div class="absolute top-0 bottom-0 right-0 h-full flex items-center pr-2 text-gray-400">
                <i class="fas fa-shopping-cart"></i>
              </div>
            </div>
            <label for="SKU" class="text-xl font-bold mb-2">SKU</label>
            <input type="text" name="SKU" id="SKU" v-model="product_details.SKU" class="border-2 border-blue-500 rounded-lg p-2" placeholder="SKU">
            <label for="expiry_date" class="text-xl font-bold mb-2  ">Expiry Date</label>
            <input type="date" name="expiry_date" id="expiry_date" v-model="product_details.expiry_date" class="border-2 border-blue-500 rounded-lg p-2">

            <label for="dietary_labels" class="text-xl font-bold mb-2">Dietary Labels</label>
            <div>
                <p v-for="label in product_details.dietary_labels" :key="label"  >
                    {{ label }}
                </p>
            </div>
            <input type="text" name="dietary_labels" id="dietary_labels" v-model="new_dietary_label" class="border-2 border-blue-500 rounded-lg p-2">
            <button type="button" @click="product_details.dietary_labels.push(new_dietary_label);new_dietary_label='' " >Add</button>
            <label for="status" class="text-xl font-bold mb-2">Status:</label>
                <select  name="status" id="status" v-model="product_details.status" class="border-2 border-blue-500 rounded-lg p-2">
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>

            <div class="flex justify-center mt-8" >
                <a href="#" class="btn btn-error mr-4">Cancel</a>
                <button class="btn btn-success" @click="submitThisProduct">Submit</button>
            </div>
            </form>
            </div>
            
        </div>
    </div>
</template>
<script>
import ImageUpload from '../imageUpload.vue';
import axios from 'axios';

const DEFAULT_DETAILS = {
                // belongs_to: this.$store.state.demo_merchant_id,
                name: "",
                price_original: 0,
                price_discounted: 0,
                qty: 1,
                img: "",
                SKU: "",
                expiry_date: "",
                dietary_labels: [],
                status: "available",
            };
export default {
    name: "addProductModal",
    data() {
        return {
            product_details: {
                // belongs_to: this.$store.state.demo_merchant_id,
                name: "",
                price_original: 0,
                price_discount: 0,
                qty: 1,
                img: "",
                SKU: "",
                expiry_date: "",
                dietary_labels: [],
                status: "available",
            },
            new_dietary_label: "",
        };
    },
    methods: {
        addImageToProductDetail(imageUrl) {
            this.product_details.img = imageUrl;
        },
        submitThisProduct() {
            this.product_details['merchant_id'] = this.$store.state.demo_merchant_id;
            axios.post('https://css-hackathon-23-b6erdbabxa-nw.a.run.app/products', this.product_details)
                .then((response) => {
                    console.log(response);
                    // this.product_details = DEFAULT_DETAILS;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    components: { ImageUpload }
}
</script>
<style>
    
</style>