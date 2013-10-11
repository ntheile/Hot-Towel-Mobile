define(['durandal/system', 'durandal/composition'],
    function (system, composition) {

        console.log("b4 chosen");

        composition.addBindingHandler('chosen', {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                console.log('==>chosen init');
                $(element).chosen();
            },
            update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                console.log('==>chosen updated ');
                var observable = ko.utils.unwrapObservable(valueAccessor());

                ko.bindingHandlers.optionsText(element, '33');

                $(element).trigger("chosen:updated");
            }
        });

    });