module.exports = {
  hooks: {
    'pre-commit': 'npm --prefix ../frontend run precommit',
    'pre-push': 'npm --prefix ../frontend run prepush',
  },
}
