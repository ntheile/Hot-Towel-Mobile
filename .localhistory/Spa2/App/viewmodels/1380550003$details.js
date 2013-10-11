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
    var self = this;
    var stuff = [1, 2, 3];
    var stuffSelected = ko.observableArray();

    function activate() {
        logger.log(title + ' View Activated', null, title, true);
        self.stuff.push(76);
        return true;
    }

   

    
    //#endregion
});