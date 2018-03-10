// jshint esversion: 6
$( document ).ready(readyNow);

let yearlyCost = 0;
let monthlyCost =0;

function readyNow(){
  $('#addEmployeeButton').on('click', submitInfo);
}

function submitInfo(){
  let uno = $('#firstIn').val();
  let dos = $('#lastIn').val();
  let tres = $('#idIn').val();
  let quatro = $('#titleIn').val();
  let cinco = $('#salaryIn').val();
  $('#blankPage').append('<div>', uno," ", dos," ", tres," ", quatro," ", cinco, '</div>');
  zeCostMonth();
  emptyInput();
  checkCost();
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
