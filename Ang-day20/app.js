/**
 * Created by anubhavshrimal on 13/6/16.
 */

var app = angular.module("myApp", []);

'use strict';

app.controller("firstCtrl", ["$scope", function ($scope) {
    $scope.image = "australia.png";
    console.log("controller loaded");
}]);

app.directive("myDir", function () {
    var ddo = {     //directive definiton object

        "restrict": "AE",    // can use directive as A- attribute; E- element; C- comment; S- class;

        "link": function (scope, elem, attrs) {
            console.log("directive compiled");

            scope.name = "abc";
            elem[0].style.background = "yellow";    //elem (here) = div

            elem.on("click", function(){
                elem[0].style.border = "2px solid "+attrs.borderColor;
            })

        }
    }

    return ddo;
});