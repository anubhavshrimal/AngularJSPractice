var app = angular.module("myApp",["LocalForageModule"]);

app.controller("firstCtrl", function ($scope, $localForage) {
    $scope.sendData = function () {
        /*var obj = JSON.stringify($scope.user);      // JSON -> String format as data is set in String only
        localStorage.setItem("user", obj);          // Store the string format of object in local storage*/
        $localForage.setItem("user", $scope.user) // Set item using LocalForage
            .then(function () { // Success CallBack
            console.log("item stored");
        }, function (error) {   // Error CallBack
            console.log(error);
        });

    }

    $scope.getData = function () {
        // $scope.value = JSON.parse(localStorage.getItem("user"));    // String format -> JSON
        $localForage.getItem("user").then(function (data) {
            $scope.value = data;
        });
        console.log("item fetched");
    }
                    //for array user Array.stringify and Array.parse

    $scope.removeData = function () {
        localStorage.removeItem("user");
        console.log("item removed")
    }
});