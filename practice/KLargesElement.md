# Kth Largest Element in an Array

## Problem

Given an array `nums` and an integer `k`, find the kth largest element in the array.

## Original Solution

The original solution sorts the input array `nums` and uses linear search to find the kth largest element. This has a time complexity of O(n log n) due to sorting and O(1) space complexity because it uses an in-place sorting algorithm.

```javascript
let arr = [3, 2, 1, 5, 6, 4];

function largestEl(arr, k) {
    const output = arr.sort((a, b) => a - b);
    let n = arr.length
    for (let i = n - 1; i >= 0; i--) {
        if (arr[i] == arr[n - k]) {
          const kthLargest = output[i];
          console.log(kthLargest);
          return kthLargest;
        }
    }
}
largestEl(arr, 2);
```

## Better Solutions

### Divide and Conquer

In the divide and conquer approach, the array is recursively partitioned into smaller subarrays, and the kth largest element is selected based on the size of the subarray that contains the pivot element. This algorithm has average-case time complexity of O(n) and worst-case time complexity of O(n^2) due to poor pivot selection. However, it can be optimized to use a randomized pivot selection in order to eliminate the worst-case scenario.

```javascript
var findKthLargest = function(nums, k) {
  return divideAndConquer(nums, k, 0, nums.length - 1);
}

function divideAndConquer(nums, k, left, right) {
  const pivotIndex = partition(nums, left, right);
  const pivotRank = right - pivotIndex + 1;

  if (pivotRank === k) {
    return nums[pivotIndex];
  } else if (pivotRank > k) {
    return divideAndConquer(nums, k, pivotIndex + 1, right);
  } else {
    return divideAndConquer(nums, k - pivotRank, left, pivotIndex - 1);
  }
}

function partition(nums, left, right) {
  const pivot = nums[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (nums[j] <= pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  [nums[i], nums[right]] = [nums[right], nums[i]];
  return i;
}
```

### Heap (Priority Queue)

In the heap approach, we maintain a max heap of size `k` and iterate over the input array, adding each element to the heap and removing the root element (smallest element) if the heap size exceeds `k`. The root element of the heap is then the kth largest element. This algorithm has time complexity of O(n log k) due to heap operations and space complexity of O(k) to store the heap.

```javascript
var findKthLargest = function(nums, k) {
  const heap = new MaxHeap(nums.slice(0, k));
  for (let i = k; i < nums.length; i++) {
    if (nums[i] < heap.peek()) {
      heap.pop();
      heap.push(nums[i]);
    }
  }
  return heap.peek();
}

class MaxHeap {
  constructor(values = []) {
    this.values = [];
    for (const value of values) {
      this.push(value);
    }
  }

  push(value) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
  }

  pop() {
    const result = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown(0);
    }
    return result;
  }

  peek() {
    return this.values[0];
  }

  bubbleUp(index) {
    const value = this.values[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];
      if (parent >= value) {
        break;
      }
      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  sinkDown(index) {
    const value = this.values[index];
    while (true) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < this.values.length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > value) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < this.values.length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > value) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) {
        break;
      }
      this.values[index] = this.values[swap];
      this.values[swap] = value;
      index = swap;
    }
  }
}
```

### Quick Select

In the quick select approach, we partition the array around a randomly selected pivot element and recursively select the kth largest element from the appropriate partition. This algorithm has average-case time complexity of O(n) and worst-case time complexity of O(n^2) due to poor pivot selection. However, it can be optimized to use a randomized pivot selection in order to eliminate the worst-case scenario.

```javascript
var findKthLargest = function(nums, k) {
  return quickSelect(nums, k, 0, nums.length - 1);
}

function quickSelect(nums, k, left, right) {
  const pivotIndex = partition(nums, left, right);
  const pivotRank = right - pivotIndex + 1;

  if (pivotRank === k) {
    return nums[pivotIndex];
  } else if (pivotRank > k) {
    return quickSelect(nums, k, pivotIndex + 1, right);
  } else {
    return quickSelect(nums, k - pivotRank, left, pivotIndex - 1);
  }
}

function partition(nums, left, right) {
  const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
  const pivot = nums[pivotIndex];
  let i = left;
  for (let j = left; j < right; j++) {
    if (nums[j] >= pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  [nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]];
  return i;
}
```

## Complexity Analysis

| Algorithm | Time Complexity | Space Complexity |
| --- | --- | --- |
| Original | O(n log n) | O(1) |
| Divide and Conquer | O(n) average case, O(n^2) worst case | O(1) (in-place) |
| Heap | O(n log k) | O(k) |
| Quick Select | O(n) average case, O(n^2) worst case | O(1) (in-place) |

Overall, the heap and quick select approaches are more efficient than the original and divide and conquer approaches. The divide and conquer approach has the potential to be optimized with randomized pivot selection to give it a similar time complexity to the other approaches, but its worst-case time complexity is still a concern. The heap and quick select approaches both have O(n) average case time complexity and O(1) space complexity. The heap approach has a higher time complexity due to the use of a heap, but it has the advantage of being able to handle large k values efficiently. The quick select approach has a lower time complexity but is less efficient for large k values.
