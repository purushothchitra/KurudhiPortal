$(document).ready(function () {
    $("#profile-form").validate({
        rules: {
            userName: {
                required: true,
            },
            password: {
                required: true,
                minlength: 8
            },
            firstName: {
                required: true
            },
            lastName: {
                required: true,
            },
            gender: {
                required: true,
            },
            bloodGroup: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            age: {
                required: true
            },
            mobileNumber: {
                required: true,
                minlength: 10
            },
            district: {
                required: true,
            },
            state: {
                required: true,
            },
            country: {
                required: true
            },
            lastDonatedDate: {
                required: true,
            }
        },
        messages: {
            userName: {
                required: "Please Enter User Name"
            },
            firstName: {
                required: "Please Enter First Name"
            },
            lastName: {
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
            bloodGroup: {
                required: "Please Enter Blood Group"
            },
            mobileNumber: {
                required: "Please Enter The Contact",
                minlength: "Please Enter Valid Phone Number"
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
            lastDonatedDate: {
                required: "Please Enter Last Donated Date",
            },
            highlight: function (element) {
                $(element).addClass('border-line');
            },
            unhighlight: function (element) {
                $(element).removeClass('border-line');
            }
        }
    });
    $(".profile-btn").click(function () {
        $(".bi-pencil").css("display", "inline-block");
        $(".input-box input").removeAttr("readonly");
    });
    $(".profile-save-btn").click(function () {
        $("#profile-form").validate();
        if ($("#profile-form").valid()) {
            alert("success");
        }
        else {
            alert("error");
        }
    });
});