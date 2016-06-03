/**
 * Created by anubhavshrimal on 24/5/16.
 */

var app = angular.module("myApp",[]);

app.controller("secondCtrl",function ($scope,myService) {
    console.log("secondCtrl");
    myService.speak();
});

app.service("myService", function () {
    this.name = "abc";

    this.speak = function () {
        console.log("talk");
    }

    console.log("myService");
});



