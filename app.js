// Template Literals and Default Parameters Value
/*function favMovie(movie = 'The Room', name = 'The World') {
    console.log(`My name is ${name} and my favorite movie is ${movie}`);
}
favMovie();*/

//Arrow Functions

//Concise version
favMovie = (name ='World', movie = 'The Room') => console.log(`My name is ${name} and my favorite movie is ${movie}`);


favMovie();

//First Name Function 1
let getFirstName = (fullName) => {
    return fullName.split(' ')[0]
}; 
console.log(getFirstName('Peter Grant'));

//Concise Version
let getFirstNameTwo = (fullName) => fullName.split(' ');
console.log(getFirstNameTwo('Peter Grant'));





