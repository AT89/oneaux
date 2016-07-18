
"use strict";

(function() {
    angular
    .module("oneaux")
    .controller("HomeController", [
        HomeControllerFunction
    ])

    function HomeControllerFunction () {
        console.log("I'm in the home controller!")
        var vm = this;

    }

})();
