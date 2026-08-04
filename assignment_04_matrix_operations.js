
// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
//helper function to read a matrix from user input
function readMatrix(rows, cols) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = readlineSync.question(`Enter row ${i + 1}: `).split(' ').map(Number);
    if (row.length !== cols) {
      console.log(`Error: Expected ${cols} columns, but got ${row.length}. Please try again.`);
      return null;
    }
    matrix.push(row);
  }
  return matrix;
}
//helper function to display a matrix in a neat format
function displayMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(' '));
  }
}
//part A: function to transpose a matrix
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let transposed = [];
  for (let j = 0; j < cols; j++) {
    let newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    transposed.push(newRow);
  }
  return transposed;
}
//part B: function to add two matrices
function addMatrices(matrixA, matrixB) {
  const rows = matrixA.length;
    const cols = matrixA[0].length;
    let sum = [];
    for (let i = 0; i < rows; i++) {
      let newRow = [];
      for (let j = 0; j < cols; j++) {
        newRow.push(matrixA[i][j] + matrixB[i][j]);
      }
      sum.push(newRow);
    }
    return sum;
  }
  //part C: function to multiply two matrices
function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;
  let product = [];
  for (let i = 0; i < rowsA; i++) {
    let newRow = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      newRow.push(sum);
    }
    product.push(newRow);
  }
  return product;
}
//main function to run the program
function main() {
  // Part A: Transpose a Matrix
  console.log('--- Part A: Transpose a Matrix ---');
  const rowsA = readlineSync.questionInt('Enter number of rows: ');
  const colsA = readlineSync.questionInt('Enter number of columns: ');
  const matrixA = readMatrix(rowsA, colsA);
  if (matrixA) {
    console.log('Original Matrix:');
    displayMatrix(matrixA);
    const transposed = transposeMatrix(matrixA);
    console.log('Transposed Matrix:');
    displayMatrix(transposed);
  }
  console.log('\n--- Part B: Add Two Matrices ---');
  const rowsB = readlineSync.questionInt('Enter number of rows for both matrices: ');
  const colsB = readlineSync.questionInt('Enter number of columns for both matrices: ');
  console.log('Matrix A:');
  const matrixB1 = readMatrix(rowsB, colsB);
  console.log('Matrix B:');
  const matrixB2 = readMatrix(rowsB, colsB);
  if (matrixB1 && matrixB2) {
    console.log('Matrix A:');
    displayMatrix(matrixB1);
    console.log('Matrix B:');
    displayMatrix(matrixB2);
    const sum = addMatrices(matrixB1, matrixB2);
    console.log('Sum of Matrices:');
    displayMatrix(sum);
  }
  console.log('\n--- Part C: Multiply Two Matrices ---');
  const rowsC1 = readlineSync.questionInt('Enter number of rows for Matrix A: ');
  const colsC1 = readlineSync.questionInt('Enter number of columns for Matrix A (and rows for Matrix B): ');
  const rowsC2 = colsC1;
  const colsC2 = readlineSync.questionInt('Enter number of columns for Matrix B: ');
  console.log('Matrix A:');
  const matrixC1 = readMatrix(rowsC1, colsC1);
  console.log('Matrix B:');
  const matrixC2 = readMatrix(rowsC2, colsC2);
  if (matrixC1 && matrixC2) {
    console.log('Matrix A:');
    displayMatrix(matrixC1);
    console.log('Matrix B:');
    displayMatrix(matrixC2);
    const product = multiplyMatrices(matrixC1, matrixC2);
    console.log('Product of Matrices:');
    displayMatrix(product);
  }
}
main();