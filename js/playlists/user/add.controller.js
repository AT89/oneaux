(function() {
    angular
    .module("oneaux")
    .controller("AddController", [
        "SpotifyFactory",
        AddControllerFunction
    ])
    function AddControllerFunction (SpotifyFactory) {
        console.log("add controller!")
        var vm = this;

        vm.search = function(query) {
            vm.query = query;
            vm.songs = {};
            vm.results = [];
            vm.songs = SpotifyFactory.get({q: vm.query});
        }

        vm.add_song = function (title, artist, album, image_url, duration, preview) {
            console.log("clicked button");
            var new_song = {
                // "user": vm.{{track.name}},
                "title": title,
                "artist": artist,
                "album": album,
                "album_art": image_url,
                "duration": duration,
                "audio_url": preview,
                "score": 0
            }
            console.log(new_song);
          
        }
    }

})();
