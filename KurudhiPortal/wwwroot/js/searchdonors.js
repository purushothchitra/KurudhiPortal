$(document).ready(function () {
    $("#search-donors-form").validate({
        rules: {
            country: {
                required: true,
            },
            state: {
                required: true,
            },
            district: {
                required: true,
            },
            location: {
                required: true,
            },
        },
        messages: {
            country: {
                required: "Please select country",
            },
            state: {
                required: "Please select state",
            },
            district: {
                required: "Please select district"
            },
            location: {
                required: "Please select location"
            }
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
    $('.search-donors-header div').click(function () {
        $(".search-donors-header div").removeClass("bottom-line");
        $(this).addClass("bottom-line");
    });
    $(".available-donors").click(function () {
        $(".all-donor-container").css("display", "none");
        $(".available-donor-container").css("display", "block");
    });
    $(".all-donors").click(function () {
        $(".available-donor-container").css("display", "none");
        $(".all-donor-container").css("display", "block");
    });
    $("#country").change(function () {
        debugger;
        let country = $(this).val();
        $.ajax({
            url: '/Admin/ManageUsers',
            type: 'GET',
            data: { "country": country },
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
});