var gulp = require('gulp'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    zip = require('gulp-zip'),
    imagemin = require('gulp-imagemin');

gulp.task('pug', function () {
    return gulp.src('project/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('dist'))
})

gulp.task('sass', function () {
    return gulp.src('project/css/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix('last 2 versions')) 
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css')) 
})

gulp.task('js', function () {
    return gulp.src(['project/js/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js')) 
})

gulp.task('imagesminify', function () {
    return gulp.src('project/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
})  
    

gulp.task('compress', function () {
    return gulp.src('dist/**/*.*')
        .pipe(zip('website.zip'))
        .pipe(gulp.dest('.'))
})

gulp.task('watch', function () {
    gulp.watch("project/**/*.pug", gulp.series("pug"));
    gulp.watch("project/css/**/*.scss", gulp.series("sass"));
    gulp.watch("project/js/*.js", gulp.series("js"));
    gulp.watch("project/images/**/*", gulp.series("imagesminify"));
    // gulp.watch("dist/**/*.*", gulp.series("compress"));
})

