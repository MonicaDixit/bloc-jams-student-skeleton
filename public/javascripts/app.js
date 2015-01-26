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

angular.module('BlocJams', []).controller('Landing.controller',['$scope', function($scope){
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
