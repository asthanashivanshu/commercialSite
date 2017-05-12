var app=angular.module("myApp",[]);

app.factory('random',function(){
	var randomObj=[];
	var num=Math.floor(Math.random()*10);
	randomObj.generate=function(){
		return num;
	};

	return randomObj;
});

app.controller("rand",function($scope,random){

	$scope.generateRandomNumber=function(){
		$scope.randomNumber=random.generate();
	};
})
