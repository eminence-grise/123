var myApp = angular.module('myApp');
myApp
	.service('myCart', ['$rootScope', function($rootScope){ // �������� �������
				var cart = this; 
				
				cart.list = []; // ������������� ������ �������
				
				cart.addItem = function(itemToAdd){
				  var existItems = cart.list.filter(function(itemInCart){
					return itemInCart.id == itemToAdd.id; 					//���������� ��������� � �������
				  })
				  <!--��������� ���� �� ������ � �������-->
				  if(existItems.length){  // ���� ���� ������ � ������� �� ������������� �� ����������
					existItems[0].count++;
				  } else {					// ����� ����������� ����� ����� � �������
					itemToAdd.count = 1;
					cart.list.push(itemToAdd);
				  }
				  
				  $rootScope.$emit('cartChanged', cart);
				}
				return cart;
			  }])