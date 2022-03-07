(function () {
  "use strict";

  function iconPickerController($scope, helpfulIconPickerService) {

    var vm = this;

    vm.openIconPicker = function () {
      helpfulIconPickerService
        .pickIcon($scope.model.value)
        .then(newIcon => $scope.model.value = newIcon);
    }
  }
  angular.module("umbraco").controller("Our.Helpful.IconPicker.Controller", iconPickerController);
})();