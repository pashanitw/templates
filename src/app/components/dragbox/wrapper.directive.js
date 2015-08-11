(function () {
  'use strict';

  angular
    .module('eduTemplates')
    .directive('wrapper', wrapper);

  /** @ngInject */
  function wrapper() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/dragbox/wrapper.html',
      scope: {
        creationDate: '='
      },
      link: linkFn
    };

    return directive;

    /** @ngInject */
    function linkFn(scope, element, attr) {
      scope.items = [
        {
          url: "images/orange-small.png",
          type: "something"
        },
        {
          url: "images/orange-small.png",
          type: "something"
        },
        {
          url: "images/orange-small.png",
          type: "something"
        },
        {
          url: "images/orange-small.png",
          type: "something"
        },
        {
          url: "images/orange-small.png",
          type: "something"
        },
        {
          url: "images/orange-small.png",
          type: "something"
        },
      ];
      console.log("something");

    }
  }

})();
