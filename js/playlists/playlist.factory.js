
"use strict";

(function(){
  angular
  .module ( "oneaux" )
  .factory ( "PlaylistFactory", [
    "$resource",
    PlaylistFactoryFunction
  ]);

  function PlaylistFactoryFunction ( $resource ) {
    return $resource( "http://localhost:3000/playlists/:id.json", {}, {
      update: {method: "PUT"}
    });
  }


})();
