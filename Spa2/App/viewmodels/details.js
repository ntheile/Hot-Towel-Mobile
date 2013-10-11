define(['services/logger', 'durandal/composition'], function (logger, composition) {

    //#region Internal Methods

    var title = 'Details';
   

    function activate() {
        logger.log(title + ' View Activated', null, title, true);
        return true;
    }

   
    //#endregion



    var vm = {
        activate: activate,
        title: title,
        composition: composition
    };

    return vm;

});