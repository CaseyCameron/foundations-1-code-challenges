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
    for(let [key, value] of Object.entries(someObject)){
        scream[key.toUpperCase()] = value;
    }
    return scream;

    // //Object.entries({wheels: someObject.wheels.toUpperCase(), type: someObject.type.toUpperCase(), goes: someObject.type.toUpperCase() });
    // for (let key in someObject){
    //     let value = someObject[key];
    //     let upperCaseKey = key.toUpperCase();
    //     scream[upperCaseKey] = value;
    // }
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
    const expectedArray = Object.entries(someObject);
    return expectedArray;
}
