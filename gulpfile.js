const gulp          = require("gulp");
			sass          = require('gulp-sass');
			browserSync   = require('browser-sync');
			autoprefixer  = require('gulp-autoprefixer');
			plumber       = require('gulp-plumber');
			pug           = require('gulp-pug');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		//browser: 'firefox', // Запускает сайт в Firefox
		// open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('pug', function(){
	return gulp.src('app/pug/*.pug')
			.pipe(pug({pretty: true}))
			.pipe(plumber())
			.pipe(gulp.dest('app/'))
			.pipe(browserSync.stream())
});

gulp.task('sass', function(){
	return gulp.src('app/sass/*.sass')
			.pipe(sass())
			.pipe(gulp.dest('app/css'))
			.pipe(plumber())
			.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
			.pipe(browserSync.stream())
});

gulp.task('html', function(){
	return gulp.src('app/*.html')
		.pipe(browserSync.stream())
});

gulp.task('js', function(){
	return gulp.src('app/js/*.js')
		.pipe(browserSync.stream())
});

gulp.task('watch', function() {
		gulp.watch('app/pug/*.pug', gulp.parallel('pug')); // Наблюдение pug
		gulp.watch('app/sass/*.sass', gulp.parallel('sass')); // Наблюдение sass
		gulp.watch('app/*.html', gulp.parallel('html')); // Наблюдение HTML
		gulp.watch('app/js/**/*.js', gulp.parallel('js')); // Наблюдение JS
});

//Замена gulp watch на gulp
gulp.task('default', gulp.parallel('watch', 'browser-sync'));