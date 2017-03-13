#!/usr/bin/env babel-node

import fixtures from '../test/fixtures'

fixtures.setupPhantom()

Promise
    .all([
      fixtures.setupWD(),
      fixtures.setupProxy(),
      fixtures.setupStub()
    ])
    .then(() => console.log('test preparation complete.'))
    .catch(err => console.error(err))
