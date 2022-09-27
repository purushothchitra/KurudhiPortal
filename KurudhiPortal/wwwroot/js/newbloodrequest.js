$(document).ready(function () {
    $("#task-form").validate({
        rules: {
            name: {
                required: true
            },
            duedate: {
                required: true,
            },
            admissionid: {
                required: true,
            },
            atname: {
                required: true,
            },
            age: {
                required: true
            },
            contact: {
                required: true,
            },
            bloodrequirment: {
                required: true,
            },
            hosname: {
                required: true,
            },
            hosaddress: {
                required: true
            },
            bdunit: {
                required: true
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
            medicalstatus: {
                required: true,
            },
            country: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please Fill The Name"
            },
            duedate: {
                required: "Please Fill The DueDate"
            },
            admissionid: {
                required: "Please Fill The Admission Id",
            },
            atname: {
                required: "Please Fill The Attender Name",
            },
            age: {
                required: "Please Fill The Age"
            },
            contact: {
                required: "Please Fill The Contact",
            },
            bloodrequirment: {
                required: "Please fill the type",
            },
            hosname: {
                required: "Plese Enter Hospital Name"
            },
            hosaddress: {
                required: "please Enter Hospital Address"
            },
            bdunit: {
                required: "Please Enter Blood Unit"
            },
            district: {
                required: "please Select district"
            },
            gender: {
                required: "please select Gender"
            },
            bloodgroup: {
                required: "please select Blood Group"
            },
            country: {
                required: "Please Select Country"
            },
            state: {
                required: "Please Select State"
            },
            medicalstatus: {
                required: "please Select MedicalStatus"
            }
        },
        highlight: function (element) {
            $(element).addClass('border-line');
        },
        unhighlight: function (element) {
            $(element).removeClass('border-line');
        }
    });
});