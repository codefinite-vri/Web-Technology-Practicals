var appX = angular.module('mainApp', []);

appX.controller('app', function($scope){
	$scope.tasks=[];
	$scope.add1 = function(){
		if($scope.task!=""){
			$scope.addTask()
		}
	};
	$scope.addTask= function(){
		$scope.tasks.push({'task':$scope.task, 'status':'incomplete'});
		$scope.task='';

	};
	$scope.cancelClass= function(valDelete){
		var i = 0;
		while (i < $scope.tasks.length) {
			if ($scope.tasks[i] === valDelete) {
		      	$scope.tasks.splice(i, 1);
		    }
		    else{
		      	++i;
		    }
		}
	};
})