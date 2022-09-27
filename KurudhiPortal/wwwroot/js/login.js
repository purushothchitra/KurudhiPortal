$(document).ready(function () {
    $(".login-form").validate({
        rules: {
            email: {
                required: true
            },
            password: {
                required: true,
            }
        },
        messages: {
            email: {
                required: "Please Enter Email"
            },
            password: {
                required: "Please Enter Password"
            }
        }
    });
})