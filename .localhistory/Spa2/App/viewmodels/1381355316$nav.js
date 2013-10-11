define(['services/logger'], function (logger) {
    
    var vm = {
        activate: activate,
        title: title
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log(title + ' View Activated', null, title, true);
        return true;
    }

    function attached() {

        $('a#open-icon').click(function (e) {
            e.stopImmediatePropagation();
            e.preventDefault();
            $('nav#menu').trigger('toggle.mm');
        });

        $('nav#menu').mmenu();

    }

    //#endregion
});