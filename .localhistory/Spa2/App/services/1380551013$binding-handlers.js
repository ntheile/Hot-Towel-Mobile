define(['durandal/system', 'durandal/composition'],
    function (system, composition) {

        console.log("b4 chosen");

        composition.addBindingHandler('chosen', {
            init: function (element, valueAccessor) {
                console.log("chosen");
                $(element).chosen();
            },
            update: function (element, valueAccessor) {
                $(element).chosen();
            }
        });


    });