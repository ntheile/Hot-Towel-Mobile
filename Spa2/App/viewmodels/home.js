define(['services/logger', 'durandal/app'], function (logger, app) {

    //#region Internal Methods
    var title = 'Home';

    function activate() {
        logger.log(title + ' View Activated', null, title, true);
        return true;
    }

    function deactivate() {
        app.isInitialized = true;
        toastr.info("Deactived called");
    }

    //#endregion


  
    var vm = {
        activate: activate,
        deactivate: deactivate,
        title: title
    };

    return vm;

   
});