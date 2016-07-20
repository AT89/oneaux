(function() {
  angular
  .module("oneaux")
  .controller("AddController", [
    "$state",
    "$stateParams",
    "SpotifyFactory",
    "SongFactory",
    "PlaylistFactory",
    "Spotify",
    "$http",
    AddControllerFunction
  ])

  function AddControllerFunction ($state, $stateParams, SpotifyFactory, SongFactory, PlaylistFactory, Spotify, $http) {
    console.log("add controller!")

    var vm = this;
    vm.playlist_id = $stateParams.playlist_id;
    PlaylistFactory.get({id: vm.playlist_id}).$promise.then(function(response) {
        vm.playlist = response;
    })


    vm.search = function(query) {
      vm.query = query;
      vm.songs = {};
      vm.results = [];
      vm.songs = SpotifyFactory.get({q: vm.query});
    }

    vm.add_song = function (title, artist, album, image_url, duration, preview, uri) {
        console.log(vm.playlist.spotify_playlist_id);
        console.log(vm.playlist.access_token);
        // Spotify.addPlaylistTracks(vm.playlist.spotify_user_id, vm.playlist.spotify_playlist_id, uri, vm.playlist.access_token);

        $http({
          method: "POST",
          url: "https://api.spotify.com/v1/users/"+vm.playlist.spotify_user_id+"/playlists/"+vm.playlist.spotify_playlist_id+"/tracks?uris="+uri,
          headers: {
              "Accept": "application/json",
              "Authorization": "Bearer "+vm.playlist.access_token
          }
        }).then(function successCallback(response) {
            console.log(response);
          }, function errorCallback(response) {
            console.log(response);
          });



      vm.new_song = new SongFactory({
        "user": "Anh",
        "playlist_id": vm.playlist_id,
        "title": title,
        "artist": artist,
        "album": album,
        "album_art": image_url,
        "duration": duration,
        "audio_url": preview,
        "score": 0,
        "uri": uri
      })

      console.log(vm.new_song);
      vm.new_song.$save({playlist_id: vm.playlist_id}).then(function() {
        console.log("should redirect");
        $state.go("Add", {playlist_id: vm.playlist_id});
      })
    }
  }

})();
