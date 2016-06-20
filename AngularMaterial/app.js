/**
 * Created by anubhavshrimal on 17/6/16.
 */

var app = angular.module("myApp", ["ngMaterial"]);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('red');

    $mdThemingProvider.theme('dark-grey')
        .primaryPalette('green')
        .backgroundPalette('red');
});
