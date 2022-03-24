import gulp from 'gulp'
import babel from 'gulp-babel'

const src = './src'
const dist = './dist'
const isProduction = process.env.NODE_ENV === 'production'
const babelConfig = { presets: ['@babel/typescript'] }

function ts2cjs () {
  return gulp.src(`${src}/**/*.ts`)
    .pipe(babel({
      ...babelConfig,
      plugins: [
        ([
          require.resolve('babel-plugin-module-resolver'),
          {
            root: ['./'],
            alias: {
              '@root': './',
              '@src': './src',
              '@': './src'
            }
          }
        ] as any),
        '@babel/plugin-transform-modules-commonjs'
      ]
    }))
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
