/**
 * Created by abhishekrathore on 6/23/16.
 */
var app = angular.module("test",[]);


app.controller("testCtrl",function($scope){


    $scope.name = "Ac"
    $scope.add = function(ev){
        console.log(ev);
        console.log(ev.code,ev.charCode);

    }

})


app.directive("draggable",function($document){

    return function(scope,elem,attrs){

        //console.log(elem);
        var pressed = false;
        var pressedX,pressedY,marginX,marginY;

        elem.on("mousedown",function(ev){
            ev.preventDefault();
            pressed = true;
            pressedX =ev.clientX;
            pressedY = ev.clientY;
            if(elem[0].style.marginLeft)
            marginX = parseInt(elem[0].style.marginLeft.split('px')[0]);
            else
                marginX =0
            if(elem[0].style.marginTop){
                marginY = parseInt(elem[0].style.marginTop.split('px')[0]);

            }else
                marginY=0;

            console.log(marginX);



        })

        $document.on("mouseup",function(){
            pressed = false;
        })




        $document.on("mousemove",function(ev){



            console.log((ev.clientX-ev.offsetX),(ev.clientY-ev.offsetY));

            if(pressed){
                elem.css("margin-left",(marginX+ev.clientX-pressedX)+'px').css("margin-top",(marginY+ev.clientY-pressedY)+'px')
            }

        })




    }

})