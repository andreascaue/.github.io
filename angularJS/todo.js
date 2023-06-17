var app = angular.module("myTodoList", []);
app.controller("myCtrl", function($scope){
    $scope.todo = ["Wash Car", "Do the grocery", "Cut Hair"];
    
    $scope.addItem = function(){
        $scope.errorText = "";
        if(!$scope.addNew) {return;}
        if($scope.todo.indexOf($scope.addNew) == -1){
            $scope.todo.push($scope.addNew);
            $scope.addNew = "";
        }else{
            $scope.errorText = "The item is already in your list.";
        }        
    }

    $scope.removeItem = function(x){

        $scope.errorText = "";
        $scope.todo.splice(x,1);
    }
});

