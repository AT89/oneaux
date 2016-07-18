
"use strict";

(function() {
    angular.module ("oneaux", [
            "ui.router",
            "ngAnimate",
            "ngResource",
            "playlists"
        ])
        .config ([
          "$stateProvider",
          RouterFunction
        ])

        function RouterFunction($stateProvider) {
          $stateProvider
          .state("Home", {
            url: "/",
            templateUrl: "js/playlists/index.html",
            controller: "HomeController",
            controllerAs: "HomeViewModel"
          })
          .state("About", {
            url: "/about",
            templateUrl: "js/playlists/about.html",
            controller: "AboutController",
            controllerAs: "AboutViewModel"
          })
          .state("Join",{
            url:"/join",
            templateUrl:"js/playlists/user/join.html",
            controller: "JoinController",
            controllerAs: "JoinViewModel"
          })
          .state("Add",{
            url:"/add",
            templateUrl:"js/playlists/user/add.html",
            controller:"AddController",
            controllerAs: "AddViewModel",
          })
          .state("Create", {
            url: "/create",
            templateUrl: "js/playlists/host/create.html",
            controller: "CreateController",
            controllerAs: "CreateViewModel"
          })
          .state("Edit", {
            url: "/edit",
            templateUrl: "js/playlists/host/edit.html",
            controller: "EditController",
            controllerAs: "EditViewModel"
          })
          .state("Confirmation", {
            url: "/confirmation",
            templateUrl: "js/playlists/host/confirmation.html",
            controller: "ConfirmationController",
            controllerAs: "ConfirmationViewModel",
            params: { "playlist_id": null, }
          })
          .state("Invite", {
            url: "/invite",
            templateUrl: "js/playlists/host/invite.html",
            controller: "InviteController",
            controllerAs: "InviteViewModel",
            params: { "playlist_id": null, }
          })
          .state("AdminPlist", {
            url: "/admin/playlist/:id",
            templateUrl: "js/playlists/host/admin_plist.html",
            controller: "AdminPlistController",
            controllerAs: "AdminPlistViewModel"
          })
          .state("CurrentPlaylist",{
              url:"/current",
              templateUrl: "js/playlists/user/playlist.html",
              controller: "CurrentPlaylistViewModel",
              controllerAs: "CurrentPlaylist"
            })


        }





// END OF IIFE
})();
