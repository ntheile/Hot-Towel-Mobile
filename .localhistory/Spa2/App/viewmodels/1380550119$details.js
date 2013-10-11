define(['services/logger'], function (logger) {
    var title = 'Details';
    var stuff = [1, 2, 3];
    var stuffSelected = ko.observableArray();

    var vm = {
        activate: activate,
        title: title,
        stuff: stuff,
        stuffSelected: stuffSelected
    };

    return vm;

    //#region Internal Methods

    function activate() {
        logger.log(title + ' View Activated', null, title, true);
        stuff.push(44);
        return true;
    }

   

    
    //#endregion
});