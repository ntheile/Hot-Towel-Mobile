// Maps the files so Durandal knows where to find these.
require.config({
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions'
    }
});

// Durandal 2.x assumes no global libraries. It will ship expecting 
// Knockout and jQuery to be defined with requirejs. .NET 
// templates by default will set them up as standard script
// libs and then register them with require as follows: 
define('jquery', function () { return jQuery; });
define('knockout', ko);

define(['durandal/app', 'durandal/viewLocator', 'durandal/system', 'plugins/router', 'services/logger'], boot);

function boot (app, viewLocator, system, router, logger) {

    var bindings = require(['services/binding-handlers']);

    // Enable debug message to show in the console 
    system.debug(true);  
    app.title = 'My App';
   
    app.configurePlugins({
        router: true
    });


    // Enable phonegap for mobile build, of set to false for web builds
    app.usePhonegap = false;

    if (app.usePhonegap) {
        var phonegap = require(['phonegap'], function () {
            // Wait for Phonegap device API libraries to load
            //
            document.addEventListener("deviceready", function () {
                var element = document.getElementById('deviceProperties');
                element.innerHTML = 'Device Name: ' + device.name + '<br />' +
                                    'Device Cordova: ' + device.cordova + '<br />' +
                                    'Device Platform: ' + device.platform + '<br />' +
                                    'Device UUID: ' + device.uuid + '<br />' +
                                    'Device Version: ' + device.version + '<br />';

                if (navigator.notification) {
                    navigator.notification.alert("im a phone gap app", null, title, 'OK');
                } else {
                    alert("im a web app");
                }
            }, false);

            start();
        });
    }
    else {
       
        start();
    }

    // start the app
    function start() {
        app.start().then(function () {
            toastr.options.positionClass = 'toast-bottom-right';
            toastr.options.backgroundpositionClass = 'toast-bottom-right';

            // When finding a viewmodel module, replace the viewmodel string 
            // with view to find it partner view.
            // [viewmodel]s/sessions --> [view]s/sessions.html
            // Defaults to viewmodels/views/views. 
            // Otherwise you can pass paths for modules, views, partials
            viewLocator.useConvention();

            //Show the app by setting the root view model for our application.
            app.setRoot('viewmodels/shell', 'entrance');
        });
    }
    
    
};