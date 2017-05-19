var tmplFolder = 'tmpl'; //template folder
var srcFolder = 'src'; //source folder
var buildFolder = 'build'; //build folder


var gulp = require('gulp');
var watch = require('gulp-watch');
var fs = require('fs');
var combineTool = require('magix-combine');
var del = require('del');
var ts = require('typescript');
var gulpCopy = require('gulp-copy');


combineTool.config({
    compressCss: false,
    tmplFolder: tmplFolder,
    srcFolder: srcFolder,
    compressCssSelectorNames: true,
    cssSelectorPrefix: 'x',
    md5CssFileLen: 1,
    md5CssSelectorLen: 2,
    compileBeforeProcessor: function(content, from) {
        //console.log('compile ',from);
        var str = ts.transpileModule(content, {
            compilerOptions: {
                module: ts.ModuleKind.None
            }
        });
        str = str.outputText.replace('"use strict";', '');
        str = str.replace('exports.__esModule = true;', ''); //这个的，不要～
        return str;
    }
});
gulp.task('copyImages', () => {
    gulp.src(['./tmpl/images/*'])
        .pipe(gulp.dest('./src/images'));
});

gulp.task('copyImagesBuild', () => {
    gulp.src(['./tmpl/images/*'])
        .pipe(gulp.dest('./build/images'));
});
gulp.task('cleanSrc', function() {
    return del(srcFolder);
});
gulp.task('combine', ['cleanSrc','copyImages'], function() {
    return combineTool.combine();
});
gulp.task('watch', ['combine'], function() {
    watch(tmplFolder + '/**/*', function(e) {
        console.log(e.path);
        if (fs.existsSync(e.path)) {
            combineTool.processFile(e.path);
        } else {
            combineTool.removeFile(e.path);
        }
    });
});

var uglify = require('gulp-uglify');
gulp.task('cleanBuild', function() {
    return del(buildFolder);
});
gulp.task('build', ['cleanBuild','copyImagesBuild'], function() {
    combineTool.config({
        compressCss: true
    });


    combineTool.combine().then(() => {
        gulp.src(srcFolder + '/**/*.js')
            .pipe(uglify({
                compress: {
                    drop_console: true
                },
                output: {
                    ascii_only: true
                }
            }))
            .pipe(gulp.dest(buildFolder));
    });
});