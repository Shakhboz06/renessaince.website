const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')
const sass = require('gulp-sass')(require('sass'))

// sources
const paths = {
    styles: {
        src: {
            // Бери отсюда
            custom: './Styles/Sass/*.sass'
        },
        // Ставь сюда
        dist: './Styles/CSS/'
    }
}

sass.compiler = require('node-sass');

// styles custom optimize
function CustomStyles() {
    return gulp.src(paths.styles.src.custom)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(autoprefixer({ overrideBrowserslist: ['> 3%'], cascade: false }))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(gulp.dest(paths.styles.dist))
}

// watchin' onchange
function watch() {
    gulp.watch(paths.styles.src.custom, CustomStyles)
}

gulp.task('styles', CustomStyles)
gulp.task('watch', watch)

gulp.task('build', gulp.parallel(CustomStyles))
gulp.task('default', gulp.series('build', 'watch'))