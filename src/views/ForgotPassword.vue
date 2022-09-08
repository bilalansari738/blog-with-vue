<template>
    <div class="reset-password">
        <Model v-if="modelActive" v-on:close-model="closeModel" :modelMessage="modelMessage" />
        <Loading v-if="loading" />
        <div class="form-wrap">
            <form class="reset">
                <p class="login-register text-center">
                    Back to
                    <router-link class="router-link" to="/login">Login</router-link>
                </p>
                <h2>Reset Password</h2>
                <p>Forgot your password? Enter your email to reset it</p>
                <div class="inputs">
                    <div class="input">
                        <input type="text" placeholder="Email" v-model="email">
                        <i class="bi bi-envelope-fill icon"></i>
                    </div>
                </div>
                <button class="form-btn" @click.prevent="resetPassword">Reset</button>
                <div class="angle"></div>
            </form>
            <div class="background"></div>
        </div>
    </div>
</template>
<script>
import Model from '@/components/Model.vue'
import Loading from '@/components/Loading.vue';
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
    name: "ForgotPassword",
    data() {
        return {
            email: "",
            modelActive: null,
            modelMessage: "",
            loading: false
        };
    },
    methods: {
        closeModel() {
            this.modelActive = !this.modelActive
            this.email = ""
        },
        resetPassword(){
            this.loading = true;
            firebase.auth().sendPasswordResetEmail(this.email).then(()=>{
                this.modelMessage = "If your email is correct, you will receive an email"
                this.loading = false
                this.modelActive = true
            }).catch((err)=>{
                this.loading = false
                this.modelMessage = err.message
                this.modelActive = true
            })
        }
    },
    components: { Model, Loading }
}
</script>
<style lang="scss" scoped>
.reset-password {
    position: relative;

    .form-wrap {
        .reset {
            h2 {
                margin-bottom: 8px;
            }

            p {
                text-align: center;
                margin-bottom: 32px;
            }
        }
    }
}
</style>