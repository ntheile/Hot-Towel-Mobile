define(['services/logger', 'durandal/composition'], function (logger, composition) {

    //#region Internal Methods
    var init = false;
   
    function attached() {
        logger.log('MMenu View Activated', null, title, true);

        if (!init) {
            $("#mmenu").mmenu({
                configuration: {
                    pageNodetype: "section"
                }
            });

        }

        
        return true;
    }

   
    //#endregion



    var vm = {
        attached: attached,
        composition: composition 
    };

    return vm;

});