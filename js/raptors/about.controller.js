
"use strict";

(function() {
    angular
    .module("dinosaur")
    .controller("AboutController", [
        AboutControllerFunction
    ])

    function AboutControllerFunction () {
        console.log("I'm in the about controller!")
        var vm = this;

    }

})();
