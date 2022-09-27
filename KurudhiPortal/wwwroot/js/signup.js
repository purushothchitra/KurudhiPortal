﻿$(document).ready(function () {
    $("#task-form").validate({
        rules: {
            fname: {
                required: true
            },
            lname: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            age: {
                required: true
            },
            mobilenumber: {
                required: true,
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
            country: {
                required: true
            }
        },
        messages: {
            fname: {
                required: "Please Fill The Name"
            },
            lname: {
                required: "Please Fill The lastname"
            },
            email: {
                required: "Please Enter Email",
                email: "Please Enter Correct Email"
            },
            required: {
                required: "Please Enter Password",
                minlength: "Please Enter maximum 8 Characters"
            },
            age: {
                required: "Please Fill The Age"
            },
            bloodgroup: {
                required: "Please Enter Blood Group"
            },
            mobilenumber: {
                required: "Please Fill The Contact",
            },
            district: {
                required: "please Select district"
            },
            gender: {
                required: "please select Gender"
            },
            country: {
                required: "Please Select Country"
            },
            state: {
                required: "Please Select State"
            },
        }
    });
});