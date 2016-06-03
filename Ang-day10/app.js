/**
 * Created by anubhavshrimal on 26/5/16.
 */
var app = angular.module("myApp",[]);

app.controller("fisrtCtrl",function ($scope, $http) {

    $scope.send = function () {
        $http.get("http://demo2989159.mockable.io/test")
            .then(function (data) {/*success callback*/
            console.log(data);
        });
    }

    $scope.sendPost = function () {
        $http.post("http://demo2989159.mockable.io/testpost", {"user": $scope.user, "org": $scope.org})
            .then(function (data) {/*success callback*/
            console.log(data);
        });
    }

    $scope.senderror = function () {
        $http.post("http://demo2989159.mockable.io/forbidden")
            .then(function (data) {},       /*success callback*/
                function (data) {           /*error callback*/
                console.log(data);
            });
    }

    $scope.getPosts = function () {
        $http.get("http://jsonplaceholder.typicode.com/photos")
            .then(function (data) {/*success callback*/
                console.log(data);
                $scope.posts = data.data;
            });
    }
});