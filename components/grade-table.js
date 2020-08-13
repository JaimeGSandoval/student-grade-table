class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades) {
    var tableBody = document.querySelector('tbody');

    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }

    if (grades.length === 0) {
      this.noGradesElement.classList.remove('d-none');
    } else {
      this.noGradesElement.classList.add('d-none');
    }

    for (var i = 0; i < grades.length; i++) {
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
