define(['services/logger'], function (logger) {
    
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


    var vm = {
        activate: activate,
        title: title,
        attached: attached
    };

    return vm;
});