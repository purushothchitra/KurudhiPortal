$(document).ready(function () {
    $("#profile-form").validate({
        rules: {
            username: {
                required: true,
                minlength: 8,
                maxlength: 25,
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
            lastdonatedate:{
                required: true,
            },
        },
        messages: {
            username: {
                required: "Please enter user name or email or mobile number",
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
                minlength: "Please enter valid mobile number"
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
            lastdonatedate: {
                required: "Please enter last donated date",
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
    $(".edit-btn").click(function () {
        $(".form-floating input").removeAttr("readonly");
        $('.form-select').removeAttr("disabled");
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