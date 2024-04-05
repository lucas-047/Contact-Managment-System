// var app = angular.module('ContactApp');
// app.controller('ContactController', function($scope) {
    
//     // Pagination logic
//     $scope.pageSize = 5; // Number of contacts per page
//     $scope.currentPage = 1;
//     $scope.pages = [];

//     $scope.updatePagination = function() {
//         $scope.pages = [];
//         var pageCount = Math.ceil($scope.contacts.length / $scope.pageSize);
//         for (var i = 1; i <= pageCount; i++) {
//             $scope.pages.push(i);
//         }
//     };

//     $scope.setPage = function(page) {
//         $scope.currentPage = page;
//     };

//     $scope.$watch('currentPage', function(newValue, oldValue) {
//         var startIndex = (newValue - 1) * $scope.pageSize;
//         var endIndex = startIndex + $scope.pageSize;
//         $scope.displayedContacts = $scope.contacts.slice(startIndex, endIndex);
//     });

//     // Initialize pagination
//     $scope.updatePagination();
// });