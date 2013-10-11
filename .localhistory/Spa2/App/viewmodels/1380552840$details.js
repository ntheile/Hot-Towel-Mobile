define(['services/logger', 'durandal/composition'], function (logger, composition) {

    //#region Internal Methods

    var title = 'Details';
    var stuff = ko.observableArray([1, 2, 3]);
    var stuffSelected = ko.observableArray();
    var i = 6;

    function activate() {
        logger.log(title + ' View Activated', null, title, true);
        stuff.push(5);
        return true;
    }

    function addToStuff() {
        stuff.push(i);
        i++;
        composition.bindingHandlers.chosen.update();
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