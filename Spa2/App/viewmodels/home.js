define(['services/logger', 'durandal/app'], function (logger, app) {

    //#region Internal Methods
    var title = 'Home';

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
        deactivate: deactivate,
        title: title
    };

    return vm;

   
});