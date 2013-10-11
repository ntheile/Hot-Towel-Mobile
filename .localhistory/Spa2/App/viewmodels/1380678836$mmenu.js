define(['durandal/system', 'plugins/router', 'services/logger'],
    function (system, router, logger) {
       
        
        

        //#region Internal Methods
        function activate() {
            return true;
        }

        function compositionComplete() {
            $("#mmenu").mmenu({
                configuration: {
                    pageNodetype: "section"
                }
            });

        }
       
        //#endregion

        var vm = {
            activate: activate,
            router: router,
            compositionComplete: compositionComplete
        };

        return vm;

    });