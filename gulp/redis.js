var gulp = require('gulp');
var shell = require('gulp-shell');
exec = require('child_process').exec;

gulp.task('start:redis-server', function() {
    exec('redis-server', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
});