(function () {
  "use strict";

  function radioButtonListController($scope) {
    var vm = this;
    vm.options = $scope.model.config.options;
  }
  angular.module("umbraco").controller("Our.Helpful.RadioButtonList.Controller", radioButtonListController);
})();