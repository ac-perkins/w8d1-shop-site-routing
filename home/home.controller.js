(function() {
    'use strict';

    angular.module('shopular')
      .controller('HomeController', HomeController);

      HomeController.$inject = ['$state'];
      function HomeController($state){

        this.search = function search() {
          $state.go('search');
        };

      }

})();
