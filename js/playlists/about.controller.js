"use strict";

(function() {
  angular
  .module("oneaux")
  .controller("AboutController", [
    AboutControllerFunction
  ])

  function AboutControllerFunction () {
    console.log("I'm in the about controller!")
    var vm = this;

  }

})();
