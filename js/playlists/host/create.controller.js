
"use strict";

(function() {
    angular
    .module("oneaux")
    .controller("CreateController", [
        "PlaylistFactory",
        "$state",
        "$stateParams",
        "Spotify",
        CreateControllerFunction
    ])

    function CreateControllerFunction (PlaylistFactory, $state, $stateParams, Spotify) {
        console.log("I'm in the create controller!")
        var vm = this;
        vm.login_check = 0;

        vm.login = function () {
            Spotify.login();
            vm.access_token = localStorage.getItem('spotify-token');
            console.log(vm.access_token);
            vm.login_check = 1;
        };

        vm.create = function (name, access_code, songs_per_user, location) {
            Spotify.getCurrentUser().then(function(response){
                vm.user_id = response.id;
                console.log(vm.user_id);
                Spotify.createPlaylist(vm.user_id, { name: name })
                .then(function (response) {
                    vm.spotify_playlist_id = response.id;
                    vm.new_playlist = new PlaylistFactory();
                    vm.new_playlist.name = name;
                    vm.new_playlist.access_code = access_code;
                    vm.new_playlist.songs_per_user = songs_per_user;
                    vm.new_playlist.location = location;
                    vm.new_playlist.access_token = vm.access_token;
                    vm.new_playlist.spotify_user_id = vm.user_id;
                    vm.new_playlist.spotify_playlist_id = vm.spotify_playlist_id;
                    vm.new_playlist.$save().then(function() {
                        vm.new_playlist_id_key = vm.new_playlist.id;
                        vm.new_playlist = {};
                        $state.go("Confirmation", {playlist_id: vm.new_playlist_id_key});
                    })
                })
            })
        }
    }
    
})();
