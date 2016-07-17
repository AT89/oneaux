
"use strict";

(function() {
    angular
    .module("dinosaur")
    .controller("InviteController", [
        InviteControllerFunction
    ])

    function InviteControllerFunction () {
        console.log("I'm in the invite controller!")
        var vm = this;

    }

})();
