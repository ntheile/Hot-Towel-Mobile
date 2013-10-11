define(['services/logger'], function (logger) {
    var title = 'Details';
    var vm = {
        activate: activate,
        title: title,
        stuff: stuff,
        stuffSelected: stuffSelected
    };

    return vm;

    //#region Internal Methods

    var stuff = ko.observableArray();
    var stuffSelected = ko.observableArray([1,2,3]);

    function activate() {
        logger.log(title + ' View Activated', null, title, true);
       
        return true;
    }

   

    
    //#endregion
});