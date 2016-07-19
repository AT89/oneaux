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
    vm.songs = SongFactory.query({playlist_id: vm.playlist_id});
    console.log(vm.songs);
    
    vm.playlist_id = $stateParams.id;

    vm.addToPlaylist = function(new_song){
        console.log("hello")
    }
}






//End of IFFE
})();
