class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateGrades(grades) {
    var tableBody = document.querySelector('tbody');
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }


    console.log(grades)

    for (var i = 0; i < grades.length; i++) {
      var tr = document.createElement('tr');
      var name = document.createElement('td');
      var course = document.createElement('td');
      var grade = document.createElement('td');
      name.textContent = grades[i].name;
      course.textContent = grades[i].course;
      grade.textContent = grades[i].grade;
      tr.append(name, course, grade);
      tableBody.appendChild(tr);
    }

  }
}
