class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateGrades(grades) {
    var tableBody = document.querySelector('tbody');
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }

    for (var i = 0; i < grades.length; i++) {
      // var tr = document.createElement('tr');
      // var name = document.createElement('td');
      // var course = document.createElement('td');
      // var grade = document.createElement('td');
      // name.textContent = grades[i].name;
      // course.textContent = grades[i].course;
      // grade.textContent = grades[i].grade;
      // tr.append(name, course, grade);

      var tr = this.renderGradeRow(grades[i], this.deleteGrade);
      tableBody.appendChild(tr);
    }

  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var tr = document.createElement('tr');
    var nameTd = document.createElement('td');
    var courseTd = document.createElement('td');
    var gradeTd = document.createElement('td');
    var btnTd = document.createElement('td');
    var btn = document.createElement('button');

    nameTd.textContent = data.name;
    courseTd.textContent = data.course;
    gradeTd.textContent = data.grade;
    btn.textContent = "DELETE";
    btn.classList.add('btn-danger');

    btnTd.appendChild(btn);
    tr.append(nameTd, courseTd, gradeTd, btnTd);
    btn.addEventListener('click', function () {
      deleteGrade(data.id);
    })

    return tr;
  }
}
