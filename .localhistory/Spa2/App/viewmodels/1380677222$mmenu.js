define(['services/logger', 'durandal/composition'], function (logger, composition) {

    //#region Internal Methods

   
    function activate() {
        logger.log('MMenu View Activated', null, title, true);

        $("#mmenu").mmenu({
            configuration: {
                pageNodetype: "section"
            }
        });

        return true;
    }

   
    //#endregion



    var vm = {
        activate: activate,
        composition: composition 
    };

    return vm;

});