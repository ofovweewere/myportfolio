//IIFE -- Immediately invoked function expression
"use strict";
(function(){

    function Start():void
    {
        console.log("app started");
    }

    window.addEventListener("load", Start);

})();