var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

var PATHS = {
    entryFiles: {app: "main.js", vendor: "vendor.js"},
    root: "/",
    publicDir: "public/",
    src: "client/src/",
    dist: "client/dist/",
    js: "js/",
    scss: "scss/",
    css: "css/",
    vendor: "client/src/js/vendor/",
    nodeModules: "/node_modules/"
};

gulp.task('default', ['browserify_app'], function() {

});

gulp.task('browserify_app', function() {
    console.log(__dirname + "/public/javascripts");
    return browserify(__dirname + "/public/javascripts/main.js", {basedir: "/", debug: true})
        .exclude(__dirname + PATHS.root + PATHS.nodeModules + '/*')
        .transform(reactify)
        .bundle()
        .on('error', console.error)
        .pipe(source("app_bundle.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./sourcemaps'))
        .pipe(gulp.dest(__dirname + "/public/"));
});

gulp.task('browserify_vendor', function() {
    console.log(__dirname + PATHS.vendor);
    return browserifyBundler(__dirname + PATHS.root + PATHS.vendor, PATHS.entryFiles.vendor, {basedir: "/", debug: true})
        .transform(debowerify)
        .bundle()
        .on('error', console.error)
        .pipe(source("vendor_bundle.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        //.pipe(streamify(uglify()))
        .pipe(sourcemaps.write('./sourcemaps'))
        .pipe(gulp.dest(__dirname + PATHS.root + PATHS.dist + PATHS.js));
});

gulp.task('watchify', ['browserify_app'/*, 'browserify_vendor'*/], function() {
    var bundler = watchify(__dirname + "/public/javascripts", {basedir: "/", debug: true, cache: {}, packageCache: {}});
    bundler.on('update', rebundle);
    bundler.on('log', console.log);
    bundler.on('time', function(time){console.log("Bundle created in", time + "ms")});

    function rebundle() {
        return bundler
            .exclude(__dirname + PATHS.root + PATHS.nodeModules + '/*')
            .bundle()
            .on('error', console.error)
            .pipe(source("app_bundle.js"))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('./sourcemaps'))
            .pipe(gulp.dest(__dirname + "/public/"));
    }

    return rebundle();
});