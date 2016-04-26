(function() {
    'use strict';

    angular.module('shopular')
      .controller('CartController', CartController);

      function CartController(){

        this.searchResults = ['checkers', 'chess', 'go'];

      }

})();
