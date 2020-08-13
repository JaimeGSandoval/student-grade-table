class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.pageHeader = pageHeader;
    this.createGrade = this.createGrade.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.gradeForm = gradeForm;
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);

  }

  handleGetGradesError(error) {
    console.error(error);
  }

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);

    var average = null;
    var averageTotal = null;
    for (var i = 0; i < grades.length; i++) {
      average += grades[i].grade;
    }

    averageTotal = Math.round(average / grades.length);
    this.pageHeader.updateAverage(averageTotal);

  }

  getGrades() {
    $.ajax({
      headers: {
        "X-Access-Token": "S0q6EVR2"
      },
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "GET",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }


  createGrade(name, course, grade) {
    $.ajax({
      headers: {
        "X-Access-Token": "S0q6EVR2"
      },
      data: {
        name: name,
        course: course,
        grade: grade
      },
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "POST",
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }

  handleCreateGradeError(error) {
    console.log(error);
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }

  deleteGrade(id) {
    console.log(id);
    $.ajax({
      headers: {
        "X-Access-Token": "S0q6EVR2"
      },
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      method: "DELETE",
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }

  handleDeleteGradeError(error) {
    console.log(error);
  }

  handleDeleteGradeSuccess() {
    this.getGrades();
  }

  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
}
