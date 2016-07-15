
"use strict";

(function() {
    angular
        .module ("dinosaur", [
            "ui.router",
            "ngAnimate",
            "ngResource",
            "raptors"
        ])
        .config([
          "$stateProvider",
          RouterFunction
        ])

        function RouterFunction($stateProvider) {
          $stateProvider
          .state("Home", {
            url: "/",
            templateUrl: "js/raptors/index.html",
            controller: "HomeController",
            controllerAs: "HomeViewModel"
          })
          .state("About", {
            url: "/about",
            templateUrl: "js/raptors/about.html",
            controller: "AboutController",
            controllerAs: "AboutViewModel"
          });
        }





// END OF IIFE
})();
