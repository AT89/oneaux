
"use strict";

(function(){
    angular
        .module ( "dinosaur" )
        .factory ( "SpotifyFactory", [
            "$resource",
            SpotifyFactoryFunction
        ]);

    function SpotifyFactoryFunction ( $resource ) {
        return $resource( "https://api.spotify.com/v1/search?type=track&limit=5", {}, {
            'query':  {method:'GET', isArray:false}
        } );
    }


})();
