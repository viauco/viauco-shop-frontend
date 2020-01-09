const tasks = arr => arr.join(' && ')

module.exports = {
  'hooks': {
    'pre-commit --no-verify': tasks([
      'lint-staged'
    ]),
    'pre-push --no-verify': tasks([
      'yarn test:unit'
    ])
  }
}
