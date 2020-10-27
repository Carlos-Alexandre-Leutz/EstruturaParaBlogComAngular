app.config(function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
        templateUrl: '/app/views/artigosRecentes/artigosRecentes0.html',
        controller: 'HomeCtrl',
    })

    .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl',
    })

    .when('/contact', {
            templateUrl: 'app/views/contact.html',
            controller: 'ContactCtrl',
        })
        //paginação
        .when('/artigosRecentes0', {
            templateUrl: '/app/views/artigosRecentes/artigosRecentes0.html',
            controller: 'ArtigosRecentesCtrl',
        })

    .when('/artigosRecentes1', {
            templateUrl: '/app/views/artigosRecentes/artigosRecentes1.html',
            controller: 'ArtigosRecentesCtrl',
        })
        //fim da paginação
        //posts
        .when('/post0', {
            templateUrl: '/app/views/posts/post0.html',
            controller: 'PostCtrl',
        })

    .when('/post1', {
            templateUrl: '/app/views/posts/post1.html',
            controller: 'PostCtrl',
        })
        .when('/post2', {
            templateUrl: '/app/views/posts/post2.html',
            controller: 'PostCtrl',
        })
        //fim dos posts



    .otherwise({ redirectTo: '/' });
});