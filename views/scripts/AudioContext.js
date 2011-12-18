var SEAudioContext = (function(){
    function AudioContext() {
        //do stuff
    }
    var instance;
    return {
        getInstance: function(){
            if (instance == null) {
                instance = new webkitAudioContext();
                // Hide the constructor so the returned objected can't be new'd...
                instance.constructor = null;
            }
            return instance;
        }
   };
})();

var SingleAudiolet = (function(){
    var instance;
    return {
        getInstance: function(){
            if (instance == null) {
                instance = new Audiolet();
                // Hide the constructor so the returned objected can't be new'd...
                instance.constructor = null;
            }
            return instance;
        }
   };
})();
