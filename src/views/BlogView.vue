<template>
    <div class="post-view" v-if="currentBlog">
        <div class="post-container quillWrapper">
            <h2>{{ this.currentBlog[0].blogTitle }}</h2>
            <h4>Posted on: {{new Date(this.currentBlog[0].blogDate).toLocaleString('en-us', {dateStyle: 'long'})}}</h4>
            <img :src="this.currentBlog[0].blogCoverPhoto" alt="">
            <div class="post-content ql-editor" v-html="this.currentBlog[0].blogHTML"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BlogView',
    data(){
        return {
            currentBlog: null
        }
    },
    async mounted(){
        this.currentBlog = await this.$store.state.blogPostsFeed.filter((elem) => {
            return elem.blogId === this.$route.params.blogId
        })
    }
}
</script>
<style lang="scss" scoped>
.post-view{
    min-height: 100%;
    .post-container{
        max-width: 1000px;
        margin: auto;
        padding: 60px 25px;
    }
    .ql-editor{
        padding: 0;
    }
    h2{
        margin-bottom: 16px;
        font-weight: 300;
        font-size: 32px;
    }
    img{
        width: 100%;
        margin-bottom: 32px;
    }
    h4{
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 24px;
    }
}
</style>