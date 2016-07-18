
"use strict";

(function() {
    angular
        .module ("dinosaur", [
            "ui.router",
            "ngAnimate",
            "ngResource",
            "raptors"
        ])
        .config ([
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
          })
          .state("Create", {
            url: "/create",
            templateUrl: "js/raptors/host/create.html",
            controller: "CreateController",
            controllerAs: "CreateViewModel"
          })
          .state("Edit", {
            url: "/edit",
            templateUrl: "js/raptors/host/edit.html",
            controller: "EditController",
            controllerAs: "EditViewModel"
          })
          .state("Confirmation", {
            url: "/confirmation",
            templateUrl: "js/raptors/host/confirmation.html",
            controller: "ConfirmationController",
            controllerAs: "ConfirmationViewModel"
          })
          .state("Invite", {
            url: "/invite",
            templateUrl: "js/raptors/host/invite.html",
            controller: "InviteController",
            controllerAs: "InviteViewModel"
          })
          .state("AdminPlist", {
            url: "/admin/playlist",
            templateUrl: "js/raptors/host/admin_plist.html",
            controller: "AdminPlistController",
            controllerAs: "AdminPlistViewModel"
          });
        }





// END OF IIFE
})();
