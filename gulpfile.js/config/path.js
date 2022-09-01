const src = './src';
const dest = './dest';

module.exports = {
  dest,

  pug: {
    dest,
    src: `${src}/pug/*.pug`,
    watch: `${src}/pug/**/*.pug`,
  },

  scss: {
    src: `${src}/scss/*.{sass,scss}`,
    watch: `${src}/scss/**/*.{sass,scss}`,
    dest: `${dest}/css`,
  },

  js: {
    src: `${src}/js/*.js`,
    watch: `${src}/js/**/*.js`,
    dest: `${dest}/js`,
  },
}
