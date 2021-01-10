/*
Given a non-empty string of lowercase letters and a non-negative integer
representing a key, write a function that returns a new string obtained by
shifting every letter in the input string by k positions in the alphabet,
where k is the key.

Note that letters should "wrap" around the alphabet; in other words, the
letter <span>z</span> shifted by one returns the letter <span>a</span>.

Sample Input
string = "xyz"
key = 2
Sample Output
"zab"

*/

const caesarCipher = (string, key) => {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let newPosition = (alpha.indexOf(string[i]) + key) % 26;
    result += alpha[newPosition];
  }
  return result;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function that takes in an array of integers and returns a boolean
representing whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are
entirely non-increasing or entirely non-decreasing.

Non-increasing elements aren't necessarily exclusively decreasing; they simply
don't increase. Similarly, non-decreasing elements aren't necessarily
exclusively increasing; they simply don't decrease.

Note that empty arrays and arrays of one element are monotonic.
Sample Input
    array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

Sample Output
    true
*/

const isMonotonic = (array) => {
  let isNonIncreasing = true;
  let isNonDecreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }
  return isNonDecreasing || isNonIncreasing;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function that takes in an n x m two-dimensional array (that can be
square-shaped when n == m) and returns a one-dimensional array of all the
array's elements in spiral order.

Spiral order starts at the top left corner of the two-dimensional array, goes
to the right, and proceeds in a spiral pattern all the way until every element
has been visited.

Sample Input: 
array = [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7],
]

Sample Output
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

*/

const spiralTraverse = (array) => {
  let startCol = 0;
  let endCol = array[0].length - 1;
  let startRow = 0;
  let endRow = array.length - 1;
  let result = [];

  while (startCol <= endCol && startRow <= endRow) {
    for (let row = startRow; row <= endCol; row++) {
      result.push(array[startRow][row]);
    }

    for (let row = startRow; row <= endRow ; row++) {
      result.push(array[row][endCol])
    }

    for (let col = )
  }

};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function that takes in a non-empty string and that returns a boolean
representing whether the string is a palindrome.

A palindrome is defined as a string that's written the same forward and
backward. Note that single-character strings are palindromes.

Sample Input
  string = "abcdcba"
Sample Output
  true // it's written the same forward and backward
*/
const isPalindrome = (string, target) => {
  let i = 0;
  let j = string.length - 1;

  while (i < j) {
    if (string[i] !== string[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function that takes in a non-empty string and returns its run-length
encoding.

From Wikipedia, "run-length encoding is a form of lossless data compression in
which runs of data are stored as a single data value and count, rather than as
the original run." For this problem, a run of data is any sequence of
consecutive, identical characters. So the run "AAA" would be
run-length-encoded as "3A".

To make things more complicated, however, the input string can contain all
sorts of special characters, including numbers. And since encoded data must be
decodable, this means that we can't naively run-length-encode long runs. For
example, the run "AAAAAAAAAAAA" (12 As), can't
naively be encoded as "12A", since this string can be decoded as
either "AAAAAAAAAAAA" or "1AA. Thus, long runs (runs
of 10 or more characters) should be encoded in a split fashion; the
aforementioned run should be encoded as "9A3A".

Sample Input
    string = "AAAAAAAAAAAAABBCCCCDD"

Sample Output
    "9A4A2B4C2D"
*/

const runEncoding = (string) => {
  let counter = 1;
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i+1] || counter === 9) {
      result += `${counter}${string[i]}`;
      counter = 1;
    } else {
      counter++;
    }
  }
  return result;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
The distance between a node in a Binary Tree and the tree's root is called the
node's depth.

Write a function that takes in a Binary Tree and returns the sum of its nodes'
depths.

Each BinaryTree node has an integer value, a
left child node, and a right child node. Children
nodes can either be BinaryTree nodes themselves or
None / null.

Sample Input

tree =    1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
 /   \
8     9

Sample Output
  16
 The depth of the node with value 2 is 1.
 The depth of the node with value 3 is 1.
 The depth of the node with value 4 is 2.
 The depth of the node with value 5 is 2.
 Etc..
 Summing all of these depths yields 16.

*/

const nodeDepths = (root) => {
  let stack = [{ node: root, depth: 0}];
  let sumOfDepths = 0;

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (!node) continue;
    sumOfDepths += depth;

    stack.push({ node: node.left, depth: depth + 1})
    stack.push({ node: node.right, depth: depth + 1})
  }
  return sumOfDepths;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
You're given an array of integers and an integer. Write a function that moves
all instances of that integer in the array to the end of the array and returns
the array.


The function should perform this in place (i.e., it should mutate the input
array) and doesn't need to maintain the order of the other integers.

Input:
array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove= 2

Sample Output
[1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently</span>

*/

const moveElementToEnd = (array, target) => {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    while (i < j && array[j] === target) {
      j--;
    }

    if (array[i] === target) {
      [array[i], array[j]] = [array[j], array[i]];
    }

    i++;
  }
  return array;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
The Fibonacci sequence is defined as follows: the first number of the sequence
is 0, the second number is 1, and the nth number is the sum of the (n - 1)th
and (n - 2)th numbers. Write a function that takes in an integer
n and returns the nth Fibonacci number.

Important note: the Fibonacci sequence is often defined with its first two
numbers as F0 = 0 and F1 = 1. For the purpose of
this question, the first Fibonacci number is F0; therefore,
getNthFib(1) is equal to F0, getNthFib(2)
is equal to F1, etc..

*/
const getNthFib = (n) => {
  // base case n = 1 , n = 2 
  if (n === 1) return 0
  if (n === 2) return 1

  return getNthFib(n - 1) + getNthFib(n - 2);
};

const getNthFibIteratively = (n) => {
  let fibs = [0, 1];


  while (fibs.length < n) {
    let last = fibs[fibs.length - 1]
    let second = fibs[fibs.length - 2]
    fibs.push(last + second);
  }
  return fibs[fibs.length - 1];
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

  Write a function that takes in a Binary Tree and returns a list of its branch
  sums ordered from leftmost branch sum to rightmost branch sum.

  A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
  branch is a path of nodes in a tree that starts at the root node and ends at
  any leaf node.


  Each BinaryTree< node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
          1
        /     \
       2       3
     /   \    /  \
    4     5  6    7
  /   \  /
 8    9 10
Sample Output
  [15, 16, 18, 10, 11]
15 == 1 + 2 + 4 + 8
16 == 1 + 2 + 4 + 9
18 == 1 + 2 + 5 + 10
10 == 1 + 3 + 6
11 == 1 + 3 + 7

*/

const branchSums = (root) => {
  let sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
};

const calculateBranchSums = (node, runningSum, sums) => {
  if (!node) return;

  let newSum = runningSum + node.value;

  if (!node.left && !node.right) {
    return sums.push(newSum);
  }

  calculateBranchSums(node.left, newSum, sums);
  calculateBranchSums(node.right, newSum, sums);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function that takes in an array of integers and returns a sorted
version of that array. Use the Selection Sort algorithm to sort the array.

If you're unfamiliar with Selection Sort, we recommend watching the Conceptual
Overview section of this question's video explanation before starting to code.

Sample Input
    array[8, 5, 2, 9, 5, 6, 3]
Sample Output
    [2, 3, 5, 5, 6, 8, 9]

*/

const selectionSort = (array) => {
  let startIndex = 0;

  while (startIndex < array.length) {
    let smallestIndex = startIndex;

    for (let i = smallestIndex + 1; i < array.length; i++) {
      if (array[i] < array[smallestIndex]) {
        smallestIndex = i;
      }

    }
    [array[smallestIndex], array[startIndex]] = [array[startIndex], array[smallestIndex]];
    startIndex++;
  }
  return array;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
