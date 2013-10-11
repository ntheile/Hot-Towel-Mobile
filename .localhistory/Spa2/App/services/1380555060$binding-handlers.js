define(['durandal/system', 'durandal/composition'],
    function (system, composition) {

        console.log("b4 chosen");

        composition.addBindingHandler('chosen', {
            init: function (element, valueAccessor, allBindingsAccessor) {
                console.log('==>chosen init');
                $(element).chosen();

                //handle an item being added to the select
                $(element).on('chosen:updated', function () {
                    console.log('==>chosen updated event ');
                    $(element).trigger("chosen:updated");
                });

            },
            update: function (element, valueAccessor, allBindingsAccessor) {
                console.log('==>chosen updated ');
                $(element).trigger("chosen:updated");
                
            }
        });


    });