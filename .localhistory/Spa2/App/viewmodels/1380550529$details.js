define(['services/logger'], function (logger) {

    //#region Internal Methods

    var title = 'Details';
    var stuff = ko.observable([1, 2, 3]);
    var stuffSelected = ko.observableArray();
    var i = 0;

    function activate() {
        logger.log(title + ' View Activated', null, title, true);
        stuff.push(44);
        return true;
    }

    function addToStuff() {
        stuff.push(44);
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