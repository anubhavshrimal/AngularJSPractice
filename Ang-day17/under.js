/**
 * Created by anubhavshrimal on 8/6/16.
 */

var persons = [
    {
        "name": "anubhav",
        "college": "skit",
        "age": 5
    },
    {
        "name": "ritika",
        "college": "skit",
        "age": 12
    },
    {
        "name": "aditya",
        "college": "poornima",
        "age": 0
    },
    {
        "name": "harsh",
        "college": "jecrc",
        "age": 4
    }
];

var sorted = _.sortBy(persons, function (p) {
    return -p.age;
});

console.log("sorted by age in descending order",sorted);

var grouped = _.groupBy(persons, function (p) {
    return p.college;
});

console.log("grouped by college",grouped);