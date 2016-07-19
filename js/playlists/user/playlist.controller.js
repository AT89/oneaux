(function(){
  angular
  .module("oneaux")
  .controller("CurrentPlaylistViewModel",[
    "SongFactory",
    "PlaylistFactory",
    "$stateParams",
    CurrentPlaylistFunction
  ])
  function CurrentPlaylistFunction(SongFactory,PlaylistFactory,$stateParams){
    var vm = this;
    vm.playlist_id = $stateParams.id;
    vm.songs = SongFactory.query({playlist_id: vm.playlist_id});
    console.dir(vm.songs);
    console.log(vm.playlist_id)

  }


  //End of IFFE
})();
