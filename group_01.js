var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];


function person(employe) {
  this.name = employe[0];
  this.employeId = employe[1];
  this.salary = employe[2];
  this.rating = employe[3];
}// cunstruction function turns array into object

var atticus = new person(atticus);
var jem = new person(jem);
var boo = new person(boo);
var scout = new person(scout);
// var runs person function new each time and stores under corisponding var

 var employees = [atticus, jem, boo, scout];

for (var i = 0; i < employees.length; i++) {
  var report = empReport(employees[i]);
  console.log(report);
}


function empReport(emp) {
  var employeeName = emp.name;
  var empId = emp.employeId;
  var salary = parseInt(emp.salary);
  var rating = emp.rating;
  var bonus = 0;
  var output = [];
  output[0] = emp.name;
  output[1] = calcBonus(rating, empId, salary)
  output [2] = salary + (bonus * salary);
  output [3] = Math.round(calcBonus(rating, empId, salary) * salary);
// changed the var = to type of object instead of index in array

  return output;
}

function calcBonus(rating, empId, salary) {
  var bonus = 0;
  switch (rating) {
    case 5:
      bonus = 0.1
      break;
    case 4:
      bonus = .06
      break;
    case 3:
      bonus = .04
      break;
    default:
      bonus = 0.0
  }
  if (empId.length === 4) {
    bonus += .05;// thought this wasn't working when problem was wrote it =+ instead of +=
  }
  if (salary > 65000) {
    bonus -= .01;
  }
  if (bonus > .13) {
    bonus = .13;
  }
  return bonus;
}
