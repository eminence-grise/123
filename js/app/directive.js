var myApp = angular.module('myApp');
myApp
          .directive('renderCart', ['$rootScope', function($rootScope){
              return {
                restrict: 'E', //���������� ��������� � ��������
                template: '<h2>�������:</h2>' +
                '<ul><li ng-repeat="cart_item in cart.list">{{cart_item.name}} - {{cart_item.count}} ��.</li></ul>',
                link: function($scope, elem, attrs){
                
                  $rootScope.$on('cartChanged', function(event, cart){  //�������� �������
                    $scope.cart = cart;
                  });
                }
              }
            }])