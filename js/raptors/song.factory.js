
"use strict";

(function(){
    angular
        .module ( "dinosaur" )
        .factory ( "SongFactory", [
            "$resource",
            SongFactoryFunction
        ]);

    function SongFactoryFunction ( $resource ) {
        return $resource( "http://localhost:3000/dactyls/:id.json", {}, {
            update: {method: "PUT"}
        });
    }


})();
