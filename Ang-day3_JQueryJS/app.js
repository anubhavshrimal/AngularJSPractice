/**
 * Created by anubhavshrimal on 19/5/16.
 */

// native JS
var div1 = document.getElementById("div1");

var set = function () {
    div1.style.background = '#000000';
}

// jQuery
var keyPressed = function () {
    var a = $("#input1").val()
    $("#text1").text(a);
}

var hide = function () {
    $("#div2").hide(5000);
}

var move = function () {
    $("#div3").animate({"opacity":0.5,"margin-left":200},2000);
}

var changeImg = function () {
    $("#img").attr("src","25f4d91f939ddb675c4c677fb6042799e4260026607ed31559b03edb75cc4fb2.jpg");
}

var moveImage = function (event) {
    $("#img").animate({"margin-left":event.clientX,"margin-top":event.clientY});

    console.log(event.clientX);
}