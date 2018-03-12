// jshint esversion: 6
$( document ).ready(readyNow);

let yearlyCost = 0;
let monthlyCost = 0;
let employeeList= [];

class Employee {
  constructor( uno, dos, tres, cuatro, cinco){
    this.firstName = uno;
    this.lastName = dos;
    this.id = tres;
    this.jobTitle = cuatro;
    this.salary = cinco;
  }
}

function readyNow(){
  $('#addEmployeeButton').on('click', submitInfo);
  $('#content').on('click', ".ripEmployee", removePerson);
}

function submitInfo(){
  if($('#firstIn').val() == "" || $('#lastIn').val() == "" || $('#idIn').val() == "" || $('#titleIn').val() == "" || $('#salaryIn').val() == ""){
    return false;
  }
  addToArray();
  appendToDom();
  zeCostMonth();
  emptyInput();
  checkCost();
}

function removePerson(){
//I need a way to select the specfic index
  employeeList.shift();
  appendToDom();

}

function appendToDom(){
  let outputElement = $('#content');
  outputElement.empty();
  for (let employee of employeeList){
    outputElement.append('<tr><td>' + employee.firstName +'</td><td>' + employee.lastName + '</td><td>' + employee.id + '</td><td>' + employee.jobTitle +'</td><td>'+ employee.salary + '</td><td>' + '<button class = "ripEmployee">Terminate</button>' + '</td></tr>');
  }
}

function addToArray(){
  employeeList.push(new Employee($('#firstIn').val(), $('#lastIn').val(), $('#idIn').val(), $('#titleIn').val(), $('#salaryIn').val() ));
}

function checkCost(){
  if(monthlyCost > 20000){
    $('#totalMonthCost').css('background','red');
  }
}

function emptyInput(){
  $('#firstIn').val("");
  $('#lastIn').val("");
  $('#idIn').val("");
  $('#titleIn').val("");
  $('#salaryIn').val("");
}

function zeCostMonth(){
  yearlyCost = parseInt($('#salaryIn').val()) + yearlyCost;
  monthlyCost = (yearlyCost / 12);
  $('#totalMonthCost').empty();
  $('#totalMonthCost').append('Total Monthly Cost: ' + monthlyCost);
}
