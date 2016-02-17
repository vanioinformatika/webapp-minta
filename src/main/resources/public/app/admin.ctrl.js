module.exports = function ($log, UzenetService) {
    
    var admin = this;
    
    admin.uzenetek = UzenetService.getUzenetek();
    admin.uzenet = '';
    
    UzenetService.uzenetBetoltes()
            .then(function() {
                console.log("betöltés, status: " + admin.uzenetek.status);
            });
    
    /** Eseménykezelő: új üzenet létrehozása */
    admin.uzenetLetrehozas = function() {
        UzenetService.uzenetLetrehozas(admin.uzenet)
            .then(function() {
                $log.debug('Új üzenet hozzáadása rendben');
                admin.uzenet = '';
            });
    };
    
    /** Eseménykezelő: összes üzenet törlése */
    admin.uzenetekTorlese = function() {
        UzenetService.uzenetekTorlese()
            .then(function() {
                $log.debug('Az üzenetek törlése rendben');
            });
    };
    
};