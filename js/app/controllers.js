var myApp = angular.module('myApp'); // ����������� ������
myApp          
          .controller('MyController', ['$scope', 'myCart', function($scope, myCart){ // �������� �����������, ����������� ��������
              $scope.items = []; //�������� ������� �������
              
              for(var i = 1; i < 11; i++){
                $scope.items.push({id: i, name: "����� �" + i, cost: 100 * i}) // ���������� �������
              }
              
              $scope.addToCart = function(item){ //������� ���������� �������
                myCart.addItem(item);
              }
          }])
          
          
          
