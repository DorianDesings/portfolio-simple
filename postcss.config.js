module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({ stage: 3 }),
    require('cssnano')({
      preset: 'default'
    })
  ]
};
