'use strict';

var gulp            = require('gulp');
var run             = require('run-sequence');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var sourcemaps      = require('gulp-sourcemaps');
var ts              = require('gulp-typescript');
var browserSync     = require('browser-sync').create();
var del             = require('del');

var paths = {
    views: 'app/*.html',
    styles: 'app/sass/**/*.scss',
    templates: 'app/templates/*.html',
    jsVendors: [
        'app/js/vendors/**/*.*',
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/systemjs/dist/system.js',
        'node_modules/angular2/es6/prod/src/testing/shims_for_IE.js',
        'node_modules/angular2/bundles/angular2-polyfills.min.js',
        'node_modules/angular2/bundles/angular2.min.js',
        'node_modules/angular2/bundles/router.min.js',
        'node_modules/typescript/lib/typescript.js',
        'node_modules/rxjs/bundles/Rx.min.js',
        'node_modules/systemjs/dist/system.js'
    ],
    ts: 'app/ts/*.ts'
};

var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', function (cb) {
    return del('dist', cb);
});

gulp.task('serve', ['watch'], function() {
    browserSync.init({
        server: 'dist'
    });
});

gulp.task('views', function () {
    return gulp.src(paths.views, {
            base: 'app'
        })
        .pipe(gulp.dest('dist'));
});

gulp.task('templates', function () {
    return gulp.src(paths.templates, {
            base: 'app'
        })
        .pipe(gulp.dest('dist/app'));
});

gulp.task('styles', function () {
    return gulp.src(paths.styles)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/app/css'))
        .pipe(browserSync.stream());
});

gulp.task('jsVendors', function () {
    for( var i = 0; i < paths.jsVendors.length; i++ ){
        gulp.src( paths.jsVendors[ i ])
            .pipe( gulp.dest('dist/app/js/vendors') );
    }
});

gulp.task('ts', function() {
    var tsResult = tsProject.src( paths.ts )
        .pipe(ts(tsProject));

    return tsResult.js
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch(paths.ts,        ['ts',  browserSync.reload]);
    gulp.watch(paths.templates, ['templates',  browserSync.reload]);
    gulp.watch(paths.styles,    ['styles', browserSync.reload]);
    gulp.watch(paths.views,     ['views',   browserSync.reload]);
});

function serve() {
    return run( 'styles', 'ts', 'templates', 'jsVendors', 'views', 'serve');
}

gulp.task('default', ['clean'], serve());