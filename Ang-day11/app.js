/**
 * Created by anubhavshrimal on 26/5/16.
 */
var app = angular.module("myApp",["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/",      /*root or main page*/
            {
                "templateUrl": "views/inbox.html",
                "controller": "inboxCtrl"
            }
        ).when("/sent",
            {
                "templateUrl": "views/sent.html",
                "controller": "sentCtrl"
            }
        ).when("/spam",
            {
                "templateUrl": "views/spam.html",
                "controller": "spamCtrl"
            }
        ).when("/error",
            {
                "templateUrl": "views/error.html"
            }
        ).when("/template",
            {
                "template": "<p>Hello World using simple template</p>"  /*not so good practice*/
            }
        ).otherwise("/error");

});

app.controller("inboxCtrl",function ($scope, mainService) {
    console.log("inboxCtrl loaded");
    $scope.user = mainService.data;
});

app.controller("sentCtrl",function ($scope, mainService) {
    console.log("sentCtrl loaded");
    $scope.user = mainService.data;
});

app.controller("spamCtrl",function ($scope, mainService) {
    console.log("spamCtrl loaded");
    $scope.user = mainService.data;
});

app.service("mainService",function () {
    this.data = {};
})