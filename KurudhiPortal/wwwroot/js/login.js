$(document).ready(function () {
    $(".login-form").validate({
        rules: {
            username: {
                required: true
            },
            password: {
                required: true,
            }
        },
        messages: {
            username: {
                required: "Please enter username or mobile number",
            },
            password: {
                required: "Please enter password",
            }
        },
        errorElement: "div",
        errorPlacement: function (error, element) {
            error.addClass("invalid-feedback");
            error.insertAfter(element);
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
                username: $("#username").val(),
                password: $("#password").val()
            }

            $.ajax({
                url: '/Login/SignIn',
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
    $(".password-hide-icon").click(function () {
        $("input[type='password']").attr('type', 'text');
        $(this).css('display', 'none');
        $(".password-show-icon").css("display", "inline-block");
    });
    $(".password-show-icon").click(function () {
        $(".password-container input[type='text']").attr('type', 'password');
        $(this).css('display', 'none');
        $(".password-hide-icon").css("display", "inline-block");
    });
});