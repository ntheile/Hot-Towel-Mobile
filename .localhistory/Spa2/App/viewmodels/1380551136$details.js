define(['services/logger'], function (logger) {

    //#region Internal Methods

    var title = 'Details';
    var stuff = ko.observableArray([1, 2, 3]);
    var stuffSelected = ko.observableArray();
    var i = 1;

    function activate() {
        logger.log(title + ' View Activated', null, title, true);
        stuff.push(44);
        return true;
    }

    function addToStuff() {
        stuff.push(i);
        i++;
    }

    //#endregion



    var vm = {
        activate: activate,
        title: title,
        stuff: stuff,
        i: i,
        addToStuff: addToStuff,
        stuffSelected: stuffSelected
    };

    return vm;

});