/**
* Gulp file for Beautiful Gardens site
*/
'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    panini = require('panini'),
    browserSync =require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer');

// Set path to Bootstrap files
var BOOTSTRAP = 'node_modules/bootstrap-sass/assets';

var autoprefixerOptions = {
    browsers: [
        'Android 2.3',
        'Android >= 4',
        'Chrome >= 20',
        'Firefox >= 24',
        'Explorer >= 8',
        'iOS >= 6',
        'Opera >= 12',
        'Safari >= 6'
    ]
};

var sassOptions = {
    precision: 8,
    errLogToConsole: true,
    outputStyle: 'expanded'
};

var SOURCEPATHS = {
    sourceFolder: 'src/',
    sassSource: 'src/scss/*.scss',
    cssSpecificSource: 'src/scss/css-specific/*.css',
    htmlSource: 'src/pages/**/*.{html,hbs}',
    layoutSource: 'src/{layouts,partials}/**/*.{html,hbs}',
    imgSource: 'src/img/**/*',
    imgGallerySource: 'src/gallery/**/*',
    fontSource: 'src/fonts/**/*',
    jsSpecificSource: 'src/js/js-specific/*.js',
    jsSource: [
        'src/js/jquerycheck.js',
        // Pick JS components used in project
        BOOTSTRAP + '/javascripts/bootstrap/transition.js',
        BOOTSTRAP + '/javascripts/bootstrap/alert.js',
        BOOTSTRAP + '/javascripts/bootstrap/button.js',
        BOOTSTRAP + '/javascripts/bootstrap/carousel.js',
        BOOTSTRAP + '/javascripts/bootstrap/collapse.js',
        BOOTSTRAP + '/javascripts/bootstrap/dropdown.js',
        BOOTSTRAP + '/javascripts/bootstrap/modal.js',
        BOOTSTRAP + '/javascripts/bootstrap/tooltip.js',
        BOOTSTRAP + '/javascripts/bootstrap/popover.js',
        BOOTSTRAP + '/javascripts/bootstrap/scrollspy.js',
        BOOTSTRAP + '/javascripts/bootstrap/tab.js',
        BOOTSTRAP + '/javascripts/bootstrap/affix.js',
        // Custom and vendor JS
        'src/js/vendor/*.js',
        'src/js/custom.js'
    ],
};

var APPPATH = {
    root: 'dist',
    css: 'dist/css',
    js: 'dist/js',
    img: 'dist/img',
    gallery: 'dist/gallery',
    font: 'dist/fonts'
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
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sass(sassOptions).on('error', sass.logError))
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
            root: 'src/pages/',
            layouts: 'src/layouts/',
            partials: 'src/partials/',
            data: 'src/data/',
            helpers: 'src/helpers'
        }))
        .pipe(gulp.dest(APPPATH.root));
}

/**
* Reload the browser with Browser-Sync
*/
function resetPages(done) {
    panini.refresh();
    done();
}

/**
* Reload the browser with Browser-Sync
*/
function reload(done) {
    browserSync.reload();
    done();
}

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
    done();
    // Copy css files only used on specific pages
    gulp.src(SOURCEPATHS.cssSpecificSource)
        .pipe(gulp.dest(APPPATH.css));
    // Copy js files only used on specific pages
    gulp.src(SOURCEPATHS.jsSpecificSource)
        .pipe(gulp.dest(APPPATH.js));
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
