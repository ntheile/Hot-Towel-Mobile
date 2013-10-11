define(['services/logger', 'durandal/composition', 'durandal/app'], function (logger, composition, app) {

    //#region Internal Methods
    var title = 'Details';

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
        title: title,
        deactivate: deactivate,
        composition: composition
    };

    return vm;

});