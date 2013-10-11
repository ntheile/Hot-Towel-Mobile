﻿define(['durandal/system', 'durandal/composition'],
    function (system, composition) {

        console.log("b4 chosen");

        composition.addBindingHandler('chosen', {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                console.log('==>chosen init');
                var observable = ko.utils.unwrapObservable(valueAccessor());

                ko.bindingHandlers.options.init(element, observable());

                $(element).chosen();
            },
            update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                console.log('==>chosen updated ');
                var observable = ko.utils.unwrapObservable(valueAccessor());

                //ko.bindingHandlers.click.init(element, function () { alert('hi') });

                $(element).trigger("chosen:updated");
            }
        });

    });