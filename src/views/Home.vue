<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen"></BlogPost>
    <BlogPost :post="post" v-for="post in blogPostsFeed" :key="post.blogId"></BlogPost>
    <div class="blog-card-wrap">
      <div class="card-container">
        <h3>View More Blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="post in blogCards" :key="post.blogId"></BlogCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost'
import BlogCard from '../components/BlogCard'
export default {
  name: "HomeVue",
  components: {
    BlogPost,
    BlogCard,
  },
  data() {
    return {
      welcomeScreen: {
        title: 'WELCOME!',
        blogPost: 'Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!',
        welcomeScreen: true,
        photo: 'coding'
      },
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    blogPostsFeed() {
      return this.$store.getters.getBlogPostsFeed
    },
    blogCards(){
      return this.$store.getters.getBlogCards
    }
  }
};
</script>

<style scoped>
h3 {
  font-weight: 300;
  font-size: 28px;
  margin-bottom: 32px;
}
</style>