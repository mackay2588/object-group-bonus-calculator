class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 );
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log( employees );


$(document).ready(function(){

  //on click call get name
  $('#subBtn').on('click', getName);

  function getName(){

    let name = $('#employeeName').val();
    calcBonus(name);

    //reset form
    $('form')[0].reset();

  }

});




//create function to calculate bonus of 1 employee
function calcBonus(name){

  //bonus variable
  let bonusPerc = 0;
  let bonusTotal = 0;
  let totalComp = 0;

  //loop over employees array to get correct employee
  for( let employee of employees){
    //make sure correct employee
    if(employee.name.toLowerCase() == name.toLowerCase()){
      //get props

      //log name
      console.log(employee.name);

      let annualSalary = employee.annualSalary;
      let reviewRating = employee.reviewRating;
      let employeeIdNumLength = employee.employeeNumber.length;

      //change salary to number from string
      annualSalary = parseInt(annualSalary);

      //math

      //fifteen year employee bonus
      if(employeeIdNumLength === 4){
        bonusPerc += 0.05;
        //employee rating bonus
        if(reviewRating <= 2){
          bonusPerc = bonusPerc;
        }
        else if(reviewRating === 3){
          bonusPerc += 0.04;
        }
        else if(reviewRating === 4){
          bonusPerc += 0.06;
        }
        else if(reviewRating === 5){
          bonusPerc += 0.10;
        }

        //if salary about 65k subtract 1%
        if(annualSalary >= 65000){
          bonusPerc -= 0.01;
        }
      }
      //less than 15 years
      else{
        //employee rating bonus
        if(reviewRating <= 2){
          bonusPerc = 0;
        }
        if(reviewRating === 3){
          bonusPerc = 0.04;
        }
        else if(reviewRating === 4){
          bonusPerc = 0.06;
        }
        else if(reviewRating === 5){
          bonusPerc += 0.10;
        }

        //if salary about 65k subtract 1%
        if(annualSalary >= 65000){
          bonusPerc -= 0.01;
        }
      }

      //bonus limits
      if(bonusPerc > 0.13){
        bonusPerc = 0.13;
      }
      else if( bonusPerc < 0){
        bonusPerc = 0;
      }
        console.log(bonusPerc);

      //calc bonus total
      bonusTotal = annualSalary * bonusPerc;
        console.log(bonusTotal);

      //calc total comp
      totalComp = annualSalary + bonusTotal;
        console.log(totalComp);

        //build object
        let employeeObj = {name: name, bonusPercentage: bonusPerc, totalCompensation: totalComp, totalBonus: bonusTotal};
        console.log(employeeObj);

        //calling append function to add to DOM
        appendToDOM(employeeObj);

        return employeeObj;

    }
  }
}

function appendToDOM(empObj){

  let name = empObj.name;
  let bonusPerc = empObj.bonusPercentage;
  let totalComp = empObj.totalCompensation;
  let totalBonus = empObj.totalBonus;

  $('#bonusOutput').empty();

  //add to DOM
  $('#bonusOutput').append('<div>'+ name + ' ' + bonusPerc + ' ' + totalComp + ' ' + totalBonus + '</div>');



}
