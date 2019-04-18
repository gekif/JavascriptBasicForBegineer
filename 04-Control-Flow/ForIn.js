const person = {
    name: 'Fikar',
    age: 31
};

/**
 * For In Loop
 * Loop the object
 * Like Foreach in PHP
 */
for(let key in person)
    console.log(key, person[key]);


const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);
