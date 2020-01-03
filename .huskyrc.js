module.exports = {
  hooks: {
    'pre-commit': 'yarn workspace strv-gatsby-theme-blog precommit',
    'pre-push': 'yarn workspace strv-gatsby-theme-blog prepush',
  },
}
