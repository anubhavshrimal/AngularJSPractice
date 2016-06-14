/**
 * Created by anubhavshrimal on 13/6/16.
 */

var app = angular.module("myApp", []);

'use strict';

app.controller("firstCtrl", ["$scope", function ($scope) {


}]);

app.directive("round", function () {

    return {
        //"scope": true,      // scope of the directive itself
        "scope": {
            "clr": "=color",     // = means 2 way binded;
            "rad": "@radius"     // @ means one way binded
        },        // isolated scope
        "restrict": "AE",
        "link": function (scope, elem, attrs) {

            /* scope.clr = attrs.color;
            scope.rad = attrs.radius;*/
        },
        // "template": "<h1>Directive Template</h1>",       //replaces the whole html content of the element used in
        "templateUrl": "template.html"
    }
});