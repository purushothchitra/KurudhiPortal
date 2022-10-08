$(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
    $(".push-arrow").click(function () {
        $(".side-nav-section").css("width", "250px");
        $(".cancel-icon-container").css("display", "block");
        $(".push-arrow").css("display", "none");
        $(".image-container").css("display", "block");
        $(".nav-list").css("display", "inline-block");
    });
    $(".cancel-icon-container").click(function () {
        $(".side-nav-section").css("width", "70px");
        $(".push-arrow").css("display", "block");
        $(".cancel-icon-container").css("display", "none")
        $(".image-container").css("display", "none");
        $(".nav-list").css("display", "none");
    });
    $(".plus-icon").click(function () {
        location.href = "/Request/NewBloodReQuest";
        $(".plus-icon").css("display", "none");
    });
    $(".header-blood-request").click(function () {
        location.href ="/Request/NewBloodReQuest"
    });
    $(".setting-icon").click(function () {
        $(".admin-settings-box").toggle()
    });
    $(function () {
        var path = location.href;
        $(".nav-item .nav-link").each(function () {
            if ((this).href === path) {
                $(this).addClass("active-class");
            }
        })
    })
});
