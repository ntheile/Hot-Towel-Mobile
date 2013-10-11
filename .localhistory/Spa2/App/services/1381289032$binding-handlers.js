define(['durandal/system', 'durandal/composition'],
    function (system, composition) {

        console.log("b4 chosen");

        composition.addBindingHandler('chosen', {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                //console.log('==>chosen init');
                $(element).chosen();
            }
        });

        composition.addBindingHandler('chosenAfterRender', {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
               $(element).trigger('chosen:updated');
            }
        });

        composition.addBindingHandler('mmenu', {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
               
                $(element).mmenu();
            }
        });


        composition.addBindingHandler('mmenuOpen', {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                $(element).click(function (e) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    $('nav#menu').trigger('toggle.mm');
                });
            }
        });

        


    });