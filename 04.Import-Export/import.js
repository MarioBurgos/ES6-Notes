// importing single values
import { temp } from './export.js';
import { value1, value2, object, sum } from './export.js';

// importing named value
import { importedValue } from './export.js';

//importing everything in the file
import * as Imports from './export.js';

// importing default
import defaultValue from './export.js';





console.log(temp);
console.log(value1 + value2);
console.log(object);
console.log(importedValue);
console.log(sum(50, 50));
console.log(defaultValue);


// logging from import * from
// console.log(Imports.temp);
// console.log(Imports.value1 + Imports.value2);
// console.log(Imports.importedValue);