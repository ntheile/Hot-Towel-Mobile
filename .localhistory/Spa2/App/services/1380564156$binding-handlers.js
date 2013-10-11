﻿define(['durandal/system', 'durandal/composition'],
    function (system, composition) {

        console.log("b4 chosen");

        composition.addBindingHandler('chosen', {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                console.log('==>chosen init');

                console.log(allBindingsAccessor().options.optionsAfterRender());

                $(element).chosen();
            },
            update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                console.log('==>chosen updated ');
                
            }
        });

    });