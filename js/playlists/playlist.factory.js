
"use strict";

(function(){
  angular
  .module ( "oneaux" )
  .factory ( "PlaylistFactory", [
    "$resource",
    PlaylistFactoryFunction
  ]);

  function PlaylistFactoryFunction ( $resource ) {
    return $resource( "https://dry-citadel-69831.herokuapp.com/playlists/:id.json", {}, {
      update: {method: "PUT"}
    });
  }


})();
