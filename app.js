// Template Literals and Default Parameters Value
/*function favMovie(movie = 'The Room', name = 'The World') {
    console.log(`My name is ${name} and my favorite movie is ${movie}`);
}
favMovie();*/

//Arrow Functions

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





