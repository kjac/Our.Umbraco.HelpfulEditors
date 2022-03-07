(function () {
  "use strict";

  function iconListController($scope) {
    // initialize the model if it's empty
    $scope.model.value = $scope.model.value || [];

    var vm = this;
    vm.options = $scope.model.config.options;
    vm.multiSelect = $scope.model.config.multiSelect === "1";

    vm.options.forEach(option => {
      option.selected = $scope.model.value.includes(option.value);
    });

    vm.toggle = function(option) {
      if (!option.selected && !vm.multiSelect) {
        vm.options.forEach(option => {
          option.selected = false;
        });
      }
      option.selected = !option.selected;
      $scope.model.value = vm.options.filter(option => option.selected).map(option => option.value);
    }
  }
  angular.module("umbraco").controller("Our.Helpful.IconList.Controller", iconListController);
})();