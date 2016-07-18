
"use strict";

(function() {
    angular
    .module("dinosaur")
    .controller("AdminPlistController", [
        "RaptorFactory",
        "$state",
        "$stateParams",
        AdminPlistControllerFunction
    ])

    function AdminPlistControllerFunction (RaptorFactory, $state, $stateParams) {
        console.log("I'm in the admin playlist controller!")
        console.log($stateParams.id);
        var vm = this;
        vm.raptor = RaptorFactory.get({id: $stateParams.id});
        console.log(this.raptor);
        // vm.raptors = RaptorFactory.query();
        // console.log(vm.raptors);
        // vm.raptor = vm.raptors[$stateParams.id];
        // console.log(vm.raptor);
    }

})();
