/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'angular:': 'app/ts/@angular'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'app/ts/@angular/core/bundles/core.umd.js',
            '@angular/common': 'app/ts/@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'app/ts/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'app/ts/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'app/ts/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'app/ts/@angular/http/bundles/http.umd.js',
            '@angular/router': 'app/ts/@angular/router/bundles/router.umd.js',
            '@angular/forms': 'app/ts/@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs':                       'app/ts/rxjs'//,
            // 'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './ts/main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }//,
            // 'angular2-in-memory-web-api': {
            //     main: './ts/index.js',
            //     defaultExtension: 'js'
            // }
        }
    });
})(this);

