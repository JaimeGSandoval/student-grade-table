class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }

  updateAverage(newAverage) {
    var averageNum = document.querySelector('.averageGrade');
    averageNum.textContent = newAverage;
  }
}
