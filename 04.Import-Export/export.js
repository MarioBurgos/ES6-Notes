/** export a single value in a single line*/
export const temp = "This text will be exported";
// the name used while exporting has to match the name we use while importing.
// otherwise it vill throw an error, but can be renamed like this:
export { temp as importedValue };

/** export multiple values*/
export { value1, value2, object };
// invalid syntax
// export { key1: value1, key2: value2 }

/** export a function*/
export { sum };

/** default export.  ONLY can be ONE default export in a file !!! */
const defaultValue = 'Alicio';
export default defaultValue;



//declarations
const value1 = 5;
const value2 = 10;
const object = { name: 'Kwijibo', surname: 'Menguelez' };

function sum(n, m) {
    return n + m;
}