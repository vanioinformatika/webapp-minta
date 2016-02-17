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
                template: require('./home/home.tpl.html')
            })
            .state('app.admin', {
                controller: require('./admin/admin.ctrl.js'),
                controllerAs:  'admin',
                template: require('./admin/admin.tpl.html')
            });
};

