﻿// Maps the files so Durandal knows where to find these.
require.config({
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions',
        'composition': '../Scripts/durandal/composition',
        'jquery': '../Scripts/jquery-1.9.1',
        'ko': '../Scripts/knockout-2.3.0.debug',
        'toastr': '../Scripts/toastr',
        'q': '../Scripts/q',
        'breeze': '../Scripts/breeze.debug',
        'moment': '../Scripts/moment',
        'chosen': '../Scripts/chosen.jquery.min',
        'mmenu': '../Scripts/jquery.mmenu.min'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'ko': {
            exports: 'ko'
        },
        'toastr': {
            deps: ['jquery'],
            exports: 'toastr'
        },
        'q': {
            exports: 'Q'
        },
        'breeze': {
            deps: ['ko', 'jquery', 'q'],
            exports: 'breeze'
        },
        'moment': {
            deps: ['jquery'],
            exports: 'moment'
        },
        'chosen': {
            deps: ['jquery'],
            exports: 'chosen'
        },
        'mmenu': {
            deps: ['jquery'],
            exports: 'mmenu'
        }
    }
});


require(["jquery", "ko", "toastr", "q", "breeze", "moment", "chosen", "mmenu"], function ($, ko, toastr, Q, breeze, moment, chosen, mmenu) {

    // Durandal 2.x assumes no global libraries. It will ship expecting 
    // Knockout and jQuery to be defined with requirejs. .NET 
    // templates by default will set them up as standard script
    // libs and then register them with require as follows: 
    define('jquery', function () { return jQuery; });
    define('ko', ['knockout'], function (ko) { return ko; });

    define('toastr', toastr);
    define('q', Q);
    define('breeze',breeze);
    define('moment', moment);
    define('chosen', chosen);
    define('mmenu', mmenu);
    
    
    define(['durandal/app', 'durandal/viewLocator', 'durandal/system', 'plugins/router', 'services/logger'], boot);

    function boot(app, viewLocator, system, router, logger) {

        // Enable debug message to show in the console 
        system.debug(true);

        app.title = 'My App';

        app.configurePlugins({
            router: true
        });

        // require our custom binding-handlers we wrote for widgets and plugins we pull off the web
        require(['services/binding-handlers']);

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
});

