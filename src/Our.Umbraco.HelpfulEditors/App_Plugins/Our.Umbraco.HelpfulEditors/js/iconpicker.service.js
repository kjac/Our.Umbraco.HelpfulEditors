(function () {
  "use strict";

  angular.module("umbraco.resources").factory("helpfulIconPickerService",
    function ($q, editorService) {
      return {
        pickIcon: function (currentIcon) {
          const deferred = $q.defer();

          const parts = (currentIcon || "").split(" ");
          const iconPicker = {
            icon: parts[0],
            color: parts.length === 2 ? parts[1] : null,
            submit: function (model) {
              if (model.icon) {
                if (model.color) {
                  deferred.resolve(model.icon + " " + model.color);
                } else {
                  deferred.resolve(model.icon);
                }
              } else {
                deferred.resolve(null);
              }
              editorService.close();
            },
            close: function () {
              editorService.close();
              deferred.reject();
            }
          };
          editorService.iconPicker(iconPicker);

          return deferred.promise;
        }
      };
    }
  );
})();

