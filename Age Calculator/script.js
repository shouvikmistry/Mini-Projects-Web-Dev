
const d = new Date();

document.getElementById("currDate").innerHTML = "Today date is : "+d.getDate() + "/" + d.getMonth()+"/" + d.getFullYear();































//  // JavaScript code to display the current date
//  const currentDateElement = document.getElementById('currDate');

//  // Create a new Date object
//  const currentDate = new Date();

//  // Extract individual date components
//  const year = currentDate.getFullYear();
//  const month = currentDate.getMonth() + 1; // Months are zero-based
//  const day = currentDate.getDate();

//  // Format the date string
//  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

//  // Display the formatted date in the specified element
//  currentDateElement.textContent = `Today's Date is: ${formattedDate}`;