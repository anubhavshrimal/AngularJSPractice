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
        ).when("/products/:brand/:category",   /*$routeParams*/
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

app.controller("inboxCtrl",function ($scope, mainService, $location) {
    console.log("inboxCtrl loaded");
    $scope.user = mainService.data;
    
    $scope.redirect = function () {
        $location.path("/sent/"+$scope.brand+"/"+$scope.category);
    }
});

app.controller("sentCtrl",function ($scope, $routeParams, mainService) {
    console.log("sentCtrl loaded");
    console.log($routeParams);

    $scope.product = [];
    for(var i = 0; i < mainService.products.length; i++){

        if(($routeParams.brand == "all" && $routeParams.category == "all")||($routeParams.brand == mainService.products[i].brand && $routeParams.category == mainService.products[i].category)){
            $scope.product.push(mainService.products[i]);
        }
    }
    
    $scope.custom = function (collection, search) {     //custom comparator
        console.log(collection);
        console.log(search);
        return collection.split("").reverse().join("") == search
    }
});

app.filter("capitalize",function () {   //custom filter
        return function (input) {       //returns a function
            return input = input[0].toUpperCase()+input.substring(1);
        }
});

app.controller("spamCtrl",function ($scope, mainService) {
    console.log("spamCtrl loaded");
    $scope.user = mainService.data;
});

app.service("mainService",function () {
    this.data = {};
    this.products = [
        {"brand": "nike", "category": "shoes", "id": "Nike Air" },
        {"brand": "nike", "category": "tshirts", "id": "Nike Tshirts" },
        {"brand": "adidas", "category": "shoes", "id": "Adidas A" },
        {"brand": "adidas", "category": "shoes", "id": "Adidas B" },
        {"brand": "adidas", "category": "tshirts", "id": "Adidas Tshirts" }
    ];

});