$(document).ready(function () {
    $("#firstname").keyup(function () {
        var firstName = $("#firstname").val();
        if (firstName == "") {
            $("#firstname").css("border", "1px solid red");
            $("#firstname-validation").html("Please enter First Name")
            return false;
        }
        else {
            $("#firstname").css("border", "2px solid #3A5897");
            $("#firstname-validation").html("");
            return false;
        }
    });
    $("#lastname").keyup(function () {
        var lastname = $("#lastname").val();
        if (lastname == "") {
            $("#lastname").css("border", "1px solid red");
            $("#lastname-validation").html("Please enter First Name")
            return false;
        }
        else {
            $("#lastname").css("border", "2px solid #3A5897");
            $("#lastname-validation").html("");
            return false;
        }
    });
    $("#age").keyup(function () {
        var age = $("#age").val();
        if (age == "") {
            $("#age").css("border", "1px solid red");
            $("#age-validation").html("Please enter First Name")
            return false;
        }
        else {
            $("#age").css("border", "2px solid #3A5897");
            $("#age-validation").html("");
            return false;
        }
    });
    $("#mob-num").keyup(function () {
        var mobile = $("#mob-num").val();
        if (mobile == "") {
            $("#mob-num").css("border", "1px solid red");
            $("#mob-validation").html("Please enter First Name")
            return false;
        }
        else {
            $("#mob-num").css("border", "2px solid #3A5897");
            $("#mob-validation").html("");
            return false;
        }
    });
    $("#email").keyup(function () {
        var email = $("#email").val();
        if (email == "") {
            $("#email").css("border", "1px solid red");
            $("#email-validation").html("Please enter First Name")
            return false;
        }
        else {
            $("#email").css("border", "2px solid #3A5897");
            $("#email-validation").html("");
            return false;
        }
    });
    $("#password").keyup(function () {
        var password = $("#password").val();
        if (password == "") {
            $("#password").css("border", "1px solid red");
            $("#password-validation").html("Please enter First Name")
            return false;
        }
        else {
            $("#password").css("border", "2px solid #3A5897");
            $("#password-validation").html("");
            return false;
        }
    });
    $("#firstname").focusout(function () {
        var firstName = $("#firstname").val();
        if (firstName == "") {
            $("#firstname").css("border", "1px solid red");
            $("#firstname-validation").html("Please enter First Name")
            return false;
        }
    });
    $("#email").focusout(function () {
        var email = $("#email").val();
        if (email == "") {
            $("#email").css("border", "1px solid red");
            $("#email-validation").html("Please enter First Name")
            return false;
        }
    });
    $("#password").focusout(function () {
        var password = $("#password").val();
        if (password == "") {
            $("#password").css("border", "1px solid red");
            $("#password-validation").html("Please enter First Name")
            return false;
        }
    });
    $("#lastname").focusout(function () {
        var lastname = $("#lastname").val();
        if (lastname == "") {
            $("#lastname").css("border", "1px solid red");
            $("#lastname-validation").html("Please enter First Name")
            return false;
        }
    });
    $("#age").focusout(function () {
        var age = $("#age").val();
        if (age == "") {
            $("#age").css("border", "1px solid red");
            $("#age-validation").html("Please enter First Name")
            return false;
        }
    });
    $("#mob-num").focusout(function () {
        var mobile = $("#mob-num").val();
        if (mobile == "") {
            $("#mob-num").css("border", "1px solid red");
            $("#mob-validation").html("Please enter First Name")
            return false;
        }
    });
    $(".sign-up-btn").click(function () {
        $("#mob-num").focusout()
        $("#age").focusout()
        $("#lastname").focusout()
        $("#password").focusout()
        $("#email").focusout()
        $("#firstname").focusout()
    });

});