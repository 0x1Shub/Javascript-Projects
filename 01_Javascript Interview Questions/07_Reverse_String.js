let string = "Hello World";

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString(string));
