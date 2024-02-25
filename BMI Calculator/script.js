
function getBMI() {
    let h = document.getElementById("myHeight").value;
    //Convert in meters
    let heightInMeters = h / 100;
    let w = document.getElementById("myWeight").value;
    
    // Calculate BMI
    let BMI = w / (heightInMeters * heightInMeters);
    

// Display the result
    document.getElementById("result").innerHTML = "Your BMI is " + BMI.toFixed(2) + ".";
}
