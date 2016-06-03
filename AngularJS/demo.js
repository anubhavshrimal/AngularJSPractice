/**
 * Created by anubhavshrimal on 17/5/16.
 */

var a=5;    //integer
var name = "anubhav" ;   //string
var cities = ["jaipur", "ajmer","delhi"];    //array

var speak;
speak = function (personName, personDetails, p) {      //function
    //var b=6;
    //console.log(b);
    console.log(personDetails);
    console.log(personName);
    console.log(p);
    //return b;
};

var person={                //object
        "name":"anubhav",
        "age":22,
        "city":"jaipur",
        "talk":speak(),      //returned value  ,null= undefined in JS
        "func":speak      //function
};

speak(name,person,speak);