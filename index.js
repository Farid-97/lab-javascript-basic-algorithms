// Iteration 1: Names and Input
let hacker1= "Farid"; /*driver*/
let hacker2= "Caroline"; /* navegator */

// Iteration 2:
console.log(hacker1.length);
console.log(hacker2.length);
 let name1= (hacker1.length);
 let name2= (hacker2.length);
 if (name1 > name2) {
    console.log(`The driver has the longest name ${name1} characters.`)
    } else if (name1 < name2) {
        console.log(`It seems that the navigator has the longest name, it has ${name2} characters`)
 } else (
    console.log (`Wow, you both have equally long names ${name1}, ${name2} characters!`)
 )

// Iteration 3: Loops

let result = '';
for (let i = 0; i < hacker1.length; i++ ) {
    hacker1[i];
    result += hacker1[i].toUpperCase() + ' ';
}
console.log(result);
let result1 = " ";
for (let i = hacker2.length - 1; i >=0; i-- ) {
    result1 += hacker2[i]
} console.log (result1);
if (hacker1 > hacker2) {
    console.log("The driver\'s name goes first ");
    } else if (hacker1 < hacker2) {
        console.log("Yo, the navegator goes first definetely");
 } else {
    console.log ("What! You both have the same name?");
 }
 /*function longText(str) {
 let word= 0;
 for (let i = 0; i <longText.length; i++) {
  if (str(i) === " ") {
    word= +1;
  }
}
word += 1;
 }
 console.log(longText()); */
 let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium magna aliquam urna interdum accumsan. Integer vel ante sit amet metus gravida tempus at eget orci. Nulla venenatis leo eget eros rutrum sagittis. Ut posuere lobortis sodales. Sed elit nisi, dictum sit amet enim et, tincidunt dictum nunc. Donec interdum massa quis tincidunt elementum. Morbi porta quam ut lectus sodales, nec convallis metus aliquet. Donec convallis, leo eget vestibulum mattis, odio nulla tempor tortor, sed condimentum augue tortor quis felis. In a ultrices nisl. In convallis libero vitae laoreet suscipit. Phasellus in eros eget nisi pretium viverra. Etiam a posuere mauris. Aenean pulvinar sollicitudin dolor. Phasellus at maximus mauris. Sed neque tellus, suscipit ac libero eget, feugiat semper orci. Morbi fringilla rutrum erat, ut lobortis ipsum euismod non. Praesent sed nunc ut est congue faucibus vitae sed turpis. Maecenas dolor libero, suscipit nec elementum non, interdum bibendum enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi consectetur felis et semper ultrices. Nam maximus dui purus, nec pellentesque mi elementum ac. Etiam vel nulla et nibh rutrum pretium. Nullam dignissim mi purus, quis ultrices orci tempor commodo. Phasellus tristique augue id lacus pharetra, laoreet bibendum tellus egestas. Duis orci tortor, bibendum eget convallis vel, efficitur ut leo. Nunc suscipit erat eu ante dignissim viverra. Cras tempor et augue nec elementum. Integer sagittis augue a dui blandit venenatis at rutrum diam. Suspendisse pellentesque porta nisi eget fermentum. Donec in fringilla tellus. Aenean id cursus arcu, quis malesuada nisi. Vestibulum placerat nisl id dictum facilisis. Suspendisse ut hendrerit nulla. Nunc vitae rutrum arcu, suscipit vehicula elit. Aliquam dapibus neque tristique diam semper vulputate. Vestibulum facilisis blandit turpis, nec imperdiet dui tempor ac.'
    console.log(longText.length);
let count = (longText.match(/et/g) || []) .length;
console.log(count);
 //
 let phraseToCheck = "checkPalimdrome";
 const Palim = phraseToCheck.length;
  for (let i = 0; i < Palim; i++) {
    if (phraseToCheck[i] !== phraseToCheck[Palim - 1 - i]) {
    }
  } console.log("It is a Palomdrome")