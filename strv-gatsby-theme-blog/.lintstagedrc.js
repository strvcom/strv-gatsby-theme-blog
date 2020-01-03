'use strict'

module.exports = {
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write', 'git add'],
}
