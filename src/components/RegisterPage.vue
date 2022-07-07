<template>
    <div class="login-form" @submit.prevent="handleSubmit">
        <form action="" method="post" id="registerForm">
            <h2 class="text-center">Register</h2>
                    <div class="form-group">
                        <input type="text" name="rusername" id="rusername" class="form-control validate[required,minSize[3],custom[onlyLetterNumber]]" placeholder="Username" required="required">
                    </div>
                    <div class="form-group">
                            <input type="text" name="remail" id="remail" v-model="email" class="form-control validate[required,custom[email]]" placeholder="Email" required="required">
                    </div>
                    <div class="form-group">
                        <input type="password" name="rpassword" id="rpassword" v-model="password" class="form-control validate[minSize[6],maxSize[15]]" placeholder="Password" required="required">
                    </div>
                    <div class="form-group">
                            <input type="password" name="rcpassword" id="rcpassword" class="form-control validate[minSize[6],maxSize[15]]" placeholder="Confirm Password" required="required">
                    </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Sign in</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'RegisterPage',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async handleSubmit(){
                const data = {
                    email: this.email,
                    password: this.password
                }
                
                await axios.post('http://localhost:5000/api/user/register', data)
                .then(
                    res => {
                        console.log(res)
                    }
                ).catch(
                    err => {
                        console.log(err)
                    }
                )
            }
        }
    }
</script>

<style type="text/css">
    .login-form {
        width: 340px;
        margin: 50px auto;
    }
    .login-form form {
        margin-bottom: 15px;
        background: #f7f7f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
    .login-form h2 {
        margin: 0 0 15px;
    }
    .form-control, .btn {
        min-height: 38px;
        border-radius: 2px;
    }
    .btn {
        font-size: 15px;
        font-weight: bold;
    }
</style>