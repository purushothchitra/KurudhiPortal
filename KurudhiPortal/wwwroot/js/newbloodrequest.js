$(document).ready(function () {
    $("#request-form").validate({
        rules: {
            patientname: {
                required: true
            },
            admissionid: {
                required: true,
            },
            age: {
                required: true,
            },
            gender: {
                required: true,
            },
            bloodtype: {
                required: true,
            },
            bloodgroup: {
                required: true,
            },
            bloodunit: {
                required: true
            },
            medicalstatus: {
                required: true,
            },
            duedate: {
                required: true,
            },
            attendername: {
                required: true,
            },
            attendercontact: {
                required: true,
                minlength:8
            },
            hospitalname: {
                required: true,
            },
            hospitaladdress: {
                required: true,
            },
            country: {
                required: true,
            },
            state: {
                required:true,
            },
            district: {
                required: true,
            },
            location: {
                required: true,
            },
        },
        messages: {
            patientname: {
                required: "Please Enter The patientName"
            },
            admissionid: {
                required: "Please Enter Admission Id",
            },
            age: {
                required: "Please Enter Age"
            },
            gender: {
                required: "Please Select Gender"
            },
            bloodtype: {
                required: "Please Select the bloodtype",
            },
            bloodgroup: {
                required: "Please Select Blood Group"
            },
            bloodunit: {
                required: "Please Enter Blood Unit"
            },
            medicalstatus: {
                required: "Please Select MedicalStatus"
            },
            duedate: {
                required: "Please Enter DueDate"
            },
            attendername: {
                required: "Please Enter Attender Name",
            },
            attendercontact: {
                required: "Please Enter Contact",
                minlength:"Please Enter Min 8 Character"
            },
            hospitalname: {
                required: "Plese Enter Hospital Name"
            },
            hospitaladdress: {
                required: "please Enter Hospital Address"
            },
            country: {
                required: "Please Select Country",
            },
            state: {
                required: "Please Select State",
            },
            district: {
                required: "Please Select District"
            },
            location: {
                required: "Please Select Location"
            }
        },
        highlight: function (element) {
            $(element).addClass('border-line');
        },
        unhighlight: function (element) {
            $(element).removeClass('border-line');
        }
    });
    $(".request-btn").click(function () {
        $("#task-form").validate();
        if ($("#task-form").valid()) {
            let newBloodRequest = {
                patientame: $("#name").val(),
                duedate: $("#duedate").val(),
                admissionid: $("#admissionid").val(),
                attendername: $("#atname").val(),
                age: $("#age").val(),
                attendercontact: $("#contact").val(),
                bloodtype: $("input[type=radio]:checked").val(),
                hospitalname: $("#hosname").val(),
                gender: $("#gender").val(),
                hospitaladdress: $("#hosaddress").val(),
                bloodgroup: $("#bloodgroup").val(),
                country: $("#country").val(),
                bloodunit: $("#bdunit").val(),
                location: $("#location").val(),
                medicalstatus: $("#medicalstatus").val(),
                state: $("#state").val(),
                district: $("#district").val(),
            }
            $.ajax({
                url: './Dashboard/MyDashBoard',
                type: 'GET',
                data: newBloodRequest,
                success: function (data) {
                    debugger;
                    if (data.status == "success") {
                        window.location = "/Request/User"
                    }
                },
                error: function (textStatus, errorThrown) {
                    console.log('Error in ajax call');
                }
            });
        }
    });
});