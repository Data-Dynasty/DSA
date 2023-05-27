
## Practice Pattern
- [x] [Top questions](https://leetcode.com/explore/featured/card/top-interview-questions-easy/})

### Important Concepts
This README covers some of the important concepts in Algorithm technique that every developer should know.

| S.No | Name                                    | Type       | Use Case                                |
|------|-----------------------------------------|------------|-----------------------------------------|
| 1    | Sliding Window                          | Time       | String/Array manipulation, subarrays    |
| 2    | Islands (Matrix Traversal)              | Time       | Matrix manipulation, graph algorithms   |
| 3    | Two Pointers                            | Time/Space | Array manipulation, searching           |
| 4    | Fast & Slow Pointers                    | Time/Space | Linked List manipulation, cycle detection|
| 5    | Merge Intervals                         | Time       | Interval merging, interval manipulation |
| 6    | Cyclic Sort                             | Time       | Array sorting, finding missing elements |
| 7    | In-place Reversal of a LinkedList       | Space      | Linked List manipulation, reversing     |
| 8    | Tree Breadth-First Search               | Time       | Tree traversal, level-order traversal   |
| 9    | Tree Depth First Search                 | Time       | Tree traversal, preorder/postorder       |
| 10   | Two Heaps                               | Space      | Priority Queue, finding median          |
| 11   | Subsets                                 | Space      | Combinatorial problems, power set        |
| 12   | Modified Binary Search                  | Time       | Sorted array problems, search variations|
| 13   | Bitwise XOR                             | Time       | Bit manipulation, finding unique elements|
| 14   | Top ‘K’ Elements                        | Time       | Array manipulation, finding top K        |
| 15   | K-way Merge                             | Time       | Array merging, k-way merge algorithms    |
| 16   | Topological Sort                        | Time       | Directed Graph, dependency resolution   |
| 17   | 0/1 Knapsack                            | Time       | Dynamic Programming, optimization       |
| 18   | Fibonacci Numbers                       | Time       | Dynamic Programming, sequence problems   |
| 19   | Palindromic Subsequence                 | Time       | String manipulation, palindrome problems|
| 20   | Longest Common Substring                | Time       | String manipulation, substring problems  |



<details>
  <summary> String manupulation</summary>

  ## Here's an example of the string manupulation technique commonly used:

1. Concatenation: Combining multiple strings into one by using the concatenation operator (+) or the `concat()` method.

2. Length: Finding the length of a string using the `length` property or the `length` method.

3. Accessing Characters: Accessing individual characters in a string by using square brackets (`[]`) or the `charAt()` method.

4. Substring: Extracting a portion of a string by specifying the start and end indices using the `substring()` method.

5. Searching: Searching for a substring or a specific character within a string using methods like `indexOf()`, `lastIndexOf()`, or `includes()`.

6. Case Conversion: Changing the case of characters in a string using methods like `toUpperCase()` and `toLowerCase()`.

7. Reversal: Reversing the order of characters in a string, often accomplished by using a combination of techniques like splitting the string, reversing the array, and joining it back.

8. Splitting and Joining: Splitting a string into an array of substrings using `split()` based on a specified delimiter, and joining an array of strings into a single string using `join()`.

9. Trimming: Removing leading and trailing whitespace characters from a string using `trim()`, `trimStart()`, or `trimEnd()`.

10. Replace: Replacing occurrences of a substring within a string using `replace()`.

11. Regular Expressions: Performing advanced pattern matching and manipulation using regular expressions. JavaScript provides the `RegExp` object and related methods (`test()`, `match()`, `replace()`, etc.) for working with regular expressions.

12. Parsing: Parsing strings into other data types, such as converting a string representation of a number to an actual number using `parseInt()` or `parseFloat()`.

These techniques provide a foundation for manipulating strings in various ways. Depending on the specific requirements and scenarios, additional techniques and methods may be applicable.

Remember to consult the JavaScript documentation for detailed explanations and examples of each technique.


</details>




<details>
  <summary> Array manupulation</summary>

  ## Here's an example of the manupulation technique:
  Here are several common array manipulation techniques:

1. **Sorting**: Rearranging the elements of an array in a specific order, such as ascending or descending. Common sorting algorithms include Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort.

2. **Reversing**: Flipping the order of elements in an array.

3. **Searching**: Finding the index or presence of a specific element in an array. Common search algorithms include Linear Search and Binary Search.

4. **Filtering**: Creating a new array containing only the elements that meet certain criteria or conditions.

5. **Mapping**: Creating a new array by applying a transformation or operation to each element of the original array.

6. **Reducing**: Accumulating or reducing an array into a single value by applying an operation on each element, such as calculating the sum, product, or average.

7. **Concatenating**: Combining multiple arrays into a single array.

8. **Slicing**: Extracting a portion or subset of an array based on specified start and end indices.

9. **Insertion**: Adding new elements at a specific position within an array.

10. **Deletion**: Removing elements from an array at a specific position.

11. **Updating**: Modifying the value of an element at a specific index within an array.

12. **Merging**: Combining two or more arrays into a single sorted array.

13. **Rotating**: Shifting the elements of an array in a circular manner by a certain number of positions.

14. **Partitioning**: Dividing an array into two parts based on a specified condition or pivot element.

15. **Copying**: Creating a new array with the same elements as an existing array.

16. **Filling**: Assigning a specific value to all or a portion of an array.

17. **Unique Values**: Finding or removing duplicate values from an array, leaving only the unique values.

18. **Chunking**: Splitting an array into smaller chunks or subarrays of a specific size.

19. **Flattening**: Transforming a multi-dimensional array into a one-dimensional array.

20. **Shuffling**: Randomly rearranging the elements of an array.

These techniques can be combined or modified based on specific requirements and problem contexts. Each technique serves different purposes in manipulating arrays effectively.


  ```javascript
  function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  let array = [5, 2, 8, 12, 1];
  let sortedArray = bubbleSort(array);
  console.log(sortedArray); // Output: [1, 2, 5, 8, 12]
```
</details>