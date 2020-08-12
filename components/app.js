class App {
  constructor(gradeTable, pageHeader) {
    this.gradeTable = gradeTable;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.pageHeader = pageHeader;

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

  start() {
    this.getGrades();
  }
}
