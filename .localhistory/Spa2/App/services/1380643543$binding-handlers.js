define(['durandal/system', 'durandal/composition'],
    function (system, composition) {

        console.log("b4 chosen");

        composition.addBindingHandler('chosen', {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                //console.log('==>chosen init');
                $(element).chosen();
            }
        });

        composition.addBindingHandler('chosen', {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
               $(element).trigger('chosen:updated');
            }
        });

    });