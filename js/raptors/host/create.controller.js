
"use strict";

(function() {
    angular
    .module("dinosaur")
    .controller("CreateController", [
        "RaptorFactory",
        "$state",
        "$stateParams",
        CreateControllerFunction
    ])

    function CreateControllerFunction (RaptorFactory, $state, $stateParams) {
        console.log("I'm in the create controller!")
        var vm = this;
        vm.raptors = RaptorFactory.query();
        console.log(vm.raptors);
        vm.new_raptor = new RaptorFactory();

        vm.create = function(){
            vm.new_raptor.$save().then(function() {
                vm.new_raptor_id_key = vm.new_raptor.id;
                vm.new_raptor = {};
                $state.go("Confirmation", {raptor_id: vm.new_raptor_id_key});
            })
        }
    }

})();
