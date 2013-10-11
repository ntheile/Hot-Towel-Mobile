define(['services/logger', 'durandal/composition'], function (logger, composition) {

    //#region Internal Methods
    var init = false;
   
    function activate() {
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
        activate: activate,
        composition: composition 
    };

    return vm;

});