﻿define(['durandal/system', 'durandal/composition'],
    function (system, composition) {

        console.log("b4 chosen");

        composition.addBindingHandler('chosen', {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                console.log('==>chosen init');
                var params = ko.utils.unwrapObservable(valueAccessor());       
                var options = params.options() || [];
                var selectedOptions = params.selectedOptions() || [];

                console.log(params);
                console.log(options);
                console.log(selectedOptions);

                $(element).chosen();
            },
            update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                console.log('==>chosen updated ');
                //var observable = ko.utils.unwrapObservable(valueAccessor());
                //$(element).trigger("chosen:updated");
            }
        });

    });