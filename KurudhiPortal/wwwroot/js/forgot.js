$(document).ready(function () {
    $("#forgot-form").validate({
        rules: {
            username: {
                required: true,
                minlength: 6,
                maxlength:25
            },
            newpassword: {
                required: true,
                minlength: 8,
                maxlength:15
            },
            confirmpassword: {
                required: true,
            }
        },
        messages: {
            username: {
                required: "Please enter username",
            },
            newpassword: {
                required: "Please enter new password",
                minlength: "Please enter valid password",
                maxlength: "Please enter valid password"
            },
            confirmpassword: {
                required: "Please enter confirm password"
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
});