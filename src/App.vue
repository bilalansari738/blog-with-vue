<template>
  <div class="app-wrapper" v-if="this.$store.state.postLoaded">
    <Navigation v-if="!navigation" />
    <div class="app">
      <router-view />
    </div>
    <Footer v-if="!navigation" />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import firebase from 'firebase/app';
import 'firebase/auth'
export default {
  name: "app",
  components: { Navigation, Footer },
  data() {
    return {
      navigation: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user)=>{
      this.$store.commit("updateUser", user)
      if(user){
        this.$store.dispatch("getCurrentUser")
        // console.log("store initials>>>>",this.$store.state.profileInitials);
      }
    })
    this.checkRoute()
    this.$store.dispatch("getBlogPosts")
  },
  mounted() {
    this.$route.name
  },
  methods: {
    checkRoute() {
      if (
        this.$route.name == 'Login' ||
        this.$route.name == 'Register' ||
        this.$route.name == 'ForgotPassword'
      ) {
        this.navigation = true
        return
      } else {
        this.navigation = false
      }
    }
  },
  watch: {
    $route() {
      this.checkRoute()
    }
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.arrow {
  margin-left: 8px;
  width: 12px;
}

.arrow path {
  fill: #000;
}

.arro-light path {
  fill: #fff;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.form-btn {
  background-color: #000;
  color: #fff;
  padding: 10px 25px;
  border-radius: 30px;
  &:hover{
    opacity: 0.9;
  }
}
.error{
  text-align: center;
  font-size: 12px;
  color: red;
}
.link-light {
  color: #fff;
}

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
}

@media screen and (min-width: 500px) {
  .blog-card-wrap {
    padding: 100px 16px;
  }
}

.blog-cards {
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;
}

@media screen and (min-width: 500px) {
  .blog-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 900px) {
  .blog-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1200px) {
  .blog-cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
