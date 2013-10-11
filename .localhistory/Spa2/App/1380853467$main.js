﻿// Maps the files so Durandal knows where to find these.
require.config({
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions',
        'composition': '../Scripts/durandal/composition',
        'jQuery' : '../Scripts/jquery-1.9.1',
        'ko': '../Scripts/knockout-2.3.0.debug',
        'toastr': '../Scripts/toastr',
        'Q': '../Scripts/Q',
        'breeze': '../Scripts/breeze.debug',
        'bootstrap': '../Scripts/bootstrap',
        'moment' : '../Scripts/moment',
        'chosen': '../Scripts/chosen.jquery.min', 
        'mmenu': '../Scripts/jquery.mmenu.min'
    },
    // Sets the configuration for your third party scripts that are not AMD compatible and plugin dependencies
    shim: {
        "chosen": ["jQuery"],
        "toastr": ["jQuery"],
        "Q": ["jQuery"],
        "breeze": ["jQuery"],
        "bootstrap": ["jQuery"],
        "moment": ["jQuery"],
        "mmenu": ["jQuery"]
    } // end Shim Configuration
});


define(['jQuery', 'ko', 'toastr', 'Q', 'breeze', 'bootstrap', 'moment', 'chosen', 'mmenu'], function () {



    // Durandal 2.x assumes no global libraries. It will ship expecting 
    // Knockout and jQuery to be defined with requirejs. .NET 
    // templates by default will set them up as standard script
    // libs and then register them with require as follows: 
    define('jquery', function () { return jQuery; });
    define('knockout', ko);

    require(['durandal/app', 'durandal/viewLocator', 'durandal/system', 'plugins/router', 'services/logger'], boot);

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

//define([
//    '../Scripts/jquery-1.9.1',
//    '../Scripts/knockout-2.3.0.debug',
//    '../Scripts/toastr',
//    '../Scripts/q',
//    '../Scripts/breeze.debug',
//    '../Scripts/bootstrap',
//    '../Scripts/moment',
//    '../Scripts/chosen.jquery.min',
//    '../Scripts/jquery.mmenu.min'
//], function (
//    jQuery,
//    ko,
//    toastr,
//    Q,
//    breeze,
//    bootstrap,
//    moment,
//    chosen,
//    mmenu
//){


//});








