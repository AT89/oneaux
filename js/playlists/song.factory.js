
"use strict";

(function(){
  angular
  .module ( "oneaux" )
  .factory ( "SongFactory", [
    "$resource",
    "$stateParams",
    SongFactoryFunction
  ]);

    function SongFactoryFunction ( $resource, $stateParams ) {
        return $resource( "https://oneaux.herokuapp.com/playlists/:playlist_id/songs/:id.json", {}, {
            update: {method: "PUT"}
        });
    }


})();
