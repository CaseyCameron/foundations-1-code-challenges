// solve these problems using any method you like!



export function organizePricesByKey(arr) {
    return arr.reduce((acc, current) => {
        acc[current.id] = current.price;
        return acc;
    }, {});
}


export function makeAHashMap(arr) {
    return arr.reduce((acc, current) => {
        acc[current.id] = current;
        return acc;
    }, {});
}


/*
Output: 
{
    fruit: 2,
    other: 1,
    dairy: 2
}
*/

export function countByCategory(arr) {
    return arr.reduce((acc, current) => {
        acc[current.category] += 1;
        return acc;
    }, { fruit: 0, other: 0, dairy: 0 });
}
