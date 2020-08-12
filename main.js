// "S0q6EVR2"
var table = document.querySelector('table');


var headerEl = document.querySelector('header');
var formEl = document.querySelector('form');
var pageHead = new PageHeader(headerEl);
var gradeTble = new GradeTable(table);
var gradeFormInput = new GradeForm(formEl)
var app = new App(gradeTble, pageHead, gradeFormInput);

app.start();
