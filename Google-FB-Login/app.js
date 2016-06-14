var app = angular.module("myApp",["firebase"]);

app.controller("firstCtrl", function ($scope, $firebaseArray, $firebaseAuth) {

    var ref = new Firebase("https://anubhav.firebaseio.com/");

    // create an instance of the authentication service
    var auth = $firebaseAuth(ref);

    // login with Google
    $scope.google = function(){

        auth.$authWithOAuthPopup("google", {"scope": "email"}).then(function(authData) {
            console.log("Logged in as:", authData);
            $scope.url = authData.google.profileImageURL;
            $scope.name = authData.google.displayName;
            $scope.email = authData.google.email;
        }).catch(function(error) {
            console.log("Authentication failed:", error);
        });
    }

    // login with Facebook
    $scope.facebook = function(){
        auth.$authWithOAuthPopup("facebook", {"scope": "email"}).then(function(authData) {
            console.log("Logged in as:", authData);
            $scope.url = authData.facebook.profileImageURL;
            $scope.name = authData.facebook.displayName;
            $scope.email = authData.facebook.email;
        }).catch(function(error) {
            console.log("Authentication failed:", error);
        });
    }

});