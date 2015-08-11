(function() {
  'use strict';

  angular
    .module('eduTemplates')
    .directive('draggableContainer', draggableContainer);

  /** @ngInject */
  function draggableContainer() {
    var directive = {
      restrict: 'E',
      replace:true,
      scope:{
        label:"@"
      },
      templateUrl: 'app/components/dragbox/draggable-container.html',
      link: linkFn
    };

    return directive;

    /** @ngInject */
    function linkFn(scope,element,attr) {
      var x=element.offset().left;
      var y=element.offset().top;
      element.click(function(){
        element.find(".dragged-icon").addClass('animate')
      });
      scope.droppedObjects=[];
      scope.onDropComplete=function(data,evt){
        debugger;
        var index = scope.droppedObjects.indexOf(data);
        if (index == -1)
          scope.droppedObjects.push(data);
      };

    }
  }

})();
