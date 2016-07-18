
"use strict";

(function() {
    angular.module ("dinosaur", [
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
<<<<<<< HEAD
          .state("Join",{
            url:"/join",
            templateUrl:"js/raptors/user/join.html",
            controller: "JoinController",
            controllerAs: "JoinViewModel"
          })
          .state("addsongs",{
            url:"/add",
            templateUrl:"js/raptors/user/add.html",
            controller:"AddController",
            // controllerAs: "AddViewModel"
=======
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
            controllerAs: "ConfirmationViewModel",
            params: { "raptor_id": null, }
          })
          .state("Invite", {
            url: "/invite",
            templateUrl: "js/raptors/host/invite.html",
            controller: "InviteController",
            controllerAs: "InviteViewModel",
            params: { "raptor_id": null, }
          })
          .state("AdminPlist", {
            url: "/admin/playlist/:id",
            templateUrl: "js/raptors/host/admin_plist.html",
            controller: "AdminPlistController",
            controllerAs: "AdminPlistViewModel"
>>>>>>> 13459c72c473d1ae97e740647547bf7d780a6e8a
          });

        }





// END OF IIFE
})();
