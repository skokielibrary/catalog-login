var gulp = require('gulp'), 
  sass = require('gulp-sass') ,
  minifycss = require('gulp-minify-css'),
  browserSync = require('browser-sync').create();

var config = {
    sass_path: 'src/scss',
    css_path: 'dist',
    js_src_path: 'src/assets/js/src',
    js_path: 'dist/assets/js',
    bower_dir: 'bower_components',
    node_dir: 'node_modules'
}

gulp.task('sass', function () {
    gulp.src(config.sass_path + '/*.scss')
    .pipe(sass({ includePaths : [config.sass_path, config.node_dir + '/node.normalize.scss/'] }))
    .pipe(minifycss())
    .pipe(gulp.dest(config.css_path))
});

// Static server
gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('reload', function(){
  browserSync.reload();
})

//watch sass for changes
gulp.task('watch', function() {
  gulp.watch('src/scss/*.scss', ['sass', 'reload']);
});

gulp.task('build', ['sass']);

gulp.task('default', ['sass', 'browser-sync', 'watch']);
