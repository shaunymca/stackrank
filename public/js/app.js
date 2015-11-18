(function() {
  if (window.myApp == null) {
    window.myApp = {
      app: {}
    };
  }

  window.myApp.app.myAppNgServices = angular.module('myAppNg.services', []);

  window.myApp.app.myAppNgDirectives = angular.module('myAppNg.directives', []);

  window.myApp.app.myAppNgFilters = angular.module('myAppNg.filters', []);

  window.myApp.app.myAppNgConstants = angular.module('myAppNg.constants', []);

  window.myApp.app.myAppNg = angular.module('myAppNg', ['myAppNg.services', 'myAppNg.directives', 'myAppNg.filters', 'myAppNg.constants'])
}).call(this);
