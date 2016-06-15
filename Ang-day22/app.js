/**
 * Created by anubhavshrimal on 13/6/16.
 */

var app = angular.module("myApp", []);

'use strict';

app.controller("firstCtrl", ["$scope", function ($scope) {

    $scope.speak = function (name, city) {
        console.log("hello to "+name+" in "+city);
    }

}]);

app.controller("secondCtrl", function () {

    this.name = "abc";
    this.age = 20;
    console.log("second ctrl");
});

app.directive("call", function () {

    return {
        "scope": {
            "speak": "&talk",     // & means 2 way function binded;
        },
        "restrict": "AE",
        "link": function (scope, elem, attrs) {


        },
        "templateUrl": "template.html"
    }
});

app.directive("random", function () {

    return function (scope, elem, attrs) {    // short for link
        console.log("hi");
    }
});

app.directive("country", function () {

    return {
        "scope": {},
        "priority": 3,
        "link": function (scope, elem, attrs) {
            console.log("country");

        },
        "controller": function () {

            this.label = "IN";
        }
    }
});

app.directive("state", function () {

    return {
        "scope": {},
        "priority": 4,
        "link": function (scope, elem, attrs) {
            console.log("state");

        },
        "controller": function () {


        }
    }
});

app.directive("city", function () {

    return {
        "scope": {},
        "priority":5,
        "link": function (scope, elem, attrs) {
            console.log("city");

        },
        "controller": function () {


        }
    }
});
