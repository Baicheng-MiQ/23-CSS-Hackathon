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
                <button class="btn btn-primary w-fit" @click="getNerebyStores">Find Store</button>
            </div>
            <div></div>
            <div></div>
            <img src="../assets/food_bg.png" alt="" class="fixed -z-10 aspect-[2/1] bottom-0 " >
        </div>

        <div class="carousel rounded-box m-10 space-x-5">
            <div class="carousel-item" v-for="item in findResult" :key="item.name">
                <merchant-preview :merchant="item" 
                :currentLocation="{latitude: userLatitude, longitude: userLongitude}"
                >
                </merchant-preview>
            </div>
        </div>
    
            

    </div>

</template>
<script>
import merchantPreview from '../components/user/merchantPreview.vue'
function helperGetDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d || 0;
}
function deg2rad(deg) {
    return deg * (Math.PI / 180)
}
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
            findResult: []
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
        },
        getNerebyStores(){
            fetch(`https://css-hackathon-23-b6erdbabxa-nw.a.run.app/merchants`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // sort by distance to user
                // descending order
                data.sort((a, b) => {
                    return helperGetDistance(a.latitude, a.longitude, this.userLatitude, this.userLongitude) - helperGetDistance(b.latitude, b.longitude, this.userLatitude, this.userLongitude)
                })
                this.findResult = data
                
            })
        }
    },
    mounted() {
        this.getCurrentLocation()
    }

}
</script>
<style >


</style>