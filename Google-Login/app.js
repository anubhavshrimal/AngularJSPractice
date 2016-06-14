var app = angular.module("myApp",["firebase"]);

app.controller("firstCtrl", function ($scope, $firebaseArray, $firebaseAuth) {

    var ref = new Firebase("https://anubhav.firebaseio.com/");

    // create an instance of the authentication service
    var auth = $firebaseAuth(ref);
    // login with Facebook
    auth.$authWithOAuthPopup("google", {"scope": "email"}).then(function(authData) {
        console.log("Logged in as:", authData);
        $scope.url = authData.google.profileImageURL;
        $scope.name = authData.google.displayName;
        $scope.email = authData.google.email;
    }).catch(function(error) {
        console.log("Authentication failed:", error);
    });
});