// Problem 15:
// Write a program that prints a triangle of palindromic strings. The number of rows in the triangle is determined by the user's input. Each row should contain a palindromic string where the characters are repeated in a mirrored pattern.
// For example, if the user inputs 5, the program should print:
//       1
//     232
//    34543
function printPalindromicTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    // printing spaces
    for (j = 0; j <= rows - i; j++) {
      row += " ";
    }
    // left palindrome
    for (let j = i; j < 2 * i; j++) {
      row += j;
    }
    // right palindrome
    for (let j = 2 * i - 2; j >= i; j--) {
      row += j;
    }
    console.log(row);
  }
}
printPalindromicTriangle(5);
