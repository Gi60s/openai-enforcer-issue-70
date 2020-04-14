
const path = require('path')
const Enforcer = require('openapi-enforcer')

Enforcer(path.resolve(__dirname, 'openapi.yml'), { fullResult: true })
  .then(data => {
    const [ openapi, err, warn ] = data;
    if (openapi) {
      if (warn) {
        console.log('Success, but with some warnings')
        console.log(warn)
      } else {
        console.log('Success! No errors or warnings.')
      }
    } else {
      console.log(err)
    }
  })
  .catch(err => {
    console.error(err)
  })
