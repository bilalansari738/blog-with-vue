<template>
    <footer>
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-3 col-12">
                    <div class="row">
                        <div class="col-12">
                            <router-link class="header" :to="{ name: 'Home'}">Fireblogs</router-link>
                        </div>
                        <div class="col-12">
                            <ul class="icons-lists">
                                <li>
                                    <a href="#"><i class="bi bi-youtube svg-icon"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="bi bi-twitter svg-icon"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="bi bi-instagram svg-icon"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="bi bi-linkedin svg-icon"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-12">
                    <ul>
                        <router-link class="link" :to="{name: 'Home'}">Home</router-link>
                        <router-link class="link" :to="{name: 'BlogsView'}">Blog</router-link>
                        <router-link v-if="user" class="link" :to="{name: 'CreatePost'}">Create Post</router-link>
                        <router-link v-if="!user" class="link" :to="{name: 'Login'}">Login / Register</router-link>
                    </ul>
                </div>
                <div class="col-lg-6 col-12 d-flex align-items-end">
                    <p>Copyrights 2022 All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterVue',
        computed: {
        user(){
            return this.$store.state.user
        }
    }
    }
</script>

<style lang="scss" scoped>
    footer {
        margin-top: auto;
        background-color: #303030;
    }
    .link{
        display: block;
        color: #fff;
    }

    .header {
        font-size: 24px;
        font-weight: 600;
        text-decoration: none;
        color: #fff;
        text-align: center;
    }
    .icons-lists{
        display: flex;
        list-style-type: none;
        gap: 16px;
        color: #fff;
    }
    .svg-icon {
        width: 24px;
        height: auto;
        color: #fff;
    }
    p{
        color: #fff;
    }
    @media screen and (max-width: 992px) {
        .col-12, .icons-lists{
            text-align: center;
            justify-content: center;
        }
    }
</style>