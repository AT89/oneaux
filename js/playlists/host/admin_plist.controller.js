
"use strict";

(function() {
    angular
    .module("oneaux")
    .controller("AdminPlistController", [
        "PlaylistFactory",
        "SongFactory",
        "$state",
        "$stateParams",
        "Spotify",
        "$http",
        "$sce",
        AdminPlistControllerFunction
    ])

    function AdminPlistControllerFunction (PlaylistFactory, SongFactory, $state, $stateParams, Spotify, $http, $sce) {
        console.log("I'm in the admin playlist controller!")
        console.log($stateParams.id);
        var vm = this;
        PlaylistFactory.get({id: $stateParams.id}).$promise.then(function(response) {
            console.log(response);
            vm.playlist = response;
            console.log(vm.playlist.spotify_user_id);
            console.log(vm.playlist.spotify_playlist_id);
            vm.play_song = $sce.trustAsHtml("<iframe src='https://embed.spotify.com/?uri=spotify:user:"+vm.playlist.spotify_user_id+":playlist:"+vm.playlist.spotify_playlist_id+"' width='300' height='380' frameborder='0' allowtransparency='true'></iframe>");
        });
        vm.songs = SongFactory.query({playlist_id: $stateParams.id});
        console.log(vm.songs);
        vm.playlist_counter = 2;

        // vm.playlistSort = function () {
        //     console.log(vm.playlist_counter);
        //     $http({
        //       method: "PUT",
        //       url: "https://api.spotify.com/v1/users/"+vm.playlist.spotify_user_id+"/playlists/"+vm.playlist.spotify_playlist_id+"/tracks",
        //       headers: {
        //           "Accept": "application/json",
        //           "Authorization": "Bearer "+vm.playlist.access_token
        //       },
        //       data {
        //           "range_start": 3,
        //           "range_length": 1,
        //           "insert_before": vm.playlist_counter
        //       }
        //     }).then(function successCallback(response) {
        //         console.log(response);
        //       }, function errorCallback(response) {
        //         console.log(response);
        //       });
        // }

        vm.refresh_token = function () {
            console.log(vm.playlist.access_token);
            Spotify.login();
            vm.access_token = localStorage.getItem('spotify-token');
            vm.playlist.access_token = vm.access_token;
            console.log(vm.playlist.access_token);
            vm.playlist.$update({id: vm.playlist.id});
        }

        vm.update_score = function (song, net) {
            console.log(song.id);
            song.score = parseInt(parseInt(song.score) + parseInt(net));
            console.log(song.score);
            song.$update({playlist_id: $stateParams.id, id: song.id})
            .then(function(){

            })

        }

    }

})();
