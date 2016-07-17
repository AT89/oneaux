
"use strict";

(function() {
    angular
    .module("dinosaur")
    .controller("HomeController", [
        HomeControllerFunction
    ])

    function HomeControllerFunction () {
        console.log("I'm in the home controller!")
        var vm = this;

    }

})();
