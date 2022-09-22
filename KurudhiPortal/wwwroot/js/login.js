$(document).ready(function () {
    $(".login-btn").click(function () {
        let email = $("#email").val();
        let password = $("#password").val();
        console.log(email)
        console.log(password);

    });
    $("#password").keyup(function () {
        var password = $("#password").val();
        if (password == "") {
            $("#password").css('border', "1px solid red");
            $("#password-validation").html("Please Enter Password")
            return false;
        }
        else {
            $("#password").css('border', "2px solid #3A5897");
            $("#password-validation").html("")
            return false;
        };
    });
    $("#email").focusout(function () {
        var email = $("#email").val();
        if (email == "") {
            $("#email").css('border', "1px solid red");
            $("#email-validation").html("Please Enter mail")
            return false;
        }
    });
    $("#password").focusout(function () {
        var password = $("#password").val();
        if (password == "") {
            $("#password").css('border', "1px solid red");
            $("#password-validation").html("Please Enter Password")
            return false;
        }
    });
    $("#email").keyup(function () {
        var email = $("#email").val();
        if (email == "") {
            $("#email").css('border', "1px solid red");
            $("#email-validation").html("Please Enter Email")
            return false;
        }
        else {
            $("#email").css('border', "2px solid #3A5897");
            $("#email-validation").html("")
            return false;
        }
    });
    $(".login-btn").click(function () {
        $("#password").focusout();
        $("#email").focusout();
    })
})