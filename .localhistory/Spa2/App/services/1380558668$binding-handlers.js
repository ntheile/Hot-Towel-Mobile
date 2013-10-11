define(['durandal/system', 'durandal/composition'],
    function (system, composition) {

        console.log("b4 chosen");

        composition.addBindingHandler('chosen', {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                console.log('==>chosen init');
                var observable = ko.utils.unwrapObservable(valueAccessor());
                console.log(observable);

                var bindings = ko.utils.unwrapObservable(allBindingsAccessor());
                console.log(bindings);

                bindings.options = observable;
     
                $(element).chosen();
            },
            update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                console.log('==>chosen updated ');
                var observable = ko.utils.unwrapObservable(valueAccessor());    
                $(element).trigger("chosen:updated");
            }
        });

    });