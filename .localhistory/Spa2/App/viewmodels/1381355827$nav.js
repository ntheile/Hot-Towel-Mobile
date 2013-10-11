define(['services/logger'], function (logger) {
    
    //#region Internal Methods
    function activate() {

        logger.log(title + ' View Activated', null, title, true);
        return true;
    }

    function compositionComplete() {
       
    }
    //#endregion


    var vm = {
        compositionComplete: compositionComplete,
        title: title,
        attached: attached
    };

    return vm;
});