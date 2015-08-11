(function() {
  'use strict';

  angular
    .module('eduTemplates')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
