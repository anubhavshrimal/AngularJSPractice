/**
 * Created by anubhavshrimal on 31/5/16.
 */

var app = angular.module("myApp",["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/",      /*root or main page*/
            {
                "templateUrl": "views/viewAllUsers.html",
                "controller": "viewCtrl"
            }
        ).when("/add",
            {
                "templateUrl": "views/addUser.html",
                "controller": "addCtrl"
            }
        ).when("/update/:id",
            {
                "templateUrl": "views/updateUser.html",
                "controller": "updateCtrl"
            }
        ).when("/pagenotfound",
            {
                "templateUrl": "views/pageNotFound.html"
            }
        ).otherwise("/pagenotfound");

});

// controller for viewAllUser.html
app.controller("viewCtrl",function ($scope, $rootScope, $location, userList) {
    $rootScope.header = "View Users";
    $scope.users = userList;
    if(userList.length == 0)
        $scope.list = false;
    else
        $scope.list = true;

    $scope.redirect = function (id) {
        $location.path("/update/"+id);  //redirect to updateUser.html page with userID
    }
});

// controller for addUser.html
app.controller("addCtrl",function ($scope, $rootScope, $location, userList) {
    $rootScope.header = "Add User";
    $scope.user = {};
    var tempID = "";

    for(var i = 0; i < 5; i++){     // generating random user id
        tempID += Math.floor(Math.random()*9)+1;
    }
    $scope.user.id = tempID;

    $scope.added = true;

    $scope.redirect = function () {
        // check if any fields are empty
        if( $scope.user["name"] == undefined   || $scope.user["age"] == undefined ||
            $scope.user["phone"] == undefined || $scope.user["email"] == undefined ||
            $scope.user["name"] == ""   || $scope.user["age"] == "" ||
            $scope.user["phone"] == "" || $scope.user["email"] == ""){
            $scope.added = false;
        }
        else {
            $scope.added = true;
            userList.push($scope.user);  // add the user in the service list
            $location.path("/");        // redirect to viewAllUsers.html page
        }
    }
});

// controller for updateUser.html
app.controller("updateCtrl",function ($scope, $rootScope, $location, userList, $routeParams) {
    $rootScope.header = "Update User";
    $scope.updateUser = {};
    $scope.updateUser.id = $routeParams.id; //get the value of id passed in url
    var i;
    for(i = 0; i < userList.length; i++){
        if(userList[i].id == $scope.updateUser.id){
            //if user id matches in the userList then copy the corresponding values
            $scope.updateUser = userList[i];
            break;
        }
    }

    $scope.added = true;

    $scope.redirect = function () {
        // check if any fields are empty
        if( $scope.updateUser["name"] == ""  || $scope.updateUser["age"] == "" ||
            $scope.updateUser["phone"] == "" || $scope.updateUser["email"] == ""){
            $scope.added = false;
        }
        else{
            $scope.added = true;
            userList[i] = $scope.updateUser;
            $location.path("/");    //redirect to viewAllUsers.html page
        }
    }
});

//service array to store the list of users added
app.factory("userList",function () {
    return [];
    // {"id":"123", "name":"Anubhav", "age":20, "phone":123455, "email":"a@gmail.com"}
});