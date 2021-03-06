// Template Literals and Default Parameters Value
function favMovie(movie = 'The Room', name = 'The World') {
    console.log(`My name is ${name} and my favorite movie is ${movie}`);
}
favMovie();

//~Arrow Functions~

//Concise version
favMovie = (name = 'World', movie = 'The Room') => console.log(`My name is ${name} and my favorite movie is ${movie}`);


favMovie();

//First Name Function 1
let getFirstName = (fullName) => {
    return fullName.split(' ')[0]
};
console.log(getFirstName('Peter Grant'));

//Concise Version
let getFirstNameTwo = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameTwo('Peter Grant'));

//Returning an object literal with two parameters 
let total = ((p1, p2) => ({
    squared: Math.pow(p1 + p2, 2),
    product: p1 * p2}
))(3,6);

console.log(`${total.squared} ${total.product}`)



//Spread Syntax
myFavFood = (name, location, favFood) => {
    return name + location+ favFood;
}
let arr = ['Captain Holt','New York','Plain Toast'];

console.log(...arr)

//or

myFavFood = (name, location, favFood) => (`${name}${location}${favFood}`)
let arr = ['Captain Holt','New York','Plain Toast'];

console.log(...arr)

var myName = 'Peter'
let myNameFunction = (personName) => {
    let chars = [...personName];
    for (i = 0; i < chars.length; i++ ) {
        console.log(chars[i])
    }
}

myNameFunction(name);

//Or

var myName = 'Peter'
let myNameFunction = (personName) => {
    let stringArr = [...personName];
    stringArr.forEach(character => {
        console.log(character)
    }) 
}

myNameFunction(myName);


