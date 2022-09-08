<template>
    <div class="form-wrap">
        <form class="register">
            <p class="login-register">
                Already have an account?
                <router-link class="router-link" to="/login">Login</router-link>
            </p>
            <h2>Create Your FireBlogs Account</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="First Name" v-model="firstName">
                    <i class="bi bi-person icon"></i>
                </div>
                <div class="input">
                    <input type="text" placeholder="Last Name" v-model="lastName">
                    <i class="bi bi-person icon"></i>
                </div>
                <div class="input">
                    <input type="text" placeholder="Username" v-model="username">
                    <i class="bi bi-person icon"></i>
                </div>
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                    <i class="bi bi-envelope-fill icon"></i>
                </div>
                <div class="input">
                    <input type="password" placeholder="Password" v-model="password">
                    <i class="bi bi-lock-fill icon"></i>
                </div>
                <div class="error" v-show="error">{{ this.errorMsg }}</div>
            </div>
            <button class="form-btn" @click.prevent="register">Sign Up</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../firebase/firebaseInit'
export default {
    name: "RegisterVue",
    data() {
        return {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            error: null,
            errorMsg: ""
        }
    },
    methods: {
        async register() {
            if (
                this.firstName !== "" &&
                this.lastName !== "" &&
                this.username !== "" &&
                this.email !== "" &&
                this.password !== ""
            ) {
                this.error = false
                this.errorMsg = ""
                const firebaseAuth = await firebase.auth();
                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password)
                const result = await createUser
                const database = db.collection("users").doc(result.user.uid)
                await database.set({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    username: this.username,
                    email: this.email,
                    password: this.password
                });
                this.$router.push("/")
                return;
            }
            this.error = true
            this.errorMsg = "Please fill out the all values"
            return
        }
    }
}
</script>
<style lang="scss" scoped>
.register {
    h2 {
        max-width: 350px;
    }
}
</style>