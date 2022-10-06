$(document).ready(function () {
    $("#signup-form").validate({
        rules: {
            username: {
                required: true,
                minlength: 8,
                maxlength:25,
            },
            password: {
                required: true,
                minlength: 8
            },
            firstname: {
                required: true
            },
            lastname: {
                required: true,
            },
            gender: {
                required: true,
            },
            bloodgroup: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            age: {
                required: true
            },
            mobilenumber: {
                required: true,
                minlength:10
            },
            district: {
                required: true,
            },
            state: {
                required: true,
            },
            country: {
                required: true
            }
        },
        messages: {
            username: {
                required: "Please enter user name",
                minlength: "Please enter valid user name",
                maxlength: "Please enter correct name",
            },
            firstname: {
                required: "Please enter first name"
            },
            lastname: {
                required: "Please enter last name"
            },
            email: {
                required: "Please enter email",
                email: "Please enter correct email"
            },
            password: {
                required: "Please enter password",
                minlength: "Please enter valid password"
            },
            age: {
                required: "Please enter age"
            },
            bloodgroup: {
                required: "Please enter blood group"
            },
            mobilenumber: {
                required: "Please enter the mobile number",
                minlength:"Please enter valid mobile number"
            },
            district: {
                required: "Please select district"
            },
            gender: {
                required: "Please select gender"
            },
            country: {
                required: "Please select country"
            },
            state: {
                required: "Please select state"
            },
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
    $(".signup-btn").click(function () {
        debugger;
        $("#signup-form").validate();
        if ($("#signup-form").valid()) {
            let userDetails = {
                username: $("#username").val(),
                firstname: $("#firstname").val(),
                country: $("#country").val(),
                lastname: $("#lastname").val(),
                state: $("#state").val(),
                gender: $("#gender").val(),
                district: $("#district").val(),
                age: $("#age").val(),
                bloodgroup: $("#bloodgroup").val(),
                Password: $("#Password").val(),
                mobilenumber: $("#mobilenumber").val(),
                email: $("#email").val(),
            }

            $.ajax({
                url: '/Login/Register',
                type: 'GET',
                data: userDetails,
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