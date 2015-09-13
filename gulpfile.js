var gulp = require('gulp'), 
  sass = require('gulp-sass') ,
  minifycss = require('gulp-minify-css')

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


//watch sass for changes
gulp.task('watch', function() {
  gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('build', ['sass']);

gulp.task('default', ['sass', 'watch']);
