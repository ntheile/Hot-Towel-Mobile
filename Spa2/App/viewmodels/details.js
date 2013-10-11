define(['services/logger', 'durandal/composition', 'durandal/app'], function (logger, composition, app) {

    //#region Internal Methods
    var title = 'Details';

    function activate() {
        logger.log(title + ' View Activated', null, title, true);
        toastr.success('lastPage: ' + app.lastPage);
        return true;
    }

    function deactivate() {
        app.lastPage = title;
    }
    //#endregion


    var vm = {
        activate: activate,
        title: title,
        composition: composition,
        deactivate: deactivate
    };

    return vm;

});