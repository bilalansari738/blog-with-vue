<template>
    <header>
        <div class="container-fluid">
            <b-navbar toggleable="lg" type="light">
                <div class="branding">
                    <router-link class="header" to="/">FireBlogs</router-link>
                </div>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <div class="nav-links">
                        <ul>
                            <router-link class="link" to="/">Home</router-link>
                            <router-link class="link" to="/blogs">Blog</router-link>
                            <router-link v-if="user" class="link" to="/create-post">Create Post</router-link>
                            <router-link v-if="!user" class="link" to="/login">Login / Register</router-link>
                        </ul>
                        <div v-if="user" class="profile" ref="profile" @click="toggleProfileMenu">
                            <span>{{ this.$store.state.profileInitials }}</span>
                            <div class="profile-menu" v-show="profileMenu">
                                <div class="info">
                                    <p class="initials">{{ this.$store.state.profileInitials }}</p>
                                    <div class="right">
                                        <p>{{ this.$store.state.profileFirstName }} {{ this.$store.state.profileLastName
                                        }}</p>
                                        <p>{{ this.$store.state.profileUsername }}</p>
                                        <p>{{ this.$store.state.profileEmail }}</p>
                                    </div>
                                </div>
                                <div class="options">
                                    <div class="option">
                                        <router-link class="option" to="/profile">
                                            <i class="bi bi-person"></i>
                                            <p>Profile</p>
                                        </router-link>
                                    </div>
                                    <!-- <div class="option">
                                        <router-link class="option" to="admin">
                                            <i class="bi bi-person"></i>
                                            <p>Admin</p>
                                        </router-link>
                                    </div> -->
                                    <div class="option" @click="signOut">
                                        <i class="bi bi-box-arrow-right"></i>
                                        <p>Sign out</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-collapse>
            </b-navbar>
        </div>
    </header>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
    name: 'NavigationVue',
    data() {
        return {
            profileMenu: null
        }
    },
    methods: {
        toggleProfileMenu(e) {
            if (e.target === this.$refs.profile) {
                this.profileMenu = !this.profileMenu
            }
        },
        signOut(){
            window.location.reload();
            firebase.auth().signOut()
        }
    },
    computed: {
        user(){
            return this.$store.state.user
        }
    }
}
</script>
<style lang="scss" scoped>
header {
    background-color: #fff;
    padding: 0px 25px;
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 2;
}

.link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;
}

.link:hover {
    color: #1eb8b8;
}

nav {
    display: flex;
    padding: 25px 0;
}

.branding {
    display: flex;
    align-items: center;
}

.header {
    font-weight: 600;
    font-size: 24px;
    color: #000;
    text-decoration: none;
}

.nav-links {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;

    .profile {
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #fff;
        z-index: 10;
        background-color: #303030;
        span{
            pointer-events: none;
        }

        .profile-menu {
            position: absolute;
            top: 60px;
            right: 0;
            width: 250px;
            background-color: #303030;
            box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);

            .info {
                display: flex;
                align-items: center;
                padding: 15px;
                border-bottom: 1px solid #fff;

                .initials {
                    position: initial;
                    width: 40px;
                    height: 40px;
                    background-color: #fff;
                    color: #303030;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                }

                .right {
                    flex: 1;
                    margin-left: 24px;

                    p:nth-child(1) {
                        font-size: 14px;
                        margin: 0 auto;
                    }

                    p:nth-child(2),
                    p:nth-child(3) {
                        font-size: 12px;
                        margin: 0 auto;
                    }
                }
            }

            .options {
                padding: 15px;

                .option {
                    text-decoration: none;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    margin-bottom: 12px;

                    .icon {
                        width: 18px;
                        height: auto;
                    }

                    p {
                        font-size: 14px;
                        margin-left: 12px;
                        margin: 0 10px;
                    }

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}

ul {
    margin-right: 32px;
}

.link {
    margin-right: 32px;
}

.link:last-child {
    margin-right: 0px;
}

@media screen and (max-width: 992px) {

    .nav-links,
    .link {
        display: block;
    }
}
</style>