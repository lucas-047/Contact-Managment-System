// app.js


angular.module("ContactApp").controller("ContactController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $scope.newContact = {};
    $scope.contacts = [];
    $scope.tcontaacts = [];
    $scope.currentPage = 0;
    $scope.totalPages;
    // Get contacts
    $http
      .get("http://localhost:3001/api/contacts")
      .then(function (response) {
        $scope.contacts = response.data;
        $scope.totalPages = Math.ceil($scope.contacts.length / 3)
        console.log($scope.totalPages);
       tempDatafill();
        // contactsDetails = response.data;
      })
      .catch(function (error) {
        console.error("Error fetching contacts:", error);
      });
      function tempDatafill(){
        $scope.startIndex = 10 * $scope.currentPage;
        $scope.endIndex = $scope.startIndex + 10;
        $scope.tcontacts = [...$scope.contacts.slice($scope.startIndex,$scope.endIndex)]
        console.log($scope.tcontacts);
      }
    // Add contact
    $scope.addContact = function () {
      $http
        .post("http://localhost:3001/api/contacts", $scope.newContact)
        .then(function (response) {
          $scope.contacts.push(response.data);
          $scope.newContact = {};
        })
        .catch(function (error) {
          console.error("Error adding contact:", error);
        });
    };

    $scope.deleteContact = function () {
      console.log($scope.name);
      $http
        .post("http://localhost:3001/api/contacts/delete", $scope.newContact)
        .then(function (response) {
          console.log("DATA", response.data);
          $scope.contacts = response.data;
          $scope.newContact = {};
        });
    };

    
    
    $scope.searchContact = function () {
      $http
        .post("http://localhost:3001/api/contacts/search", $scope.newContact)
        .then(function (response) {
          console.log("DATA", response.data);
          $scope.contacts = [response.data];
          $scope.newContact = {};
        });

    };
    $scope.increment = function (){
        if ($scope.currentPage < $scope.totalPages) {
          $scope.currentPage++;
          tempDatafill();
        }
        console.log("called i i");
      };
      $scope.decrement = function (){
        if ($scope.currentPage > 0) {
          $scope.currentPage--;
          tempDatafill();
        }
        console.log("called d i");
    };
      
  },
]);
