// CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternative-flavor')
console.log(data);
require('./mind-grenade')

sayHi(names.john)
sayHi(names.peter)