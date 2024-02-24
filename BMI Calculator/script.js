
const currentDate = new Date();

document.getElementById("currDate").innerHTML = "Today date is : "+currentDate.getDate() + "/" + (currentDate.getMonth()+1)+"/" + currentDate.getFullYear();

function getDate() {
    let dobString = document.getElementById("myDob").value;
    let dob = new Date(dobString);
    let age = currentDate.getFullYear() - dob.getFullYear();// Calculate the difference in years
    // Check if the birthday has occurred this year

    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        age--;
    }
    document.getElementById("age").innerHTML = "You are "+age+" Years old.";

    // document.getElementsByClassName("displayAge")[0].style.visibility = "visible";

    document.getElementById("displayAge").style.visibility = "visible";
}

function reloadPage() {
    // Hide the result div
    document.getElementById("displayAge").style.visibility = "hidden";
    // Reset the form by reloading the page
    location.reload(); // method is a JavaScript method that reloads the current web page. 
}

//  // Extract individual date components
//  const year = currentDate.getFullYear();
//  const month = currentDate.getMonth() + 1; // Months are zero-based
//  const day = currentDate.getDate();

//  // Format the date string
//  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

//  // Display the formatted date in the specified element
//  currentDateElement.textContent = `Today's Date is: ${formattedDate}`;