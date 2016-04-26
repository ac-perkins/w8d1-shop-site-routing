(function() {
    'use strict';

    angular.module('shopular')
        .controller('CategoryItemsController', CategoryItemsController);

    CategoryItemsController.$inject = ['$stateParams', 'CategoryService'];

    function CategoryItemsController($stateParams, categories) {
        this.detail = categories.get( $stateParams.id );
        console.log(this.detail);
    }

})();
