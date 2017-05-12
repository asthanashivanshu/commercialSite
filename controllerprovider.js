var app=angular.module("myApp",[]);

app.provider('date',function(){
	var greet;
return {
	setGreeting: function(value){
		greet=value;
	},
	$get:function(){
		return{
			showDate:function(){
				var date=new Date();
				return greet+" its!! " + date.getHours() + ":" +date.getMinutes() ;
			},
			devshowDate:function(){
				var date=new Date();
				return date.getHours();
			}
		}
	}
}	

	
});

app.config(function(dateProvider){
	
var time=dateProvider.$get().devshowDate();
console.log("ok");
if(time > 0 && time <13){
	dateProvider.setGreeting("Good Morning");
} else if(time > 13 && time < 18){
	dateProvider.setGreeting("Good Afternoon");
} else if(time > 17 && time < 21){
	dateProvider.setGreeting("Good Evening");
} else{
	dateProvider.setGreeting("Good Night");
}

});

app.controller("myCtrl",function($scope,date){

	$scope.greetMessage=date.showDate();
});
