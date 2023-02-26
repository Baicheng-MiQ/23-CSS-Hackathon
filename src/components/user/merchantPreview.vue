<template >
    <div>
        <div class="card card-compact w-48 bg-base-100 shadow-xl rounded-lg">
            <figure><img :src="merchant.logo" alt="logo"/></figure>
            <div class="card-body">
                <h2 class="card-title">{{ merchant.name }}</h2>
                <p class="card-subtitle">{{ distance }} km</p>
                <div class="card-actions justify-end">
                    <a class="btn btn-primary" href="#merchant-detail-modal">→</a>
                    <div class="modal" id="merchant-detail-modal">
                        <div class="modal-box w-11/12 max-w-5xl">
                            <a href="#" class="btn btn-circle">x</a>
                            <merchantDetail :merchant="merchant" v-if="modalShowing==='merchantDetail'"
                                @viewProduct="viewProductDetail"/>
                            <merchantProducts :product="currentProduct" @returnToMerchantDetail="returnToMerchantDetail" v-else/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import merchantDetail from './merchantWithProducts.vue'
import merchantProducts from './productDetails.vue'
export default {
    name: 'merchantPreview',
    components: {
        merchantDetail,
        merchantProducts
    },
    props: {
        merchant: {
            type: Object,
            required: true
        },
        currentLocation: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            modalShowing: 'merchantDetail',
            currentProduct: null,
        }
    },
    methods: {
        viewProductDetail(product) {
            this.currentProduct = product;
            this.modalShowing = 'productDetail'
        },
        returnToMerchantDetail() {
            this.modalShowing = 'merchantDetail';
            this.currentProduct = null;
        }
    },
    computed: {
        distance() {
            const lat1 = this.currentLocation.latitude
            const lon1 = this.currentLocation.longitude
            const lat2 = this.merchant.latitude
            const lon2 = this.merchant.longitude
            const R = 6371e3; // metres
            const φ1 = lat1 * Math.PI/180; // φ, λ in radians
            const φ2 = lat2 * Math.PI/180;
            const Δφ = (lat2-lat1) * Math.PI/180;
            const Δλ = (lon2-lon1) * Math.PI/180;

            const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                    Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ/2) * Math.sin(Δλ/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

            const d = R * c; // in metres
            return d*0.001 || 0;
        }
    }
}
</script>
<style ></style>