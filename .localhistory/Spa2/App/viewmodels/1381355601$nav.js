define(['services/logger'], function (logger) {
    
    //#region Internal Methods
    function activate() {
        logger.log(title + ' View Activated', null, title, true);
        return true;
    }

    function compositionComplete() {
        $('a#open-icon').click(function (e) {
            e.stopImmediatePropagation();
            e.preventDefault();
            $('nav#menu').trigger('toggle.mm');
        });

        $('#menu').mmenu();
    }
    //#endregion


    var vm = {
        compositionComplete: compositionComplete,
        title: title,
        attached: attached
    };

    return vm;
});