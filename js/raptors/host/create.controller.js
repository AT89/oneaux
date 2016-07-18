
"use strict";

(function() {
    angular
    .module("dinosaur")
    .controller("CreateController", [
        "RaptorFactory",
        "$state",
        CreateControllerFunction
    ])

    function CreateControllerFunction (RaptorFactory, $state) {
        console.log("I'm in the create controller!")
        var vm = this;
        vm.raptors = RaptorFactory.query();
        console.log(vm.raptors);
        vm.new_raptor = new RaptorFactory();

        vm.create = function(){
            console.log("first save check");
            vm.new_raptor.$save().then(function() {
                vm.new_raptor = {};
                console.log("should have created");
                $state.go("Confirmation");
            })
        }
    }

})();
