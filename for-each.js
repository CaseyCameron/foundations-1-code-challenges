// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const tempArray = [];
    arr.forEach((item) => {
        tempArray.push(item.name);
    });
    return tempArray;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const tempArray = [];
    arr.forEach((item) => {
        tempArray.push(item.type);
    });
    return tempArray.reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const tempArray = [];
        
    arr.forEach((item) => {
        tempArray.push({nombre: item.name, tipo: item.type});
    });

    return tempArray;
}

