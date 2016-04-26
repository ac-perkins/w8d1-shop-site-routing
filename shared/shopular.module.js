(function() {
    'use strict';

    angular.module('shopular', ['ui.router'])
        .config(shopConfig);

    shopConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function shopConfig( $stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home/home.html',
          controller: 'HomeController',
          controllerAs: 'hc'
        })
        .state('categories', {
          url: '/category',
          templateUrl: 'category/category.html',
          controller: 'CategoryController',
          controllerAs: 'categories'
        })
        .state('categories.itemList', {
          url: '/:id',
          templateUrl: 'category/category-item-list.html',
          controller: 'CategoryItemsController',
          controllerAs: 'cic'
        })
        .state('item', {
          url: '/item',
          templateUrl: 'item/item-detail.html',
          controller: 'ItemController',
          controllerAs: 'ic'
        })
        .state('cart', {
          url: '/cart',
          templateUrl: 'cart/cart.html',
          controller: 'CartController',
          controllerAs: 'cc'
        })
        .state('search', {
          url: '/search',
          templateUrl: 'search/search.html',
          controller: 'SearchController',
          controllerAs: 'sc'
        });

    }

})();
