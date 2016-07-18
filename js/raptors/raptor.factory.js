
"use strict";

(function(){
    angular
        .module ( "dinosaur" )
        .factory ( "RaptorFactory", [
            "$resource",
            RaptorFactoryFunction
        ]);

    function RaptorFactoryFunction ( $resource ) {
        return $resource( "http://localhost:3000/dactyls/:id.json", {}, {
            update: {method: "PUT"}
        });
    }


})();
