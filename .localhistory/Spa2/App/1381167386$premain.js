// Maps the files so Durandal knows where to find these.
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
        'q': '../Scripts/Q',
        'breeze': '../Scripts/breeze.min',
        'moment': '../Scripts/moment',
        'chosen': '../Scripts/chosen.jquery.min',
        'mmenu': '../Scripts/jquery.mmenu.min'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'ko': {
            exports: 'ko'
        },
        'ko': {
            exports: 'toastr'
        },

    }
});

