var fs = require('fs');

module.exports = function ($stateProvider) {
    $stateProvider
            .state('app', {
                abstract: true,
                template: '<div ui-view/>',
                data: {
                    redirectTo: 'app.home'
                }
            })
            .state('app.home', {
                controller: require('./home/home.ctrl.js'),
                controllerAs:  'home',
                template: fs.readFileSync(__dirname + '/home/home.tpl.html', 'UTF-8')
            })
            .state('app.admin', {
                controller: require('./admin/admin.ctrl.js'),
                controllerAs:  'admin',
                template: fs.readFileSync(__dirname + '/admin/admin.tpl.html', 'UTF-8')
            });
};

