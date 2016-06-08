var app = angular.module("myApp",["firebase"]);

app.controller("firstCtrl", function ($scope, $firebaseObject) {

    // bad practice to initialize in controller as controller runs everytime the view changes
    // should be initialized in RUN
    var ref = new Firebase("https://anubhav.firebaseio.com/");

    var obj = $firebaseObject(ref);
    obj.$bindTo($scope, "fireObj");

    obj.$loaded().then(function () {       //when the object is loaded properly
        console.log($scope.fireObj.person);
    });

});

app.controller("secondCtrl", function ($scope, $firebaseArray) {

    // bad practice to initialize in controller as controller runs everytime the view changes
    // should be initialized in RUN
    var ref = new Firebase("https://youstart.firebaseio.com/colleges");

    var cols = $firebaseArray(ref);
    $scope.add = function (col) {
        cols.$add(col);

    }
    $scope.delete = function () {
        cols.$remove($scope.colleges[0]);
    }
    $scope.colleges = cols;
    // NOTE: push pop methods of JS won't update the firebase array, use its api methods $add $save etc.

    /*$scope.colleges.$loaded().then(function () {       //when the array is loaded properly
        console.log($scope.colleges);
    });*/
});