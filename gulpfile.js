var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');

gulp.task('default', function() {
	console.log('works');
});

gulp.task('watch', function() {
	watch('./app/index.html', function() {
		console.log('bla bla bla');
	})
	
	watch('./app/assets/styles/**/*.css', function() {		
		return gulp.src('./app/assets/styles/style.css')
		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
	})
})