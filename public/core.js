var Todo = angular.module('Todo', ['ngStorage','ui.bootstrap','ui.checkbox']); // dependencies are in the array

Todo.controller('HomeController', function($scope, $localStorage) {

  $scope.$storage = $localStorage;
  $scope.task = {
    name : '',
    status  : false
  };

  if ($scope.$storage.tasks == undefined) { $scope.$storage.tasks =[] }
  // console.log(typeof $scope.storage.tasks[0])
  $scope.todolist = {
    name : 'My TodoList',
    tasks : $scope.$storage.tasks
  };

  //DEBUG
  console.log(Array.isArray($scope.todolist.tasks))
  console.log($scope.todolist.tasks)
  console.log($scope.todolist.tasks[0])
  console.log($scope.todolist.tasks[1])
  console.log($scope.todolist.tasks[2])

  // Alerts Management
  $scope.alerts = [];
  $scope.closeAlert = function() {
   $scope.alerts.splice(0, 1);
 };

  $scope.NewTask = function () {
    $scope.todolist.tasks.push(angular.extend({}, $scope.task)); // sans le extend ca bug la tache est vide
    $scope.todolist.tasks = $scope.$storage.tasks
    $scope.task.name ='';
    $scope.alerts.push({type: 'success',msg: 'You added a new task!'});
  }
  $scope.DeleteTask = function (name) {
    $scope.todolist.tasks.forEach(function(element) {
      if (name == element.name)
      {
        $scope.todolist.tasks.splice($scope.todolist.tasks.indexOf(element), 1)
      }
    });
      $scope.alerts.push({type: 'danger',msg: 'Task deleted!'});
  }
});
