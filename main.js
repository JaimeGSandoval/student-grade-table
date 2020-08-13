// "S0q6EVR2"
var table = document.querySelector('table');

var noGradesText = document.querySelector('.noGradesText');
var headerEl = document.querySelector('header');
var formEl = document.querySelector('form');
var pageHead = new PageHeader(headerEl);
var gradeTble = new GradeTable(table, noGradesText);
var gradeFormInput = new GradeForm(formEl)
var app = new App(gradeTble, pageHead, gradeFormInput);

app.start();
