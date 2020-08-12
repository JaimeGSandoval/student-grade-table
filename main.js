// "S0q6EVR2"
var table = document.querySelector('table');


var headerElement = document.querySelector('header');
var pageHeader = new PageHeader(headerElement);
var gradeTable = new GradeTable(table);
var app = new App(gradeTable, pageHeader);

app.start();
