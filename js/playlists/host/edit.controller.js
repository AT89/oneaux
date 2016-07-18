
"use strict";

(function() {
    angular
    .module("oneaux")
    .controller("EditController", [
        EditControllerFunction
    ])

    function EditControllerFunction () {
        console.log("I'm in the edit controller!")
        var vm = this;

    }

})();
