/**
* Gulp file for Beautiful Gardens site
*/
'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    panini = require('panini'),
    browserSync =require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer');

// Set path to Bootstrap files
var BOOTSTRAP = 'node_modules/bootstrap-sass/assets';

var sassOptions = {
    precision: 8,
    errLogToConsole: true,
    outputStyle: 'expanded',
    includePaths: BOOTSTRAP + '/stylesheets'
};

var SOURCELOC = 'src/';
var SOURCEPATHS = {
    sourceFolder: SOURCELOC,
    sassSource: SOURCELOC + 'scss/app.scss',
    cssSpecificSource: SOURCELOC + 'scss/css-specific/*.css',
    htmlSource: SOURCELOC + 'pages/**/*.{html,hbs}',
    layoutSource: SOURCELOC + '{layouts,partials,data,helpers}/**/*.{html,hbs}',
    imgSource: SOURCELOC + 'img/**/*.{png,jpg,gif,svg}',
    imgGallerySource: SOURCELOC + 'gallery/**/*.{png,jpg,gif,svg}',
    fontSource: SOURCELOC + 'fonts/**/*.{otf,eot,svg,ttf,woff,woff2}',
    miscSource: [
        SOURCELOC + 'misc/favicon.ico',
        SOURCELOC + 'misc/browserconfig.xml',
        SOURCELOC + 'misc/site.webmanifest'
    ],
    jsSpecificSource: SOURCELOC + 'js/js-specific/*.js',
    jsSource: [
        SOURCELOC + 'js/jquerycheck.js',
        // Pick JS components used in project
        BOOTSTRAP + '/javascripts/bootstrap/transition.js',
        // BOOTSTRAP + '/javascripts/bootstrap/alert.js',
        BOOTSTRAP + '/javascripts/bootstrap/button.js',
        // BOOTSTRAP + '/javascripts/bootstrap/carousel.js',
        BOOTSTRAP + '/javascripts/bootstrap/collapse.js',
        BOOTSTRAP + '/javascripts/bootstrap/dropdown.js',
        BOOTSTRAP + '/javascripts/bootstrap/modal.js',
        // BOOTSTRAP + '/javascripts/bootstrap/tooltip.js',
        // BOOTSTRAP + '/javascripts/bootstrap/popover.js',
        BOOTSTRAP + '/javascripts/bootstrap/scrollspy.js',
        // BOOTSTRAP + '/javascripts/bootstrap/tab.js',
        BOOTSTRAP + '/javascripts/bootstrap/affix.js',
        // Custom and vendor JS
        SOURCELOC + 'js/vendor/*.js',
        SOURCELOC + 'js/custom.js'
    ],
};

var APPLOC = '../beautifulgardenssite';
var APPPATH = {
    root: APPLOC,
    css: APPLOC + '/css',
    js: APPLOC + '/js',
    img: APPLOC + '/img',
    gallery: APPLOC + '/gallery',
    font: APPLOC + '/fonts'
};

var browserSyncFiles = [
    APPPATH.css + '/*.css',
    APPPATH.root +'/*.html',
    APPPATH.js + '/*.js'
];

/**
* Compile Sass, Autoprefix and Minify
*/
function styles() {
    return gulp.src(SOURCEPATHS.sassSource)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(APPPATH.css))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(APPPATH.css));
}

/**
* Concat JavaScript
*/
function scripts() {
    return gulp.src(SOURCEPATHS.jsSource)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(APPPATH.js));
}

/**
* Concat and Minify JavaScript
*/
function scriptsmin() {
    return gulp.src(SOURCEPATHS.jsSource, {
        sourcemaps: true
    })
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(APPPATH.js));
}

/**
* Compile html files
*/
function pages() {
    return gulp.src(SOURCEPATHS.htmlSource)
        .pipe(panini({
            root: SOURCELOC + 'pages/',
            layouts: SOURCELOC + 'layouts/',
            partials: SOURCELOC + 'partials/',
            data: SOURCELOC + 'data/',
            helpers: SOURCELOC + 'helpers'
        }))
        .pipe(rename({ extname: '.html' }))
        .pipe(gulp.dest(APPPATH.root));
}

/**
* Load updates to HTML templates into Panini
*/
function resetPages(done) {
    panini.refresh();
    done();
}

/**
* Reload the browser with Browser-Sync
*
function reload(done) {
    browserSync.reload();
    done();
}
*/

/**
* Copy assets
*/
gulp.task('copy-assets', function(done) {
    // Copy image files
    gulp.src(SOURCEPATHS.imgSource)
        .pipe(gulp.dest(APPPATH.img));
    // Copy gallery image files
    gulp.src(SOURCEPATHS.imgGallerySource)
        .pipe(gulp.dest(APPPATH.gallery));
    // Copy font files
    gulp.src(SOURCEPATHS.fontSource)
        .pipe(gulp.dest(APPPATH.font));
    // Copy css files only used on specific pages
    gulp.src(SOURCEPATHS.cssSpecificSource)
        .pipe(gulp.dest(APPPATH.css));
    // Copy js files only used on specific pages
    gulp.src(SOURCEPATHS.jsSpecificSource)
        .pipe(gulp.dest(APPPATH.js));
    // Copy miscellaneous files
    gulp.src(SOURCEPATHS.miscSource)
        .pipe(gulp.dest(APPPATH.root));
    done();
});

/**
* Browser-Sync serve and watch files
*/
gulp.task('serve', function(done) {
    browserSync.init(browserSyncFiles, {
        server: {
            baseDir : APPPATH.root
        }
    });
    gulp.watch(SOURCEPATHS.jsSource, gulp.parallel(scripts, scriptsmin));
    gulp.watch(SOURCEPATHS.sassSource, gulp.parallel(styles));
    gulp.watch(SOURCEPATHS.htmlSource, gulp.parallel(pages));
    gulp.watch(SOURCEPATHS.layoutSource, gulp.series(resetPages, pages));
    gulp.watch([SOURCEPATHS.imgSource, SOURCEPATHS.imgGallerySource, SOURCEPATHS.fontSource, SOURCEPATHS.cssSpecificSource, SOURCEPATHS.jsSpecificSource], gulp.parallel('copy-assets'));
    done();
});

/**
* Gulp build and serve tasks
*/
gulp.task('build', gulp.parallel(styles, scripts, scriptsmin, pages, 'copy-assets'));
gulp.task('default', gulp.series('build', 'serve'));
