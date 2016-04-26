(function() {
    'use strict';

    angular.module('shopular')
        .factory('CategoryService', CategoryService);

    function CategoryService() {
        return {
            get: function(id) {
                var data = [
                  {
                    category: 'one',
                    items: ['red', 'blue', 'green']
                  },
                  {
                    category: 'two',
                    items: ['yellow', 'orange', 'pink']
                  },
                  {
                    category: 'three',
                    items: ['black', 'white', 'grey']
                  }
                ];

                if (id) {
                    return data[id];
                } else {
                    return data;
                }
            }
        };
    }

})();
