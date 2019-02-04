var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var browserSync = require('browser-sync').create();


gulp.task('watch', function() {
	
	browserSync.init({
		notify: false,
		server: {			
			baseDir: "app"
		}
	});
	
	watch('./app/index.html', function() {
		browserSync.reload();
	});
	
	// watch('./app/temp/styles/style.css', function() {
		// browserSync.reload();
	// })	
	
	watch('./app/assets/styles/**/*.css', function () {		
		return gulp.src('./app/assets/styles/style.css')
		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));		
	})
	
	watch('./app/assets/styles/**/*.css', function () {		
		return gulp.src('./app/temp/styles/style.css')
		.pipe(browserSync.stream());
	})
});