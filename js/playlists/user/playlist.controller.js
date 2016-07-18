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

    vm.addToPlaylist = function(new_song){
        console.log("hello")
    }
}






//End of IFFE
})();
