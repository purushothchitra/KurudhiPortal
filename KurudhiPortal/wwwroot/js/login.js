﻿$(document).ready(function () {
    $(".login-form").validate({
        rules: {
            email: {
                required: true
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            email: {
                required: "Please Enter Email",
            },
            password: {
                required: "Please Enter Password",
                minlength:"please enter min 8 character"
            }
        },
        highlight: function (element) {
            $(element).addClass('border-line');
        },
        unhighlight: function (element) {
            $(element).removeClass('border-line');
        }
    });
    $(".login-btn").click(function () {
        $(".login-form").validate();
      
        if ($(".login-form").valid()) {
            let userValidation = {
                email: $("#email").val(),
                password: $("#password").val()
            }

            $.ajax({
                url: './Login/SignIn',
                type: 'GET',
                data: userValidation, 
                success: function (data) {
                    debugger;
                    if (data.status == "success") {
                        window.location = "/Dashboard/Index"
                    }
                },
                error: function (textStatus, errorThrown) {
                    console.log('Error in Operation');
                }
            });
        }
    });
})