
"use strict";

(function() {
    angular
    .module("oneaux")
    .controller("AdminPlistController", [
        "PlaylistFactory",
        "$state",
        "$stateParams",
        AdminPlistControllerFunction
    ])

    function AdminPlistControllerFunction (PlaylistFactory, $state, $stateParams) {
        console.log("I'm in the admin playlist controller!")
        console.log($stateParams.id);
        var vm = this;
        vm.playlist = PlaylistFactory.get({id: $stateParams.id});
        console.log(this.playlist);
        // vm.playlists = PlaylistFactory.query();
        // console.log(vm.playlists);
        // vm.playlist = vm.playlists[$stateParams.id];
        // console.log(vm.playlist);
    }

})();
