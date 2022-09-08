<template>
<div class="model">
    <div class="model-content">
        <p>{{this.modelMessage}}</p>
        <button @click="closeModel" class="form-btn">Close</button>
    </div>
</div>
</template>
<script>
export default {
    name: 'ModelVue',
    props : ['modelMessage'],
    methods: {
        closeModel(){
            this.$emit("close-model")
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
        flex-direction: column;
        justify-content: center;
        border-radius: 8px;
        width: 300px;
        padding: 40px 30px;
        background-color: #fff;
        p{
            text-align: center;
        }
        button{
            align-self: center;
        }
    }
}
</style>