
"use strict";

(function() {
    angular
    .module("oneaux")
    .controller("ConfirmationController", [
        "PlaylistFactory",
        "$stateParams",
        ConfirmationControllerFunction
    ])

    function ConfirmationControllerFunction (PlaylistFactory, $stateParams) {
        console.log("I'm in the confirmation controller!")
        var vm = this;
        vm.new_playlist_id_key = $stateParams.playlist_id;
        console.log(vm.new_playlist_id_key);
        // vm.playlists = PlaylistFactory.query();
        // console.log(vm.playlists);

    }

})();
