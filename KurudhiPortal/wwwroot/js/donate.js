$(document).ready(function () {
    $('.request-container div').click(function () {
        $(".request-container div").removeClass("bottom-line");
        $(this).addClass("bottom-line");
    });
    $(".all-over").click(function () {
        $(".near-request").css("display", "none");
        $(".all-over-request").css("display", "block");
    });
    $(".near-me").click(function () {
        $(".near-request").css("display", "block");
        $(".all-over-request").css("display", "none");
    });
});
$(function () {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='register']").validate({
        // Specify validation rules
        rules: {
            ptname:"required",
        },
        // Specify validation error messages
        messages: {
            ptname:"Please Enter Patient Name",
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            form.submit();
        }
    });
});