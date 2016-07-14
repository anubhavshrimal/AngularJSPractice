/**
 * Created by abhishekrathore on 6/23/16.
 */
var app = angular.module("test",[]);


app.controller("testCtrl",function($scope){
    $scope.c = 0;
});

app.directive("tic", function ($timeout) {
   return {
       restrict: "E",
       scope: {},
       require: '^tictactoe',
       templateUrl: "tic.html",
       link: function (scope, elem, attrs, tictactoeCtrl) {
           scope.id = tictactoeCtrl.id++;
           scope.mark = tictactoeCtrl.ticks[scope.id];

           elem.on('click', function () {
               $timeout(function () {
                   if(scope.mark.label == '-'){
                       if(tictactoeCtrl.count % 2 == 0){
                           tictactoeCtrl.ticks[scope.id].label = 'X';
                       }
                       else{
                           tictactoeCtrl.ticks[scope.id].label = 'O';
                       }
                       tictactoeCtrl.count++;
                       console.log(tictactoeCtrl.ticks);
                       tictactoeCtrl.check(scope.mark.label);
                   }
               });
               console.log("click");
           })
       }
   }
});

app.directive('tictactoe', function () {
    return{
        restrict: "E",
        controller: function () {
            this.id = 0;
            this.count = 0;
            this.winConditions =
                [[0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]];

            this.ticks = [
                {"label":"-"},
                {"label":"-"},
                {"label":"-"},
                {"label":"-"},
                {"label":"-"},
                {"label":"-"},
                {"label":"-"},
                {"label":"-"},
                {"label":"-"}];

            this.check = function (mark) {
                for( var i =0 ; i < this.winConditions.length; i++){
                    for(var j = 0; j < 3; j++){
                        if(this.ticks[this.winConditions[i][j]].label != mark)
                            break;
                        }
                    if(j==3){
                        alert(mark +" wins");
                        for(var k = 0; k < 9; k++)
                            this.ticks[k].label = '-';
                        }
                }
            }
        }
    } 
});