var app = angular.module("test",[]);

app.constant("PI",3.14);

app.config(function (nationProvider) {
// constant is the only service that can be accessed in config section. No other service is accessible
// service PROVIDERS are accessible only in config section.
    console.log("config loaded");

    nationProvider.setNation("IND");
});

app.run(function () {

    console.log("run loaded");
});

app.service("dataService", function () {

    this.data = ["India", "U.S.A", "U.K"];
});

app.value("cities", {"name": "jaipur", "pin": "302006"});

app.provider("nation", function () {

    var nation = "US";

    return {
        setNation: function (x) {
            nation = x;
        },
        $get: function () {
            return{
                "name": nation
            }
        }
    }
})