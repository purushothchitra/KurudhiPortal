$(document).ready(function () {
    $("#signup-form").validate({
        rules: {
            username: {
                required:true,
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
                required: "Please Enter User Name"
            },
            firstname: {
                required: "Please Enter First Name"
            },
            lastname: {
                required: "Please Enter Last Name"
            },
            email: {
                required: "Please Enter Email",
                email: "Please Enter Correct Email"
            },
            password: {
                required: "Please Enter Password",
                minlength: "Please Enter maximum 8 Characters"
            },
            age: {
                required: "Please Enter Age"
            },
            bloodgroup: {
                required: "Please Enter Blood Group"
            },
            mobilenumber: {
                required: "Please Enter The Contact",
                minlength:"Please Enter Valid Phone Number"
            },
            district: {
                required: "Please Select district"
            },
            gender: {
                required: "Please Select Gender"
            },
            country: {
                required: "Please Select Country"
            },
            state: {
                required: "Please Select State"
            },
            highlight: function (element) {
                $(element).addClass('border-line');
            },
            unhighlight: function (element) {
                $(element).removeClass('border-line');
            }
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