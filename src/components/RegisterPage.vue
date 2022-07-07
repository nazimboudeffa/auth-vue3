<template>
    <div class="login-form">
        <form action="" method="post" id="registerForm">
            <h2 class="text-center">Register</h2>
            <div class="form-group">
                <input type="text" name="rusername" id="rusername" class="form-control validate[required,minSize[3],custom[onlyLetterNumber]]" placeholder="Username" required="required">
            </div>
                    <div class="form-group">
                            <input type="text" name="remail" id="remail" class="form-control validate[required,custom[email]]" placeholder="Email" required="required">
                    </div>
            <div class="form-group">
                <input type="password" name="rpassword" id="rpassword" class="form-control validate[minSize[6],maxSize[15]]" placeholder="Password" required="required">
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
    export default {
        name: 'RegisterPage'
    }
</script>