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

/*
Output:
`8truckvroom`
or
`truckvroom8`
or
`truck8vroom`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    Object.keys(someObject);
    const name = Object.keys(someObject)[0];
    const age = Object.keys(someObject)[1];
    const type = Object.keys(someObject)[2];
    //arr.map(item => names.push(item.name + item.type));
    return `${name} + ${age} + ${type}`;
}

export function makeStringArray(arr) {
    const names = [];
    arr.map(item => names.push(item.name + item.type));
    return names;
}


/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    return [];
}
