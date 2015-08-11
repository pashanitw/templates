(function() {
  'use strict';

  angular
    .module('eduTemplates')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr,$mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;

    /* primiary color pallette*/
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('grey');

  }

})();
