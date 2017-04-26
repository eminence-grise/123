var myApp = angular.module('myApp');
myApp
          .directive('renderCart', ['$rootScope', function($rootScope){
              return {
                restrict: 'E', //применение директивы к элементу
                template: '<h2>Корзина:</h2>' +
                '<ul><li ng-repeat="cart_item in cart.list">{{cart_item.name}} - {{cart_item.count}} шт.</li></ul>',
                link: function($scope, elem, attrs){
                
                  $rootScope.$on('cartChanged', function(event, cart){  //перехват события
                    $scope.cart = cart;
                  });
                }
              }
            }])