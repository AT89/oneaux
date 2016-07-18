
"use strict";

(function() {
    angular
    .module("dinosaur")
    .controller("ConfirmationController", [
        ConfirmationControllerFunction
    ])

    function ConfirmationControllerFunction () {
        console.log("I'm in the confirmation controller!")
        var vm = this;

    }

})();
