
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
        "$scope",
        "$interval",
        AdminPlistControllerFunction
    ])

    function AdminPlistControllerFunction (PlaylistFactory, SongFactory, $state, $stateParams, Spotify, $http, $sce,$scope,$interval) {
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


        vm.playlistSort = function () {
            vm.list_of_scores = [];
            for (var i = 0; i < vm.songs.length; i++) {
                vm.list_of_scores.push(vm.songs[i].score);
            }
            vm.max_score = Math.max(...vm.list_of_scores);
            vm.next_song = vm.songs.filter(function( obj ) {
               console.log(vm.max_score);
               return obj.score == vm.max_score;
            })
            console.log(vm.next_song);
            console.log(vm.next_song[0].uri);
            console.log(vm.playlist.access_token);
            $http({
              method: "POST",
              url: "https://api.spotify.com/v1/users/"+vm.playlist.spotify_user_id+"/playlists/"+vm.playlist.spotify_playlist_id+"/tracks?uris="+vm.next_song[0].uri,
              headers: {
                  "Accept": "application/json",
                  "Authorization": "Bearer "+vm.playlist.access_token
              }
            })
            .then(function successCallback(response) {
                console.log(response);
              }, function errorCallback(response) {
                console.log(response);
            });
        }

            // vm.next_song_uri =
            // $http({
            //   method: "POST",
            //   url: "https://api.spotify.com/v1/users/"+vm.playlist.spotify_user_id+"/playlists/"+vm.playlist.spotify_playlist_id+"/tracks?uris="+vm.next_song_uri,
            //   headers: {
            //       "Accept": "application/json",
            //       "Authorization": "Bearer "+vm.playlist.access_token
            //   }
            // }).then(function successCallback(response) {
            //     console.log(response);
            //   }, function errorCallback(response) {
            //     console.log(response);
            //   });



        vm.refresh_token = function () {
            console.log(vm.playlist.access_token);
            Spotify.login();
            vm.access_token = localStorage.getItem('spotify-token');
            vm.playlist.access_token = vm.access_token;
            console.log(vm.playlist.access_token);
            vm.playlist.$update({id: vm.playlist.id});
        }

        vm.update_score = function (song, net) {
            song.score = parseInt(parseInt(song.score) + parseInt(net));
            song.$update({playlist_id: $stateParams.id, id: song.id})
            .then(function(){

            })

        }
/// function starts for timer
      var c=60;
      $scope.message="You have "+c+" seconds to vote on the next song.";
      var timer=$interval (function{
        $scope.message="You have "+c+" seconds to vote on the next song.";
        c--;
        console.log(c);
        if(c==0){
          vm.playlistSort();
        }
      },1000);






    }

})();
