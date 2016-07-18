
"use strict";

(function() {
    angular
    .module("dinosaur")
    .controller("TestAddSongController", [
        "$stateParams",
        TestAddSongControllerFunction
    ])

    function TestAddSongControllerFunction ($stateParams) {
        console.log("I'm in the test add song controller!")
        var vm = this;
        console.log($stateParams.raptor_id);

    }

})();
