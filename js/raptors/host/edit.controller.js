
"use strict";

(function() {
    angular
    .module("dinosaur")
    .controller("EditController", [
        EditControllerFunction
    ])

    function EditControllerFunction () {
        console.log("I'm in the edit controller!")
        var vm = this;

    }

})();
