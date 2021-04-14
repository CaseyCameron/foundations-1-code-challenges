// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/

/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    const scream = {};
    //Object.entries({wheels: someObject.wheels.toUpperCase(), type: someObject.type.toUpperCase(), goes: someObject.type.toUpperCase() });
    for (let key in someObject){
        let value = someObject[key];
        let upperCaseKey = key.toUpperCase();
        scream[upperCaseKey] = value;
    }
    return scream;
}


export function makeWeirdStringFromKeys(someObject) {
    Object.keys(someObject);
    const name = Object.keys(someObject)[0];
    const age = Object.keys(someObject)[1];
    const type = Object.keys(someObject)[2];
    return `${name} + ${age} + ${type}`;
}

export function makeStringArray(arr) {
    const names = [];
    arr.map(item => names.push(item.name + item.type));
    return names;
}

export function makeTuples(someObject) {
    const keys = Object.keys(someObject);
    const values = Object.values(someObject);
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    arr1.push(keys[0], values[0]);
    arr2.push(keys[1], values[1]);
    arr3.push(keys[2], values[2]);
    const expectedArray = []
    expectedArray.push(arr1, arr2, arr3);
    return expectedArray;
}

const expected = [
    ['name', 'scooter'],
    ['age', 1],
    ['type', 'puppy']
];