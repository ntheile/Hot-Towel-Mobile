// Maps the files so Durandal knows where to find these.
require.config({
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions',
        'composition': '../Scripts/durandal/composition',
        'jQuery': '../Scripts/jquery-1.9.1',
        'ko': '../Scripts/knockout-2.3.0.debug',
        'toastr': '../Scripts/toastr',
        'Q': '../Scripts/Q',
        'breeze': '../Scripts/breeze.debug',
        'bootstrap': '../Scripts/bootstrap',
        'moment': '../Scripts/moment',
        'chosen': '../Scripts/chosen.jquery.min',
        'mmenu': '../Scripts/jquery.mmenu.min'
    }
});

require(['main']);