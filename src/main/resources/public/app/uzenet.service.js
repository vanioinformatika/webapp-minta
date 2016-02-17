module.exports = function($http, $q, $log) {
        
    /** Üzenetek */
    var uzenetek = {
        status: 0,
        uzenetLista: []
    };
    
    /**
     * Üzenetek betöltése
     */ 
    this.uzenetBetoltes = function() {
        var deferred = $q.defer();
        $http
            .get('/api/uzenetek')
            .then(function(response) {
                $log.debug("Üzenetek betöltve");
                uzenetek.uzenetLista = response.data;
                uzenetek.status = response.status;
                deferred.resolve();
             })
            .catch(function() {
                deferred.reject();
            });
        return deferred.promise;
    };
        
    /**
     * Üzenet létrehozása
     * @param {string} uzenet Az üzenet
     */ 
    this.uzenetLetrehozas = function(uzenet) {
        var deferred = $q.defer();
        $http
            .post('/api/uzenetek', uzenet)
            .then(function(response) {
                $log.debug("Üzenet létrehozva");
                uzenetek.uzenetLista = response.data;
                uzenetek.status = response.status;
                deferred.resolve();
             })
            .catch(function() {
                deferred.reject();
            });
        return deferred.promise;
    };
    
    /**
     * Üzenet létrehozása
     * @param {string} uzenet Az üzenet
     */ 
    this.uzenetekTorlese = function() {
        var deferred = $q.defer();
        $http
            .delete('/api/uzenetek')
            .then(function(response) {
                $log.debug("Üzenetek törölve");
                uzenetek.uzenetLista = response.data;
                uzenetek.status = response.status;
                deferred.resolve();
             })
            .catch(function() {
                deferred.reject();
            });
        return deferred.promise;
    };
        
    /**
     * A lekerdezett es eltárolt üzeneteket adja vissza
     * @returns {tevekenyseg}
     */
    this.getUzenetek = function() {
        return uzenetek;
    };
    
};
