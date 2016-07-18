(function() {
    angular
    .module("dinosaur")
    .controller("AddController", [
        "SpotifyFactory",
        AddControllerFunction
    ])
    function AddControllerFunction (SpotifyFactory) {
        console.log("I'm in the invite controller!")
        var vm = this;

        vm.search = function(query) {
            vm.query = query;
            vm.songs = {};
            vm.results = [];
            vm.songs = SpotifyFactory.get({q: vm.query});


        }
    }

})();
