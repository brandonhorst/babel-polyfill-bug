console.log('before polyfill')

require('babel-polyfill')

console.log('polyfill and import')

export {test} from './somefile'

console.log('after import')
