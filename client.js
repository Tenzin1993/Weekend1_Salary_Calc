// jshint esversion: 6

$( document ).ready(readyNow);

function readyNow(){
  $('#addEmployeeButton').on('click', submitInfo);
}

function submitInfo(){
  let uno = $('#firstIn').val();
  let dos = $('#lastIn').val();
  let tres = $('#idIn').val();
  let quatro = $('#titleIn').val();
  let cinco = $('#salaryIn').val();
  $('#blankPage').append(uno, dos, tres, quatro + cinco);
  emptyInput();
}

function emptyInput(){
  $('#firstIn').val("");
  $('#lastIn').val("");
  $('#idIn').val("");
  $('#titleIn').val("");
  $('#salaryIn').val("");
}
