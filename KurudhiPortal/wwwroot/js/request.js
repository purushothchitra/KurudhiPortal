$(document).ready(function () {
    $('.admin-section div').click(function () {
        $(".admin-section div").removeClass("bottom-line");
        $(this).addClass("bottom-line");
    });
    $(".raised-request").click(function () {
        $(".approver-content").css("display", "none");
        $(".pending-content").css("display", "none");
        $(".raised-content").css("display","block")
    });
    $(".approver-request").click(function () {
        $(".approver-content").css("display", "block");
        $(".pending-content").css("display", "none");
        $(".raised-content").css("display", "none")
    });
    $(".pending-request").click(function () {
        $(".approver-content").css("display", "none");
        $(".pending-content").css("display", "block");
        $(".raised-content").css("display", "none")
    });
    
});