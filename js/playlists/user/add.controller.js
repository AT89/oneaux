(function() {
    angular
    .module("oneaux")
    .controller("AddController", [
        "$state",
        "$stateParams",
        "SpotifyFactory",
        "SongFactory",
        AddControllerFunction
    ])

    function AddControllerFunction ($state, $stateParams, SpotifyFactory, SongFactory) {
      console.log("add controller!")

        var vm = this;
        vm.playlist_id = $stateParams.playlist_id;
        console.log(vm.playlist_id);

        vm.search = function(query) {
            vm.query = query;
            vm.songs = {};
            vm.results = [];
            vm.songs = SpotifyFactory.get({q: vm.query});
        }

        vm.add_song = function (title, artist, album, image_url, duration, preview) {
            console.log("clicked button");

            vm.new_song = new SongFactory({
                "user": "Anh",
                "playlist_id": vm.playlist_id,
                "title": title,
                "artist": artist,
                "album": album,
                "album_art": image_url,
                "duration": duration,
                "audio_url": preview,
                "score": 0
            })

            console.log(vm.new_song);
            vm.new_song.$save({playlist_id: vm.playlist_id}).then(function() {
                console.go("should redirect");
                $state.go("Add", {playlist_id: vm.playlist_id});
            })
        }
    }

})();
