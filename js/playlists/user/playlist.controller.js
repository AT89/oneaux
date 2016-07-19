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

    // vm.get_song = new SongFactory({
    //   "user": "Anh",
    //   "playlist_id": vm.playlist_id,
    //   "title": title,
    //   "artist": artist,
    //   "album": album,
    //   "album_art": image_url,
    //   "duration": duration,
    //   "audio_url": preview,
    //   "score": 0
    // });
    // vm.addToPlaylist = function(new_song){
    //     console.log("hello")
    // }
}






//End of IFFE
})();
