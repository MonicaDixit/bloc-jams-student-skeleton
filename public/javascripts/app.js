$(document).ready(function(){
  $('.hero-content h3').click(function(){
    var subText = $(this).text();
    $(this).text(subText + "!");
  });

  var onHoverAction = function(event){
    console.log('Hover action trigerred.');
    $(this).animate({'margin-top':'10px'});
  };

  var offHoverAction = function(event){
     console.log('off-hover action triggered.');
     $(this).animate({'margin-top':'0px'});
  }


  $('.selling-points .point').hover(onHoverAction, offHoverAction);
});
;

  blocJams = angular.module('BlocJams' , ['ui.router']);
  blocJams.config(['$stateProvider', '$locationProvider' , function($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider.state('landing', {
     url: '/',
     controller: 'Landing.controller',
     templateUrl: '/assets/templates/landing.html'
   });
  }]);
  blocJams.controller ('Landing.controller', ['$scope', function($scope){
  $scope.headerText = "Bloc Jams" ;
  $scope.headerTextClicked = function(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;

};
  $scope.subText =  "Turn down for what !" ;
  $scope.subTextClicked = function(){
    $scope.subText += '!' ;
  };

  $scope.albumURLs = [
     '/images/album-placeholders/album-1.jpg',
     '/images/album-placeholders/album-2.jpg',
     '/images/album-placeholders/album-3.jpg',
     '/images/album-placeholders/album-4.jpg',
     '/images/album-placeholders/album-5.jpg',
     '/images/album-placeholders/album-6.jpg',
     '/images/album-placeholders/album-7.jpg',
     '/images/album-placeholders/album-8.jpg',
     '/images/album-placeholders/album-9.jpg',
  ];
}]);
