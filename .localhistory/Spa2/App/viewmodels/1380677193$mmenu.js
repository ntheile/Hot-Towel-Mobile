define(['services/logger', 'durandal/composition'], function (logger, composition) {

    //#region Internal Methods

   
    function activate() {
        logger.log('MMenu View Activated', null, title, true);

        

        return true;
    }

   
    //#endregion



    var vm = {
        activate: activate,
        composition: composition 
    };

    return vm;

});