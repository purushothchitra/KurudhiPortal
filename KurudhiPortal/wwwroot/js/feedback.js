$(document).ready(function () {
    $("#feedback-form").validate({
        rules: {
            Commands: {
                required: true,
            },
            username: {
                required: true,
            },
            email: {
                required: true,
            },
            message: {
                required:true,
            }
        },
        messages: {
            Commands: {
                required: "Please enter commands type",
            },
            username: {
                required: "Please enter username",
            },
            email: {
                required: "Please enter email",
            },
            message: {
                required: "Please enter the message",
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