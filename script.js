function removeNestedArrays(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        arr.splice(i, 1, ...arr[i]);
        removeNestedArrays(arr);
      }
    }
    return arr;
  }
  
  let arr = [1, 2, 3, 4, [1, 2, 3], [1, [2], 3]];
  let result = removeNestedArrays(arr);
  console.log(result); // [1, 2, 3, 4, 1, 2, 3, 1, 2, 3]