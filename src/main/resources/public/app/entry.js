require('../scss/minta.scss');

var app = angular.module('mintaApp', ['ui.router']);
 
//SERVICES
app.service('UzenetService', require('./uzenet.service'));

//CONFIGURATION 
app.config(require('./routes.js'));

//START
app.run(['$state', function ($state) {
    $state.go("app.home");
}]);

