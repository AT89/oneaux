angular.module("oneaux")
.controller("JoinController",[
  "$state",
  "PlaylistFactory",
  JoinControllerFunction
])

function JoinControllerFunction($state, PlaylistFactory){
  var vm = this;
  localStorage.setItem('user-song-count', 0);
  console.log(localStorage.getItem('user-song-count'));

  vm.join_plist = function(name, code) {
    PlaylistFactory.query().$promise.then(function (playlists) {
      vm.playlists = playlists;
      for (i=0; i< vm.playlists.length; i++) {
        if (vm.playlists[i].access_code === code) {
          vm.playlist = vm.playlists[i];
          localStorage.setItem('username', name);
          localStorage.setItem('playlist-token', vm.playlist.id);
          $state.go("Add", {playlist_id: vm.playlist.id, user: name})
        }
      };
    });
  }
}
