// solve these problems using any method you like!

/* 

Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

*/

/*
Output: 
//{
    apple: 3,
    banana: 1,
    'dog food': 5,
    milk: 2,
    cheese: 4
}
*/

// { 
//     id: 'apple',
//     price: 3,
//     quantity: 2,
//     category: 'fruit'
// },

export function organizePricesByKey(arr) {
    let output = {};
    
    arr.forEach((item) => {
        output[item.id] = item.price; //item.id becomes the key. item.price the value
    });
    return output;
}

/*
Output: 
{
    apple: { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    banana: { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    'dog food': { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    milk: { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
    cheese:    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    }
}
*/

export function makeAHashMap(arr) {
    let output = {};
    
    arr.forEach((item) => {
        output[item.id] = item; //item.id becomes the key. item (the whole object) becomes the value
    });
    return output;
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
    let output = {};
    
    arr.forEach((item) => {
        if (!output[item.category]){ //if there is no value in output's item.category's key
            output[item.category] = 1; //initialize it
        } else {
            output[item.category]++; //otherwise add to it
        }
    });

    return output;
}