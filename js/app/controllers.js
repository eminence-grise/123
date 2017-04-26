var myApp = angular.module('myApp'); // подключение модуля
myApp          
          .controller('MyController', ['$scope', 'myCart', function($scope, myCart){ // создание контроллера, подключение сервисов
              $scope.items = []; //создание пустого массива
              
              for(var i = 1; i < 11; i++){
                $scope.items.push({id: i, name: "Товар №" + i, cost: 100 * i}) // заполнение массива
              }
              
              $scope.addToCart = function(item){ //функция наролнения корзины
                myCart.addItem(item);
              }
          }])
          
          
          
