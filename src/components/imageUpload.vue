<template>
    <div>
      <input type="file" ref="fileInput" @change="handleFileUpload" class="file-input file-input-bordered w-full max-w-xs"/>
      <!-- display image uploaded -->
        <img :src="image" alt="image" v-show="image" class="m-2">
    </div>
  </template>
  
<script>
export default {
    methods: {
        async handleFileUpload() {
        const file = this.$refs.fileInput.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.onload = async () => {
            const base64Image = reader.result.split(',')[1];
            const imgbbUrl = 'https://api.imgbb.com/1/upload?expiration=60000&key=af1e0a74a40bf3c5a4126ecdd8b91600';
            
            const formData = new FormData();
            formData.append('image', base64Image);

            const response = await fetch(imgbbUrl, {
            method: 'POST',
            body: formData
            });
            
            const result = await response.json();
            this.image = result.data.url;
            console.log(result.data.url);
            this.$emit('imageUploaded', result.data.url);
            };
        },
    },
    emits: ['imageUploaded'],
    data() {
        return {
            image: 'https://dummyimage.com/512x512',
        }
    }
}
</script>
