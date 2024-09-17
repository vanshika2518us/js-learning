// ++++++++++ 1] DEFINE A STRING ++++++++++++++++

// denoted by both double and single quotes
const name = "VANSHIKA"
const repoCount = "50"
//console.log(typeof repoCount);

const gameName = new String('hitesh-hc-com')


// Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);






// ++++++++++ 2] SOME STRING FUNCTIONS  ++++++++++++++++

// 1. length: Returns the length of the string.
const str= "hello , how are you?"
console.log(`the length of string is ${str.length} `); //20 



// 2. a)charAt(index): Returns the character at the specified index.
console.log(`the element at index 9 is ${str.charAt(9)}`);
     // b) charCodeAt(index): Returns the Unicode of the character at the specified index.
console.log(`the ascii code of element at index 9 is ${str.charCodeAt(3)}`);



// 3. toUpperCase() and toLowerCase()
const upper_str = str.toUpperCase();
console.log(upper_str);
console.log(upper_str.toLowerCase());



// 4. includes(substring): Checks if the string contains the given substring.,returns true or false
console.log(str.includes("hell")); // true
console.log(str.includes("Hell")); //false , case sensitive
// console.log(str.includes(" o"));



// 5. a) indexOf(substring): Returns the index of the first occurrence of the substring, or -1 if not found.
//    b)lastIndexOf(substring): Returns the index of the last occurrence of the substring, or -1 if not found.
console.log(str.indexOf("re"));
console.log(str.lastIndexOf("o"));



// 6. a)slice(start, end): Extracts a section of the string and returns it as a new string.
//    b)substring(start, end): Similar to slice, but does not accept negative indices.



// 7. substr(start, length): Returns a substring, starting at the specified index and extracting a number of characters.


// 8. split(delimiter): Splits the string into an array based on the specified delimiter.



// 9. a) replace(searchValue, newValue): Replaces the first match of searchValue with newValue.
//    b) replaceAll(searchValue, newValue): Replaces all matches of searchValue with newValue.

// 10 a) trim(): Removes whitespace from both ends of the string.
//    b)trimStart() / trimEnd(): Removes whitespace from the start/end of the string.



// 11. a)startsWith(substring): Checks if the string starts with the given substring.
//     b)endsWith(substring): Checks if the string ends with the given substring.


// 12. concat(string): Combines two or more strings.




// 13. repeat(count): Repeats the string for the specified number of times.



