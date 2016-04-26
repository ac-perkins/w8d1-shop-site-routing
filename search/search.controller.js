(function() {
    'use strict';

    angular.module('shopular')
      .controller('SearchController', SearchController);

      function SearchController(){

        this.searchResults = ['taipei', 'tokyo', 'seoul'];

      }

})();
