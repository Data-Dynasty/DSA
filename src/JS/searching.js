// Linear Search
function linearSearch(arr, target) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      if (arr[i] === target) {
        return i; // Return the index of the found element
      }
    }
    return -1; // Element not found
  }
  
  // Binary Search (Assumes the array is sorted in ascending order)
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid; // Return the index of the found element
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1; // Element not found
  }
  
  // Depth-First Search (DFS)
  function dfs(graph, start, visited = new Set()) {
    visited.add(start);
    console.log(start);
    const neighbors = graph[start];
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(graph, neighbor, visited);
      }
    }
  }
  
  // Testing the searching algorithms
  let array = [1, 5, 8, 12, 22];
  
  let index = linearSearch(array, 8);
  console.log('Linear Search:', index); // Output: 2
  
  index = binarySearch(array, 12);
  console.log('Binary Search:', index); // Output: 3
  
  let graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: ['G'],
    G: [],
  };
  
  console.log('Depth-First Search:');
  dfs(graph, 'A'); // Output: A B D E C F G
  