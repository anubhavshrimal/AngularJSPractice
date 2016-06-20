/**
 * Created by anubhavshrimal on 13/6/16.
 */

var app = angular.module("myApp", []);

'use strict';

app.controller("firstCtrl", ["$scope", function ($scope) {


}]);

app.directive("country", function () {

    return {
        "scope": {},
        "link": function (scope, elem, attrs) {
            console.log("country");

        },
        "controller": function () {
            this.name = "country is india"
        }
    }
});

app.directive("state", function () {

    return {
        "scope": {},
        "require": "^country",      // accebility of country in state
        "link": function (scope, elem, attrs, countryCtrl) {
            console.log("state link: ",countryCtrl.name);

        },
        "controller": function () {
            this.name = "state is Rajasthan";
        }
    }
});

app.directive("city", function () {

    return {
        "scope": {},
        // ?- optional, without any symbol- same level ctrl, ^- search at same level and above
        "require": ["^state","^country"],      // accebility of state in city
        "link": function (scope, elem, attrs, ctrlArr) {     // passing external controller as argument
            console.log("city");
            console.log("city link:",ctrlArr[0].name);
            console.log("city link:",ctrlArr[1].name);

        },
        "controller": function () {

        }
    }
});

app.directive("popover", function () {

    return {
        "templateUrl": "template.html",
        "transclude": true      // to get the template without losing the tag data 'hello world'
    }
});
