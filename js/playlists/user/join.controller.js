angular.module("oneaux")
.controller("JoinController",[
  "$state",
  "PlaylistFactory",
  JoinControllerFunction
])

function JoinControllerFunction($state, PlaylistFactory){
  var vm = this;
  vm.join_plist = function(code) {

    console.log(code);
    PlaylistFactory.query().$promise.then(function (playlists) {
      vm.playlists = playlists;
      for (i=0; i< vm.playlists.length; i++) {
        if (vm.playlists[i].access_code === code) {
          vm.playlist = vm.playlists[i];
          console.log(vm.playlist.id);
          $state.go("Add", {playlist_id: vm.playlist.id})
        }
      };
    });
  }
}
