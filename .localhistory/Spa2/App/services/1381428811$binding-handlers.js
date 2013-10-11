﻿define(['durandal/system', 'durandal/composition'],
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
                $('a#open-icon').click(function (e) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    $(element).trigger('toggle.mm');
                });
                $(element).mmenu({
                    onClick: {
                        setLocationHref: false,
                        setSelected: false,
                        callback: function()
                        {
                            var href = $(this).attr( 'href' );
                            setTimeout(
								function()
								{
								    $('html, body').animate({
								        scrollTop: $( href ).offset().top
								    });
								}, 10
							);
                        }
                    }
                });


                });
            }
        });

     

    });