$(document).ready(function () {
    $("#task-form").validate({
        rules: {
            fname: {
                required: true
            },
            lname: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            age: {
                required: true
            },
            mobilenumber: {
                required: true,
            },
            district: {
                required: true,
            },
            gender: {
                required: true,
            },
            bloodgroup: {
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
            fname: {
                required: "Please Fill The Name"
            },
            lname: {
                required: "Please Fill The lastname"
            },
            email: {
                required: "Please Enter Email",
                email: "Please Enter Correct Email"
            },
            required: {
                required: "Please Enter Password",
                minlength: "Please Enter maximum 8 Characters"
            },
            age: {
                required: "Please Fill The Age"
            },
            bloodgroup: {
                required: "Please Enter Blood Group"
            },
            mobilenumber: {
                required: "Please Fill The Contact",
            },
            district: {
                required: "please Select district"
            },
            gender: {
                required: "please select Gender"
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
        $("#task-form").validate();
        if ($("#task-form").valid()) {
            let userDetails = {
                fname: $("#fname").val(),
                country: $("#country").val(),
                lname: $("#lname").val(),
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
                url: './User/SearchDonors',
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