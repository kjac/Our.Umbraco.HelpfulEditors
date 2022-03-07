(function () {
  "use strict";

  function iconOptionsListController($scope, helpfulIconPickerService) {
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
    vm.newItemIcon = null;

    function add() {
      if (vm.newItemValue && vm.newItemLabel && vm.newItemIcon) {
        $scope.model.value.push({ value: vm.newItemValue, label: vm.newItemLabel, icon: vm.newItemIcon });
        vm.newItemValue = vm.newItemLabel = vm.newItemIcon = null;
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

    vm.openIconPicker = function () {
      helpfulIconPickerService
        .pickIcon(vm.newItemIcon)
        .then(newIcon => vm.newItemIcon = newIcon);
    }
  }
  angular.module("umbraco").controller("Our.Helpful.IconOptionsList.Controller", iconOptionsListController);
})();