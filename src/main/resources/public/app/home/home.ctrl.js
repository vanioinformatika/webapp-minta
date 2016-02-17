module.exports = function ($log, UzenetService) {
    var home = this;
    
    home.uzenet = '';
    home.uzenetek = UzenetService.getUzenetek();

    var uzenetekBetoltese = function() {
        UzenetService.uzenetBetoltes()
            .then(function() {
                console.log("betöltés, status: " + home.uzenetek.status);
            });
    };
    
    uzenetekBetoltese();
    
    /** Eseménykezelő: üzenetlista frissítése */
    home.frissites = function() {
        $log.debug("Frissítés");
        uzenetekBetoltese();
    };
        
};