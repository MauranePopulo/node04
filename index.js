require ('dotenv').config() // this line is mandatory when you want to read variables from the '.env' file 
const myName = process.env.MY_NAME;
const myCity = process.env.MY_CITY; 
const myLanguage = process.env.MY_LANGUAGE;

const message = `Hello my name is ${myName}, I am from ${myCity} and I am learning the language "${myLanguage}" and many more`
console.log(message);