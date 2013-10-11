define(['durandal/system', 'plugins/router', 'services/logger'],
    function (system, router, logger) {
       
        $("#mmenu").mmenu({
            configuration: {
                pageNodetype: "section"
            }
        });

        

        //#region Internal Methods
        function activate() {
            return true;
        }
       
        //#endregion

        var vm = {
            activate: activate,
            router: router
        };

        return vm;

    });