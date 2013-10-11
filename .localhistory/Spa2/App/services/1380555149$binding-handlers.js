define(['durandal/system', 'durandal/composition'],
    function (system, composition) {

        console.log("b4 chosen");

        composition.addBindingHandler('chosen', {
            init: function (element, valueAccessor, allBindingsAccessor) {
                console.log('==>chosen init');
                $(element).chosen();
            },
            update: function (element, valueAccessor, allBindingsAccessor) {
                console.log('==>chosen updated ');
                $(element).trigger("chosen:updated");
            }
        });


    });