var app = angular   .module("myApp",["LocalForageModule"]);

app.controller("firstCtrl", function ($scope, $localForage) {

    $scope.array = [];

    $localForage.getItem("TaskList").then(function (data) {
        if(data != null)
            $scope.array = data;
    });

    $scope.sendData = function () {
        $scope.array.push($scope.task);

        $localForage.setItem("TaskList", $scope.array) // Set item using LocalForage
            .then(function () { // Success CallBack
                console.log("task stored");
        }, function (error) {   // Error CallBack
            console.log(error);
        });
    }

    $scope.removeData = function () {
        for(var i = 0; i < $scope.array.length; i++){
            if($scope.array[i] == $scope.removeTask){
                $scope.array.splice(i,1);
            }
        }

        $localForage.setItem("TaskList", $scope.array) // Set item using LocalForage
            .then(function () { // Success CallBack
                console.log("task stored");
            }, function (error) {   // Error CallBack
                console.log(error);
            });

        console.log("task removed")
    }

    $scope.clear = function () {
        $localForage.clear();
        $scope.array = [];
    }
});