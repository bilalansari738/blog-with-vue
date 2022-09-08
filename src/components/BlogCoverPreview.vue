<template>
<div class="model" ref="model">
    <div class="model-content">
        <i class="bi bi-x-square-fill icon" @click="closePreview"></i>
        <img :src="this.blogCoverPhoto" alt="">
    </div>
</div>
</template>
<script>
export default {
    name: 'BlogCoverPreview',
    methods: {
        closePreview(){
            this.$store.commit("openPhotoPreview")
        }
    },
    computed: {
        blogCoverPhoto(){
            return this.$store.state.blogPhotoFileURL
        }
    }
}
</script>
<style lang="scss" scoped>
.model{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    .model-content{
        display: flex;
        justify-content: center;
        position: relative;
        border-radius: 12px;
        width: 600px;
        height: 400px;
        padding: 60px;
        background-color: #fff;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        .icon{
            width: 24px;
            height: auto;
            cursor: pointer;
            font-size: 24px;
            position: absolute;
            top: 15px;
            right: 15px;
            color: #303030;
        }
        img{
            margin-top: 16px;
            display: block;
            width: auto;
            height: 100%;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
    }
}
</style>