'use strict'

var gulp = require('gulp');
var connect = require('gulp-connect'); // Run a local web server
var open = require('gulp-open'); // Open url in web browser
var browserify = require('browserify'); //bundle the JS
var source = require('vinyl-source-stream'); //Use conventional text streams with Gulp
var concat = require('gulp-concat'); //concat all the files
var uglify = require('gulp-uglify');
var babelify = require('babelify');//Transforms React JSX to JS
var history = require('connect-history-api-fallback');
var gutil = require('gulp-util');
const image = require('gulp-image');

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        allJs: ['./src/**/*.js', './src/**/*.jsx'],
        mainJs: './src/main.jsx',
        cssFiles: [
            './src/css/*.css'
        ],
        bootstrapCss: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        fonts: 'node_modules/bootstrap/dist/fonts/*.*',
        jQueryJS: 'node_modules/jquery/dist/jquery.js',
        bootstrapJS: 'node_modules/bootstrap/dist/js/bootstrap.js',
        dist: './dist'
    },
    imageSrc:["./src/images/*"],
    imageDest:"./dist/images/"
}

function handleError (error) {
    // If you want details of the error in the console
    console.log(error.toString())
    this.emit('end')
  }


//Start a local dev server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true,
        middleware: function (connect, opt) {
            return [
                history({})
            ]
        }
    })
});



gulp.task('open', ['connect'], function () {
    gulp.src('./dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }))
});

gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('bootstrap-css', function () {
    gulp.src(config.paths.bootstrapCss)
        .pipe(concat('bootstrap.bundle.css'))
        .pipe(gulp.dest(config.paths.dist + "/css"));
});
gulp.task('css', function () {
    gulp.src(config.paths.cssFiles)
        .pipe(concat('styles.bundle.css'))
        .pipe(gulp.dest(config.paths.dist + "/css"));
});

gulp.task("fonts", function () {
    gulp.src(config.paths.fonts)
        .pipe(gulp.dest(config.paths.dist + '/fonts'));
});

gulp.task("bootstrap", ["bootstrap-css", "fonts"], function () {
    return gulp.src([config.paths.jQueryJS, config.paths.bootstrapJS])
        .pipe(concat("bootstrap.bundle.js"))
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.dist + "/scripts"))
        .pipe(connect.reload());
});

gulp.task("js", function () {
    browserify({ entries: config.paths.mainJs, extensions: ['.js', '.jsx'], debug: true })
        .transform('babelify', { presets: ['es2015', 'react', 'stage-2'] })
        .on('error', gutil.log)
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest(config.paths.dist + "/scripts"))
        .pipe(connect.reload());
});

gulp.task('images', function () {
    gulp.src(config.imageSrc)
      .pipe(image())
      .pipe(gulp.dest(config.imageDest));
  });

gulp.task('watch', function () {         
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.allJs, ['js']);
    gulp.watch(config.paths.cssFiles, ['css']);
})
gulp.task('default', ['html', 'css', 'bootstrap', 'js', "images", 'open', 'watch']);