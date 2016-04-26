(function() {
    'use strict';

    angular.module('shopular')
      .controller('CategoryController', CategoryController);

      CategoryController.$inject = ['CategoryService'];
      function CategoryController(categories) {
        this.list = categories.get();

      }

})();
