<template>
    <div class="form-wrap">
        <form class="login">
            <p class="login-register">
                Don't have an account?
                <router-link class="router-link" to="/register">Register</router-link>
            </p>
            <h2>Login to FireBlogs</h2>
            <div class="inputs">
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
            <router-link class="forgot-password" to="/forgotpassword">Forgot your password?</router-link>
            <button class="form-btn" @click.prevent="signIn">Sign in</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
    name: 'LogIn',
    data() {
        return {
            email: "",
            password: "",
            error: null,
            errorMsg: ""
        }
    },
    methods: {
        signIn(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(()=>{
                this.$router.push('/')
                this.error = false
                this.errorMsg = ""
            }).catch((err)=>{
                this.error = true
                this.errorMsg = err.message
            })
        }
    }
}
</script>
<style lang="scss">
.form-wrap {
    overflow: hidden;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90%;

    @media screen and (min-width: 900px) {
        width: 100%;
    }

    .login-register {
        margin-bottom: 32px;

        .router-link {
            color: #000;
        }
    }

    form {
        padding: 0 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;

        @media screen and (min-width: 900px) {
            padding: 0 50px;
        }

        h2 {
            text-align: center;
            font-size: 32px;
            color: #303030;
            margin-bottom: 40px;

            @media screen and (min-width: 900px) {
                font-size: 40px;
            }
        }

        .inputs {
            width: 100%;
            max-width: 350px;

            .input {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;
                input{
                    width: 100%;
                    border: none;
                    background-color: #f2f7f6;
                    padding: 4px 4px 4px 30px;
                    height: 50px;
                    &:focus {
                    outline: none;
                }
                }

                .icon {
                    width: 12px;
                    position: absolute;
                    left: 6px;
                }
            }
        }

        .forgot-password {
            text-decoration: none;
            color: #000;
            cursor: pointer;
            font-size: 14px;
            margin: 16px 0px 32px;
            border-bottom: 1px solid transparent;
            transition: 0.5s ease all;

            &:hover {
                border-color: #303030;
            }
        }

        .angle {
            display: none;
            position: absolute;
            background-color: #fff;
            transform: rotateZ(3deg);
            width: 60px;
            right: -30px;
            height: 202%;

            @media screen and(min-width: 900px) {
                display: initial;
            }
        }
    }

    .background {
        display: none;
        flex: 2;
        background-size: cover;
        background-image: url("../assets/background.png");
        width: 100%;
        height: 100%;

        @media screen and (min-width: 900px) {
            display: initial;
        }
    }
}
</style>