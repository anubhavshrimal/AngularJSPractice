var app = angular.module("myApp",["firebase"]);

app.controller("firstCtrl", function ($scope, $firebaseArray, $firebaseAuth) {

    var ref = new Firebase("https://anubhav.firebaseio.com/");

    // create an instance of the authentication service
    var auth = $firebaseAuth(ref);
    // login with Facebook
    auth.$authWithOAuthPopup("google").then(function(authData) {
        console.log("Logged in as:", authData.uid);
        $scope.url = authData.google.profileImageURL;
        $scope.name = authData.google.displayName;
    }).catch(function(error) {
        console.log("Authentication failed:", error);
    });
});