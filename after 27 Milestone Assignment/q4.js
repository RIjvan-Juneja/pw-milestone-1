function findHighestMarks(marks) {
    var highestMarks = marks[0]; // Initialize highest marks with the first student's marks
  
    // Iterate through the array to find the highest marks
    for (var i = 1; i < marks.length; i++) {
      highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
    }
  
    return highestMarks;
  }
  
  // Example usage
  var marks = [85, 90, 78, 95, 88]; // Marks of five students
  var highestMarks = findHighestMarks(marks);
  console.log("Highest marks: " + highestMarks);
  