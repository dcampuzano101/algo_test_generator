/*
  Write a function that takes in a Binary Tree (where nodes have an additional
  pointer to their parent node) as well as a node contained in that tree and
  returns the given node's successor.


  A node's successor is the next node to be visited (immediately after the given
  node) when traversing its tree using the in-order tree-traversal technique. A
  node has no successor if it's the last node to be visited in the in-order
  traversal.


  If a node has no successor, your function should return \None /
  \null.


  Each \BinaryTree node has an integer \value, a
  \parent node, a \left child node, and a
  \right child node. Children nodes can either be
  \BinaryTree nodes themselves or \None /
  \null.

\Sample Input
\\tree = 
              1
            /   \
           2     3
         /   \ 
        4     5
       /       
      6  
\node = 5   

\Sample Output
\1
\// This tree's in-order traversal order is:
\// 6 -> 4 -> 2 -> 5 -> 1 -> 3 
\// 1 comes immediately after 5.

*/

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

const findSuccessor = (tree, node) => {};

///////////////////////////////////////////////////////////////////////////////////////////
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

const runEncoding = (string) => {};

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
Write a function that takes in a Binary Search Tree (BST) and a target integer
value and returns the closest value to that target value contained in the BST.

You can assume that there will only be one closest value.

Each BST node has an integer value, a
left child node, and a right child node. A node is
said to be a valid BST node if and only if it satisfies the BST
property: its value is strictly greater than the values of every
node to its left; its value is less than or equal to the values
of every node to its right; and its children nodes are either valid
BST nodes themselves or None / null.

Sample Input tree:  
          10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14

*/
// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findClosestValueInBst = (tree, target) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  - Invert Binary Tree -
  Write a function that takes in a Binary Tree and inverts it. In other words,
  the function should swap every left node in the tree for its corresponding
  right node.


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
       1
    /     \
   3       2
 /   \   /   \
7     6 5     4
            /   \
           9     8

*/

const invertBinaryTree = (tree) => {};

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////
/*

Write a function that takes in an array of integers and returns a sorted
version of that array. Use the Bubble Sort algorithm to sort the array.


If you're unfamiliar with Bubble Sort, we recommend watching the Conceptual
Overview section of this question's video explanation before starting to code.

Sample Input
array = [8, 5, 2, 9, 5, 6, 3]
Sample Output
[2, 3, 5, 5, 6, 8, 9]

*/

const bubbleSort = (array) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Given an array of integers between <span>1</span> and <span>n</span>,
inclusive, where <span>n</span> is the length of the array, write a function
that returns the first integer that appears more than once (when the array is
read from left to right).


In other words, out of all the integers that might occur more than once in the
input array, your function should return the one whose first duplicate value
has the minimum index.


If no integer appears more than once, your function should return 1

Note that you're allowed to mutate the input array
Sample Input #1
  array = [2, 1, 5, 2, 3, 3, 4]

Sample Output #1
  2 // 2 is the first integer that appears more than once.
*/

const firstDuplicateValue = (array) => {};

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
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

  Write a function that takes in an array of unique integers and returns an
  array of all permutations of those integers in no particular order.

If the input array is empty, the function should return an empty array.
Sample Input 
array = [1, 2, 3]

Sample Output:
[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
*/

const permutations = (array) => {}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
