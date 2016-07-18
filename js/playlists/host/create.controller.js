
"use strict";

(function() {
    angular
    .module("oneaux")
    .controller("CreateController", [
        "PlaylistFactory",
        "$state",
        "$stateParams",
        CreateControllerFunction
    ])

    function CreateControllerFunction (PlaylistFactory, $state, $stateParams) {
        console.log("I'm in the create controller!")
        var vm = this;
        vm.playlists = PlaylistFactory.query();
        console.log(vm.playlists);
        vm.new_playlist = new PlaylistFactory();

        vm.create = function(){
            vm.new_playlist.$save().then(function() {
                vm.new_playlist_id_key = vm.new_playlist.id;
                vm.new_playlist = {};
                $state.go("Confirmation", {playlist_id: vm.new_playlist_id_key});
            })
        }
    }

})();
