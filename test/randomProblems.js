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

const isMonotonic = (array) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
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

const caesarCipher = (string, key) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Given two non-empty arrays of integers, write a function that determines
whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent
in the array but that are in the same order as they appear in the array. For
instance, the numbers [1, 3, 4] form a subsequence of the array
[1, 2, 3, 4], and so do the numbers [2, 4]. Note
that a single number in an array and the array itself are both valid
subsequences of the array.

Sample Input = [5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]
Sample Output = true

*/

const validSequence = (array, sequence) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Sorted array of integers and target integer
use binarySearch algorithm

return index of target or -1
*/

const binarySearch = (array, target) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. The function should find all triplets in
the array that sum up to the target sum and return a two-dimensional array of
all these triplets. The numbers in each triplet should be ordered in ascending
order, and the triplets themselves should be ordered in ascending order with
respect to the numbers they hold.

If no three numbers sum up to the target sum, the function should return an
  empty array.

Sample Input
array = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0

Sample Output<
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

*/

const threeNumberSum = (array, target) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

  Write three functions that take in a Binary Search Tree (BST) and an empty
  array, traverse the BST, add its nodes' values to the input array, and return
  that array. The three functions should traverse the BST using the in-order,
  pre-order, and post-order tree-traversal techniques, respectively.


  If you're unfamiliar with tree-traversal techniques, we recommend watching the
  Conceptual Overview section of this question's video explanation before
  starting to code.


  Each BST node has an integer value, a
  left child node, and a right child node. A node is
  said to be a valid BST node if and only if it satisfies the BST
  property: its value is strictly greater than the values of every
  node to its left; its value is less than or equal to the values
  of every node to its right; and its children nodes are either valid
  BST nodes themselves or None / null.

Sample Input
tree =   10
       /     \
      5      15
    /   \       \
   2     5       22
 /
1
array = []

Sample Output
  inOrderTraverse: [1, 2, 5, 5, 10, 15, 22] // where the array is the input array
  preOrderTraverse: [10, 5, 2, 1, 5, 15, 22] // where the array is the input array
  postOrderTraverse: [1, 2, 5, 5, 22, 15, 10] // where the array is the input array

*/

const inOrderTraverse = (tree, array) => {};

const preOrderTraverse = (tree, array) => {};

const postOrderTraverse = (tree, array) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. If any two numbers in the input array sum
up to the target sum, the function should return them in an array, in any
order. If no two numbers sum up to the target sum, the function should return
an empty array.

Note that the target sum has to be obtained by summing two different integers
in the array; you can't add a single integer to itself in order to obtain the
target sum.

You can assume that there will be at most one pair of numbers summing up to
the target sum.

Sample Input
  array = [3, 5, -4, 8, 11, 1, -1, 6]
  targetSum = 10
Sample Output
  [-1, 11] the numbers could be in reverse order

*/
const twoSum = (arr, target) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
You're given a Node class that has a name and an
array of optional children nodes. When put together, nodes form
an acyclic tree-like structure.


Implement the depthFirstSearch method on the
Node class, which takes in an empty array, traverses the tree
using the Depth-first Search approach (specifically navigating the tree from
left to right), stores all of the nodes' names in the input array, and returns
it.


If you're unfamiliar with Depth-first Search, we recommend watching the
Conceptual Overview section of this question's video explanation before
starting to code.

Sample Input

graph = A
     /  |  \
    B   C   D
   / \     / \
  E   F   G   H
     / \   \
    I   J   K

Sample Output

  ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]

*/

const depthFirstSearch = (array) => {};

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

const spiralTraverse = (array) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function that takes in an array of integers and returns the length of
the longest peak in the array.

A peak is defined as adjacent integers in the array that are strictly
increasing until they reach a tip (the highest value in the peak), at which
point they become strictly decreasing. At least three integers are required to
form a peak.

For example, the integers 1, 4, 10, 2 form a peak, but the
integers 4, 0, 10 don't and neither do the integers
1, 2, 2, 0. Similarly, the integers 1, 2, 3 don't
form a peak because there aren't any strictly decreasing integers after the
3.

Sample Input
array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

Sample Output
// 0, 10, 6, 5, -1, -3

*/

const longestPeak = (array) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
