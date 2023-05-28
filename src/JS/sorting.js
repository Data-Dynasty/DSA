// Bubble Sort
function bubbleSort(arr) {
    const len = arr.length;
    let swapped;
    for (let i = 0; i < len - 1; i++) {
      swapped = false;
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
      }
      if (!swapped)
        break; // Array is already sorted
    }
    return arr;
  }
  
  // Selection Sort
  function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        // Swap elements
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }
  
  // Insertion Sort
  function insertionSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }
  
  // Merge Sort
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] < right[rightIdx]) {
        result.push(left[leftIdx]);
        leftIdx++;
      } else {
        result.push(right[rightIdx]);
        rightIdx++;
      }
    }
    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
  }
  
  // Quick Sort
  function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
      const partitionIdx = partition(arr, low, high);
      quickSort(arr, low, partitionIdx - 1);
      quickSort(arr, partitionIdx + 1, high);
    }
    return arr;
  }
  
  function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        // Swap elements
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    // Swap elements
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }
  
  // Heap Sort
  function heapSort(arr) {
    const len = arr.length;
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      heapify(arr, len, i);
    }
    for (let i = len - 1; i >= 0; i--) {
      // Swap root with current element
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }
    return arr;
  }
  
  function heapify(arr, len, rootIdx) {
    let largest = rootIdx;
    let left = 2 * rootIdx + 1;
    let right = 2 * rootIdx + 2;
    if (left < len && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== rootIdx) {
      // Swap elements
      [arr[rootIdx], arr[largest]] = [arr[largest], arr[rootIdx]];
      heapify(arr, len, largest);
    }
  }
  
  
  let array = [5, 2, 8, 12, 1];
  
  let sortedArray = bubbleSort([...array]);
  console.log('Bubble Sort:', sortedArray); // Output: [1, 2, 5, 8, 12]
  
  sortedArray = selectionSort([...array]);
  console.log('Selection Sort:', sortedArray); // Output: [1, 2, 5, 8, 12]
  
  sortedArray = insertionSort([...array]);
  console.log('Insertion Sort:', sortedArray); // Output: [1, 2, 5, 8, 12]
  
  sortedArray = mergeSort([...array]);
  console.log('Merge Sort:', sortedArray); // Output: [1, 2, 5, 8, 12]
  
  sortedArray = quickSort([...array]);
  console.log('Quick Sort:', sortedArray); // Output: [1, 2, 5, 8, 12]
  
  sortedArray = heapSort([...array]);
  console.log('Heap Sort:', sortedArray); // Output: [1, 2, 5, 8, 12]
  