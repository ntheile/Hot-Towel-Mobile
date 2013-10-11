define(['durandal/system', 'durandal/composition'],
    function (system, composition) {

        console.log("b4 chosen");

        composition.addBindingHandler('chosen', {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                console.log('==>chosen init');
                var params = ko.utils.unwrapObservable(valueAccessor());       
                console.log(params);

                $(element).chosen();
            },
            update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                console.log('==>chosen updated ');
                //var observable = ko.utils.unwrapObservable(valueAccessor());
                //$(element).trigger("chosen:updated");
            }
        });

    });