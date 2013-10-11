﻿// Maps the files so Durandal knows where to find these.
require.config({
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions',
        'composition': '../Scripts/durandal/composition'
    }
});

require(['../Scripts/jquery-1.9.1', '../Scripts/knockout-2.3.0.debug'], function ($, ko) {
    
    require(['../Scripts/toastr'],function(toastr){
        require(['main']);
    });

    require(['../Scripts/Q'],function(Q){

    });


    require(['../Scripts/breeze.debug'],function(breeze){

    });

    require(['../Scripts/bootstrap'],function(bootstrap){

    });

    require(['../Scripts/moment'],function(moment){

    });

    require(['../Scripts/chosen.jquery.min'],function(chosen){

    });

    require(['../Scripts/jquery.mmenu.min'],function(mmenu){

    });

   
});

