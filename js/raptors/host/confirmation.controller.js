
"use strict";

(function() {
    angular
    .module("dinosaur")
    .controller("ConfirmationController", [
        "RaptorFactory",
        "$stateParams",
        ConfirmationControllerFunction
    ])

    function ConfirmationControllerFunction (RaptorFactory, $stateParams) {
        console.log("I'm in the confirmation controller!")
        var vm = this;
        vm.new_raptor_id_key = $stateParams.raptor_id;
        console.log(vm.new_raptor_id_key);
        // vm.raptors = RaptorFactory.query();
        // console.log(vm.raptors);

    }

})();
