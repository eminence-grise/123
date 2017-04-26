var myApp = angular.module('myApp');
myApp
	.service('myCart', ['$rootScope', function($rootScope){ // создание сервиса
				var cart = this; 
				
				cart.list = []; // инициализация пустой корзины
				
				cart.addItem = function(itemToAdd){
				  var existItems = cart.list.filter(function(itemInCart){
					return itemInCart.id == itemToAdd.id; 					//добавление элементов в корзину
				  })
				  <!--проверяет есть ли товары в корзине-->
				  if(existItems.length){  // если есть товары в корзине то увеличивается их количество
					existItems[0].count++;
				  } else {					// иначе добавляется новый товар в корзину
					itemToAdd.count = 1;
					cart.list.push(itemToAdd);
				  }
				  
				  $rootScope.$emit('cartChanged', cart);
				}
				return cart;
			  }])