(function () {
  "use strict";

  function textOptionsListController($scope) {
    // initialize the model if it's empty
    $scope.model.value = $scope.model.value || [];

    $scope.sortableOptions = {
      axis: "y",
      containment: "parent",
      cursor: "move",
      items: "> div.control-group",
      tolerance: "pointer"
    };

    var vm = this;
    vm.focusOnNew = false;
    vm.newItemValue = null;
    vm.newItemLabel = null;
    vm.newItemDescription = null;

    function add() {
      if (vm.newItemValue && vm.newItemLabel) {
        $scope.model.value.push({ value: vm.newItemValue, label: vm.newItemLabel, description: vm.newItemDescription });
        vm.newItemValue = vm.newItemLabel = vm.newItemDescription = null;
      }
    }

    vm.add = add;

    vm.addOnEnter = function ($event) {
      vm.focusOnNew = false;
      if ($event.keyCode === 13) {
        $event.preventDefault();
        add();
        vm.focusOnNew = true;
      }
    }

    vm.remove = function (index) {
      $scope.model.value.splice(index, 1);
    }
  }
  angular.module("umbraco").controller("Our.Helpful.TextOptionsList.Controller", textOptionsListController);
})();