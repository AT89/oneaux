
"use strict";

(function() {
    angular
    .module("dinosaur")
    .controller("InviteController", [
        "SpotifyFactory",
        InviteControllerFunction
    ])

    function InviteControllerFunction (SpotifyFactory) {
        console.log("I'm in the invite controller!")
        var vm = this;

        vm.search = function(query) {
            vm.query = query;
            vm.songs = {};
            vm.results = [];
            vm.songs = SpotifyFactory.get({q: vm.query});
            // vm.tracks = vm.songs.tracks;
            console.log(vm.songs);

            // for each(track in vm.songs.tracks.items) {
            //     var result = {
            //         "title": track.name,
            //         "artist": track.artists[0].name,
            //         "album": track.album.name,
            //         "album_art": track.album.images[0],
            //         "duration": track.duration_ms,
            //         "preview_url": track.preview_url
            //     }
            //     vm.results.push(result);
            // }
        }
    }

})();
