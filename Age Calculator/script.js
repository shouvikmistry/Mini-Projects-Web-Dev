
const d = new Date();

document.getElementById("currDate").innerHTML = "Today date is : "+d.getDate() + "/" + (d.getMonth()+1)+"/" + d.getFullYear();

function getDate() {
    let dobString = document.getElementById("myDate").value;
    let dob = new Date(dobString);
    let age = d.getFullYear() - dob.getFullYear();
    document.getElementById("display").innerHTML = "Your DOB is : "+dob.getDate() + "/" + (dob.getMonth()+1)+"/" + dob.getFullYear()+"\n You are "+age+" Years old";
    document.getElementById("age").innerHTML = "You are "+age+" Years old.";

    document.getElementsByClassName("displayAge")[0].style.visibility = "visible";

    document.getElementById("displayAge").style.visibility = "visible";
}

function reloadPage() {
    // Hide the result div
    document.getElementById("displayAge").style.visibility = "hidden";
    // Reset the form by reloading the page
    location.reload();
}


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