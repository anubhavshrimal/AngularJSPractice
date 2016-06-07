var app = angular.module("myApp",[]);

app.controller("firstCtrl", function ($scope) {
    $scope.sendData = function () {
        var obj = JSON.stringify($scope.user);      // JSON -> String format as data is set in String only
        localStorage.setItem("user", obj);          // Store the string format of object in local storage
        console.log("item stored");
    }

    $scope.getData = function () {
        $scope.value = JSON.parse(localStorage.getItem("user"));    // String format -> JSON
        console.log("item fetched");
    }
    
    $scope.removeData = function () {
        localStorage.removeItem("user");
        console.log("item removed")
    }
});