var app = angular.module('ContactApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/contact-list.html',
            
        })
        .when('/add-contact', {
            templateUrl: 'views/add-contact.html',
            
        })
        .when('/edit-contact/', {
            templateUrl: 'views/edit-contact.html',
           
        })
        .when('/delete-contact/', {
            templateUrl: 'views/delete-contact.html',
            
        })
        .when('/search-contact/',{
            templateUrl: 'views/search-contact.html',
           
        })
        .when('/update-contact/',{
            templateUrl: 'views/update-contact.html',
           
        })
        .otherwise({
            redirect : '/'
        });
});
