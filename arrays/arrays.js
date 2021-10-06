// Adds to first position 
cities.unshift()

// Erases first position
cities.shift()

// Add to last position
cities.push()

// Erases last position
cities.pop()

// Return index position
cities.indexOf()

// Check if value is included
cities.includes()

// use arrays for lists of data

let friends = [`winnie`, `robbie`, `margot`];
console.log(`Your first friend is ${friends[0]}`);

let years = [2000, 1994, 2020, 1980];
console.log(years.includes(1980))
console.log(years)


let friends = [`winnie`, `robbie`, `margot`];

let age = (name, birthYear) => {
    let calcAge = 2021 - birthYear;
    return `${name} is ${calcAge} years old`
}
console.log(age(friends[1], years[1]));

