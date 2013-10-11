define(['durandal/system', 'durandal/composition'],
    function (system, composition) {

        console.log("b4 chosen");

        composition.addBindingHandler('chosen', {
            init: function (element, valueAccessor) {
                var observable = valueAccessor();
                $(element).chosen();
            },
            update: function (element, valueAccessor) {
                ko.utils.unwrapObservable(valueAccessor());  //unwrap to get subscription
                $(element).trigger("chosen:updated");
                $(element).chosen();
            }
        });


    });