// Define constant.

const roomRent = 75;

// This function gets all the input data and validates them.

function getInputValues() {
  // Get all the input values.
  const name = document.querySelectorAll("#name")[0].value;
  const mobile = document.querySelectorAll("#mobile")[0].value;
  const email = document.querySelectorAll("#email")[0].value;
  const inDate = document.querySelectorAll("#inDate")[0].value;
  const inTime = document.querySelectorAll("#inTime")[0].value;
  const outDate = document.querySelectorAll("#outDate")[0].value;
  const outTime = document.querySelectorAll("#outTime")[0].value;


  // Validate the input values and return the valid input data.
  inputData = validateInput({name, mobile, email, inDate, inTime, outDate, outTime}); 

  return inputData;

}

// This function validates the raw input data.

function validateInput(rawData) {

  const {name, mobile, email, inDate, inTime, outDate, outTime} = rawData;

  //console.log(name, mobile, email, inDate, inTime, outDate, outTime);

  // If any of the input data fields is empty, return false.
  if (name == "" || mobile == "" || email == "" || inDate == "" || inTime == "" || outDate == "" || outTime == "") {
  	return false;
  }
  
  // Make inDateTime and outDateTime objects.
  inMillisec = Date.parse(inDate + " " + inTime)
  //console.log(inDate + " " + inTime, inMillisec)
  if (isNaN(inMillisec)) {
     return false;
  } else {
     inDateTime = new Date(inMillisec);
  }
	
  outMillisec = Date.parse(outDate + " " + outTime)
  //console.log(outDate + " " + outTime, outMillisec)
  if (isNaN(outMillisec)) {
     return false;
  } else {
     outDateTime = new Date(outMillisec);
  }

  // outDateTime should be greater than inDateTime.
  if (outDateTime <= inDateTime) {
     return false;
  }

  // Create valid input data object and return it.
  inputData = {
    name,
    mobile,
    email,
    inDateTime,
    outDateTime,
  }

  return inputData; 
}

// This function rounds a floating point to specific decimal places.
function round(num, place) {
  let multiple = Math.pow(10, place);
  let roundNum = Math.round(num * multiple) / multiple;
  return roundNum;
}

// This function calculate percentage of room rent.
function calcPercentageRent(percentage) {
  return round((percentage * roomRent / 100), 2);
}

// This function calculate the charges for check-in day.
function getChargeCheckIn(checkInDateTime) {
  let percentage = 0
 
  console.log(checkInDateTime.getHours())
	
  if (checkInDateTime.getHours() < 8) {
    percentage = 100;
  } else if (checkInDateTime.getHours() >= 8 && checkInDateTime.getHours() <= 12) {
    percentage = 75;
  } else {
    percentage = 50;
  }
  
  let charge = calcPercentageRent(percentage)
  console.log(percentage, charge)
  return charge;
}

// This function calculate the charges for check-out day.
function getChargeCheckOut(checkOutDateTime) {
  let percentage = 0

  console.log(checkOutDateTime.getHours())

  if (checkOutDateTime.getHours() < 8) {
    percentage = 0;
  } else if (checkOutDateTime.getHours() >= 8 && checkOutDateTime.getHours() <= 12) {
    percentage = 50;
  } else {
    percentage = 75;
  }

  let charge = calcPercentageRent(percentage)
  console.log(percentage, charge)
  return charge;
}

function getBillOutput(checkIn, checkOut) {
  const oneDay = 24 * 60 * 60 * 1000;
  let numOfDays = Math.round((checkOut - checkIn) / oneDay);
  let numOfFullDays = numOfDays - 1;
  if (checkIn.getHours() > 8) {
    numOfFullDays = numOfFullDays - 1 
  }
  
  let totalBillCharge = numOfFullDays * roomRent + getChargeCheckIn(checkIn) + getChargeCheckOut(checkOut);
  
  return {numOfDays, totalBillCharge}
  
}

// This function generate bill for hotel check-in and check-out.
function generateBill() {
  inputData = getInputValues();
  if (!inputData){
    alert("Input Data is not Valid");
    return false;
  } 
  
  const {numOfDays, totalBillCharge} = getBillOutput(inputData.inDateTime, inputData.outDateTime)
  console.log(numOfDays, totalBillCharge)
  
}



