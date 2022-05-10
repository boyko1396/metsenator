// modules

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const pug = require('gulp-pug');
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sync = require("browser-sync").create();

const autoprefixerList = [
	'Chrome >= 45',
	'Firefox ESR',
	'Edge >= 12',
	'Explorer >= 10',
	'iOS >= 9',
	'Safari >= 9',
	'Android >= 4.4',
	'Opera >= 30'
];

// Страницы ПАГ
const buildTemplate = () => {
	return gulp.src(['src/*.pug'])
		.pipe(sourcemap.init())
		.pipe(pug({
			pretty: true
		}))
		.pipe(sourcemap.write())
		.pipe(gulp.dest('build/'))
		.pipe(sync.stream());
}
exports.buildTemplate = buildTemplate;

// Папка Load 
const buildLoad = () => {
	return gulp.src(['src/load/*.pug'])
		.pipe(sourcemap.init())
		.pipe(pug({
			pretty: true
		}))
		.pipe(sourcemap.write())
		.pipe(gulp.dest('build/load/'))
		.pipe(sync.stream());
}
exports.buildLoad = buildLoad;

// Sass/Scss
const createCss = () => {
	return gulp.src("src/scss/**/*.+(sass|scss)")
		.pipe(plumber(function (err) {
			console.log("Styles Task Error");
			console.log(err);
			this.emit("end");
		}))
		.pipe(sourcemap.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({ // добавим префиксы
				overrideBrowserslist: autoprefixerList,
				cascade: false,
				grid: true
		}))
		.pipe(sourcemap.write("."))
		.pipe(gulp.dest("build/css/"))
		.pipe(sync.stream());
}
exports.createCss = createCss;

// Перенос css файлов (по типу normalize.css)
const moveCss = () => {
	return gulp.src("src/scss/libs/*.css")
		.pipe(sourcemap.init())
		.pipe(gulp.dest("build/css/"));
}
exports.moveCss = moveCss;

// Картинки
const images = () => {
	return gulp.src("src/img/*")
		.pipe(sourcemap.init())
		.pipe(gulp.dest("build/img/"))
		.pipe(sync.stream());
}
exports.images = images;

// Скрипты 
const scripts = () => {
	return gulp.src("src/js/*")
		.pipe(sourcemap.init())
		.pipe(gulp.dest("build/js/"))
		.pipe(sync.stream());
}
exports.scripts = scripts;

// Шрифты  
// const fonts = () => {
// 	return gulp.src("src/fonts/*")
// 		.pipe(sourcemap.init())
// 		.pipe(gulp.dest("build/fonts/"))
// 		.pipe(sync.stream());
// }
// exports.fonts = fonts;

// Server
const server = (done) => {
	sync.init({
		server: {
			baseDir: 'build'
		},
		cors: true,
		notify: false,
		ui: false,
	});
	done();
}
exports.server = server;

// Watcher
const watch = () => {

	gulp.watch('src/js/*', gulp.series("scripts"));
	gulp.watch('src/img/*', gulp.series("images"));
	// gulp.watch('src/fonts/*', gulp.series("fonts"));
	gulp.watch('src/scss/**/*.+(sass|scss)', gulp.series("createCss"));
	gulp.watch('src/scss/libs/*.css)', gulp.series("moveCss"));
	gulp.watch('src/**/*.pug', gulp.series("buildTemplate"));
	gulp.watch('src/load/*.pug', gulp.series("buildLoad"));
	// gulp.watch("build/*.html").on("change", sync.reload);
}

// gulp watch
exports.watch = watch;

// gulp build/default
exports.default = gulp.series(
	buildTemplate, buildLoad, createCss, moveCss, scripts, images, server, watch
);
// gulp develop
exports.dev = gulp.series(
	server, watch
);