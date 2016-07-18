(function(){
angular
  .module("oneaux")
  .controller("CurrentPlaylistViewModel",[
    "SongFactory",
    CurrentPlaylistFunction
  ])
function CurrentPlaylistFunction(SongFactory,PlaylistFactory,$stateParams){
    var vm = this;

    vm.addToPlaylist = function(new_song){
        console.log("hello")
    }
}






//End of IFFE
})();
