class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }

  updateAverage(newAverage) {
    var averageNum = document.querySelector('.averageGrade');
    if (!newAverage) {
      averageNum.textContent = '0'
    } else {
      averageNum.textContent = newAverage;
    }
  }
}
