(function () {
  "use strict";

  function toggleListController($scope) {
    // initialize the model if it's empty
    $scope.model.value = $scope.model.value || [];

    var vm = this;
    vm.options = $scope.model.config.options;

    // set option.checked for selected options on init
    vm.options.forEach(option => {
      option.checked = $scope.model.value.includes(option.value);
    });

    vm.toggle = function (option) {
      option.checked = !option.checked;
      $scope.model.value = vm.options.filter(option => option.checked).map(option => option.value);
    }
  }
  angular.module("umbraco").controller("Our.Helpful.ToggleList.Controller", toggleListController);
})();