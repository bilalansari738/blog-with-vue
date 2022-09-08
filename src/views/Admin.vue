<template>
<div class="admin">
    <div class="admin-container">
        <h2>Administration</h2>
        <div class="admin-info">
            <h2>Add Admin</h2>
            <div class="input">
                <input type="text" id="addadmin" placeholder="Enter user email to make them an admin" v-model="adminEmail">
            </div>
            <!-- <span>{{this.functionMsg}}</span> -->
            <button class="form-btn">Submit</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'AdminVue',
    data(){
        return{
            adminEmail: "",
            // functionMsg: null
        }
    }
}
</script>
<style lang="scss" scoped>
.admin{
    .admin-container{
        max-width: 1000px;
        margin: auto;
        padding: 60px 25px;
        h2{
            text-align: center;
            margin-bottom: 16px;
            font-weight: 300;
            font-size: 32px;
        }
        .admin-info{
            border-radius: 8px;
            box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
            padding: 32px;
            background-color: #f1f1f1;
            display: flex;
            flex-direction: column;
            max-width: 600px;
            margin: 32px auto;
            span{
                font-size: 14px;
            }
            .input{
                margin: 16px 0;
                label{
                    font-size: 14px;
                    display: block;
                    padding-bottom: 6px;
                }
                input{
                    width: 100%;
                    border: none;
                    background-color: #f2f7f6;
                    padding: 8px;
                    height: 50px;
                    &:focus{
                        outline: none;
                    }
                }
            }
            button{
                align-self: center;
            }
        }
    }
}
</style>