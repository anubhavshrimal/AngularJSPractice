var app = angular.module("test",[]);

app.constant("PI",3.14);

app.config(function () {
// constant is the only service that can be accessed in config section. No other service is accessible
// service PROVIDERS are accessible only in config section.
    console.log("config loaded");
});

app.run(function () {

    console.log("run loaded");
});

app.service("dataService", function () {

    this.data = ["India", "U.S.A", "U.K"];
});

app.value("cities", {"name": "jaipur", "pin": "302006"});