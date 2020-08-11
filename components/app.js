class App {
  constructor() {
    this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess.bind(this);
  }

  handleGetGradesError(error) {
    console.error(error);
  }

  handleGetGradesSuccess(grades) {
    console.log(grades);
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
