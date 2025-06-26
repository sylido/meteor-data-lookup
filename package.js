Package.describe({
  name    : "sylido:data-lookup",
  summary : "Reactively lookup a field in the object",
  version : "0.4.0",
  git     : "https://github.com/sylido/meteor-data-lookup.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@3.2.2");

  // Core dependencies.
  api.use([
    "coffeescript@2.4.1",
    "ecmascript",
    "underscore@1.6.4",
    "tracker@1.3.4"
  ]);

  // 3rd party dependencies.
  api.use([
    "sylido:computed-field@0.11.0"
  ]);

  api.export("DataLookup");

  api.mainModule("lib.coffee");
});

Package.onTest(function (api) {
  api.versionsFrom("METEOR@3.2.2");

  // Core dependencies.
  api.use([
    "coffeescript@2.4.1",
    "ecmascript",
    "random",
    "underscore",
    "reactive-var"
  ]);

  // Internal dependencies.
  api.use([
    "sylido:data-lookup"
  ]);

  // 3rd party dependencies.
  api.use([
    "sylido:classy-test@0.4.0",
    "sylido:server-autorun@0.8.0"
  ]);

  api.addFiles([
    "tests.coffee"
  ]);
});
