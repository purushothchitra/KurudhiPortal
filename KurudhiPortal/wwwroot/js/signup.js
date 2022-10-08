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
    $("#country").change(function () {
        debugger;
        let country = $(this).val();
        $.ajax({
            url: '/Login/getstate',
            type: 'POST',
            data: {"country": country},
            success: function (data) {
                debugger;
                if (data.status == "success") {
                    alert("success");
                }
            },
            error: function () {
                console.log('Error in Operation');
            }
        });
    });
    $(".signup-btn").click(function () {
        debugger;
        $("#signup-form").validate();
        if ($("#signup-form").valid()) {
            let userDetails = {
                UserName: $("#username").val(),
                Password: $("#password").val(),
                FirstName: $("#firstname").val(),
                LastName: $("#lastname").val(),
                Gender: $("#gender").val(),
                Age: $("#age").val(),
                BloodGroup: $("#bloodgroup").val(),
                Email: $("#email").val(),
                MobileNumber: $("#mobilenumber").val(),
                Country: $("#country").val(),
                State: $("#state").val(),
                District: $("#district").val(),
            }
            console.log(userDetails);
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