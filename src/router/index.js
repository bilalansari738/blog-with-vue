import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BlogsView from "../views/BlogsView.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";
import CreatePost from "../views/CreatePost.vue";
import BlogPreview from '../views/BlogPreview.vue'
import BlogView from '../views/BlogView.vue'
import EditBlog from '../views/EditBlog.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: "/blogs",
    name: "BlogsView",
    component: BlogsView,
    meta: {
      title: 'Blogs'
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: 'Register'
    }
  },
  {
    path: "/forgotpassword",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: 'ForgotPassword'
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      title: 'Admin'
    }
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
    meta: {
      title: 'CreatePost'
    }
  },
  {
    path: "/blog-preview",
    name: "BlogPreview",
    component: BlogPreview,
    meta: {
      title: 'BlogPreview'
    }
  },
  {
    path: "/blog-view/:blogId",
    name: "BlogView",
    component: BlogView,
    meta: {
      title: 'BlogView'
    }
  },
  {
    path: "/edit-blog/:blogId",
    name: "EditBlog",
    component: EditBlog,
    meta: {
      title: 'EditBlog'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next)=> {
  document.title = `${to.meta.title} | FireBlogs`
  next()
})

export default router;
