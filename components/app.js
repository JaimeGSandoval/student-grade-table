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
    console.log(name, course, grade);
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
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
    this.getGrades();
  }

  handleGradeError(error) {
    console.log(error);
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }

  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
  }
}
