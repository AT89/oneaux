
"use strict";

(function() {
    angular
    .module("oneaux")
    .controller("InviteController", [
        "SpotifyFactory",
        InviteControllerFunction
    ])

    function InviteControllerFunction (SpotifyFactory) {
        console.log("I'm in the invite controller!")
        var vm = this;
    }

})();
