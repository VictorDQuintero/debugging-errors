function average(list) {
    var sum = 0;
  
    for (var num of list) {
      sum += num; // fixed the operators
    }
  
    return sum / list.length;
  } //closed the function's curly brackets
  
console.log(average([3, 5, 7]));