exports.config = function (weyland) {
    weyland.build('main')
        .task.jshint({
            include: 'App/**/*.js'
        })
        .task.uglifyjs({
            include: [
                'Scripts/jquery-1.9.1.min.js',
                'Scripts/knockout-2.3.0.js',
                'Scripts/toastr.min.js',
                'Scripts/q.min.js',
                'Scripts/breeze.debug.js',
                'Scripts/bootstrap.min.js',
                'Scripts/moment.min.js',
                'Scripts/chosen.jquery.min.js',
                'Scripts/jquery.mmenu.min.js',
                'App/**/*.js',
                'Scripts/durandal/**/*.js'
            ]
        })
        .task.rjs({
            include: [
                'Scripts/jquery-1.9.1.min.js',
                'Scripts/knockout-2.3.0.js',
                'Scripts/toastr.min.js',
                'Scripts/q.min.js',
                'Scripts/breeze.debug.js',
                'Scripts/bootstrap.min.js',
                'Scripts/moment.min.js',
                'Scripts/chosen.jquery.min.js',
                'Scripts/jquery.mmenu.min.js',
                'App/**/*.{js,html}',
                'Scripts/durandal/**/*.js'
            ],
            loaderPluginExtensionMaps: {
                '.html': 'text'
            },
            rjs: {
                name: '../Scripts/almond-custom', //to deploy with require.js, use the build's name here instead
                insertRequire: ['main'], //not needed for require
                baseUrl: 'App',
                //mainConfigFile: 'App/main.js', //not needed for require
                wrap: true, //not needed for require
                paths: {
                    'text': '../Scripts/text',
                    'durandal': '../Scripts/durandal',
                    'plugins': '../Scripts/durandal/plugins',
                    'transitions': '../Scripts/durandal/transitions',
                    'knockout': 'empty:',
                    'bootstrap': 'empty:',
                    'jquery': 'empty:',
                    'q': 'empty',
                    'breeze': 'empty'
                },
                inlineText: true,
                optimize: 'none',
                pragmas: {
                    build: true
                },
                stubModules: ['text'],
                keepBuildDir: true,
                out: 'App/main-built.js'
            }
        });
};