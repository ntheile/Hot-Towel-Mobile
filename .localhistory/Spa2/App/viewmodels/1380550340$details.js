define(['services/logger'], function (logger) {

    //#region Internal Methods

    var title = 'Details';
    var stuff = ko.observableArray([1, 2, 3]);
    var stuffSelected = ko.observableArray();

    function activate() {
        logger.log(title + ' View Activated', null, title, true);
        stuff.push(44);
        return true;
    }

    //#endregion



    var vm = {
        activate: activate,
        title: title,
        stuff: stuff,
        stuffSelected: stuffSelected
    };

    return vm;

});