
"use strict";

(function() {
    angular
    .module("dinosaur")
    .controller("AdminPlistController", [
        AdminPlistControllerFunction
    ])

    function AdminPlistControllerFunction () {
        console.log("I'm in the admin playlist controller!")
        var vm = this;

    }

})();
