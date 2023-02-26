<template >
    <div class="flex flex-col ">
        <div class="flex flex-row  h-full">
            <div class="w-2/3 flex flex-col p-10 space-y-10">
                <div class="flex flex-row justify-between items-center">
                    <div>
                        <h2 class="text-3xl font-bold p-1">📌 {{ city }}</h2>
                        <p class="pl-10">{{ userLatitude }}, {{ userLongitude }}</p>
                    </div>
                    <button class="btn btn-error" @click="getCurrentLocation">{{ locationStatus }}</button>
                </div>
                <h1 class="text-7xl font-bold bg-orange-100 rounded-3xl p-8 leading-normal">Reducing Waste, Sharing Taste</h1>
                <button class="btn btn-primary w-fit">Find Store</button>
            </div>
            <div></div>
            <div></div>
            <img src="../assets/food_bg.png" alt="" class="fixed -z-10 aspect-[2/1] bottom-0 " >
        </div>

        <div class="carousel rounded-box m-10 space-x-5">
            <div class="carousel-item">
                <merchantPreview :merchant="demoMerchant" :currentLocation="{longitude: userLongitude, latitude: userLatitude}"/>
            </div> 
            <div class="carousel-item">
                <merchantPreview :merchant="demoMerchant" :currentLocation="{longitude: userLongitude, latitude: userLatitude}"/>
            </div> 
            <div class="carousel-item">
                <merchantPreview :merchant="demoMerchant" :currentLocation="{longitude: userLongitude, latitude: userLatitude}"/>
            </div> 
            <div class="carousel-item">
                <merchantPreview :merchant="demoMerchant" :currentLocation="{longitude: userLongitude, latitude: userLatitude}"/>
            </div> 
            <div class="carousel-item">
                <merchantPreview :merchant="demoMerchant" :currentLocation="{longitude: userLongitude, latitude: userLatitude}"/>
            </div> 
            <div class="carousel-item">
                <merchantPreview :merchant="demoMerchant" :currentLocation="{longitude: userLongitude, latitude: userLatitude}"/>
            </div> 
            <div class="carousel-item">
                <merchantPreview :merchant="demoMerchant" :currentLocation="{longitude: userLongitude, latitude: userLatitude}"/>
            </div> 
            <div class="carousel-item">
                <merchantPreview :merchant="demoMerchant" :currentLocation="{longitude: userLongitude, latitude: userLatitude}"/>
            </div> 
        </div>

            

    </div>

</template>
<script>
import merchantPreview from '../components/user/merchantPreview.vue'
export default {
    name: 'userView',
    components: {
        merchantPreview
    },
    data() {
        return {
            city: 'Your City',
            userLatitude: 0,
            userLongitude: 0,
            locationStatus: 'Get Location',
            demoMerchant: {
                name: 'Demo Merchant',
                logo: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
                latitude: 51.52,
                longitude: -0.13,
            }
        }
    },
    methods: {
        getCurrentLocation() {
            this.locationStatus = 'Getting Location...'
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position.coords.latitude, position.coords.longitude);
                this.userLatitude = position.coords.latitude;
                this.userLongitude = position.coords.longitude;
                fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        this.city = data.locality
                        this.locationStatus = 'Get Location'
                    })
            });
        }
    },
    mounted() {
        this.getCurrentLocation()
    }

}
</script>
<style>
    
</style>