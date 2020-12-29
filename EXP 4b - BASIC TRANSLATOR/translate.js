var app = angular.module("myApp",['pascalprecht.translate']);

app.config(["$translateProvider", function($translateProvider){
  
  var en_translations = {
    "language" : "Selected Language: English",
    "greeting" : "Happy Birthday" 
  }
  
  var sp_translations = {
    "language" : "Selected Language: Spanish",
    "greeting" : "Feliz cumpleanos"  
  }

   var de_translations = {
    "language" : "Selected Language: German",
    "greeting" : "Alles Gute zum Geburtstag"  
  }
  
  

  $translateProvider.translations('en',en_translations);
  
  $translateProvider.translations('sp',sp_translations);

  $translateProvider.translations('de',de_translations);
  
  $translateProvider.preferredLanguage('en');
  
}]);

app.controller("translateController" ,["$scope","$translate",function($scope,$translate){
  $scope.changeLanguage = function(lang){
   $translate.use(lang); 
  }
}]);