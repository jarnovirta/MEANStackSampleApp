var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

 gulp.task('js', function() {
	gulp.src(['ng/module.js', 'ng/**/*.js'])
		.pipe(sourcemaps.init())
			.pipe(concat('app.js'))
			//.pipe(ngAnnotate())
			//.pipe(uglify())
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest('assets'))
}); 