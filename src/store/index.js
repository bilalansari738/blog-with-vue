import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../firebase/firebaseInit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogHTML: "Write your blog here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: false,
    blogPhotoPreview: null,
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
    blogPostsFeed: [],
    postLoaded: null
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload
    },
    setProfileInfo(state, doc) {
      state.profileEmail = doc.data().email,
        state.profileFirstName = doc.data().firstName,
        state.profileLastName = doc.data().lastName,
        state.profileUsername = doc.data().username,
        state.profileId = doc.id
    },
    profileInitials(state) {
      state.profileInitials = state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    },
    updateUser(state, payload) {
      state.user = payload
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload
    },
    changeLastName(state, payload) {
      state.profileLastName = payload
    },
    changeUsername(state, payload) {
      state.profileUsername = payload
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload
    },
    newBlogPost(state, payload) {
      state.blogHTML = payload
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload
    },
    openPhotoPreview(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview
    },
    filteredBlogPosts(state, payload){
      state.blogPostsFeed = state.blogPostsFeed.filter((doc)=> doc.blogId !== payload)
    },
    setBlogPost(state, payload){
      (state.blogTitle = payload.blogTitle),
      (state.blogPhotoFileURL = payload.blogCoverPhoto),
      (state.blogPhotoName = payload.blogPhotoName),
      (state.blogHTML = payload.blogHTML);
    },
  },
  getters: {
    getBlogPostsFeed(state) {
      return state.blogPostsFeed.slice(0, 2)
    },
    getBlogCards(state){
      return state.blogPostsFeed.slice(2, 6)
    }
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid)
      const dbResult = await dataBase.get()
      commit("setProfileInfo", dbResult)
      commit("profileInitials")
      // console.log("store>>>",dbResult);
    },
    async updateUserProfile({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileId)
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername
      })
      commit("profileInitials")
    },
    async getBlogPosts({state}) {
        const dataBase = await db.collection("blogPosts").orderBy('data', 'desc');
        const dbResult = await dataBase.get()
        dbResult.docs.forEach((doc)=> {
          if(!state.blogPostsFeed.some((elem)=> elem.blogId === doc.id)){
            const data = {
              blogId : doc.data().blogId,
              blogHTML: doc.data().blogHTML,
              blogCoverPhoto: doc.data().blogCoverPhoto,
              blogPhotoName: doc.data().blogCoverPhotoName,
              blogTitle: doc.data().blogTitle,
              blogDate: doc.data().data
            }
            state.blogPostsFeed.push(data)
          }
        })
        state.postLoaded = true
      },
      async deleteBlogPost({commit}, payload){
        const getPost = await db.collection('blogPosts').doc(payload)
        await getPost.delete()
        commit('filteredBlogPosts', payload)
      },
      async updateBlogPost({commit, dispatch}, payload){
        commit("filteredBlogPosts", payload);
        await dispatch("getBlogPosts")
      }
    },
    modules: {
    }
  })
