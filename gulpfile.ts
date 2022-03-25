import gulp from 'gulp'
import babel from 'gulp-babel'
import babelConfig from './babel.config'

const src = './src'
const dist = './dist'
const isProduction = process.env.NODE_ENV === 'production'

function ts2cjs () {
  return gulp.src(`${src}/**/*.ts`)
    .pipe(babel(babelConfig))
    .pipe(gulp.dest(dist))
}

function watcher () {
  gulp.watch(`${src}/**/*.ts`, gulp.series(ts2cjs))
}

const series: Array<any> = [ts2cjs]
if (!isProduction) {
  series.push(watcher)
}
export default gulp.series(...series)
