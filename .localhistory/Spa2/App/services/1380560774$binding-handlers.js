define(['durandal/system', 'durandal/composition'],
    function (system, composition) {

        console.log("b4 chosen");

        composition.addBindingHandler('chosen', {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                console.log('==>chosen init');

                var options = valueAccessor();
                var newValueAccessor = function() {
                    return function() {
                        options.action.apply(context, options.params);
                    };
                };
                ko.bindingHandlers.options.init(element, newValueAccessor, allBindingsAccessor, context);

                //ko.bindingHandlers.options.(element, function () {
                //    $(element).trigger('chosen:updated');
                //});

                $(element).chosen();
            },
            update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                console.log('==>chosen updated ');
                //var observable = ko.utils.unwrapObservable(valueAccessor());
                //$(element).trigger("chosen:updated");
            }
        });

    });