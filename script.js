let header = document.getElementById("Header");
header.innerHTML = "Experience books!";

let year = 2024;
let favoritebook = "Harry Potter";
let date = 10+9;

alert("Your favorite book is " + favoritebook + " and the year is " + year + " and the date is " + date);
console.log(favoritebook + " is a great book!")

let text;
let today = new Date();
let release = new Date();

release.setFullYear(2024, 9, 10)

if (today == release || today > release) {
  text = "You can now read your book!";
}
else {
  text = "You can't read your book yet!";
}
console.log(text);