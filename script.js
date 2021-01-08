/**Finds the bill amount, the number of people, and the quality of service from the user inputs,
and checks whether the inputs are valid. If so, it calculates the tip amount based on the inputs
and updates the HTML to reveal the tip amount.*/

function findTip() {
  var bill = document.getElementById("amount").value;
  var number_of_people = document.getElementById("number-of-people").value;
  var quality = document.getElementById("service-quality").value;

  // Check if they put in the right inputs
  if (quality == 0 || bill == "" || number_of_people == "") {
    alert("Please Enter All Values!");
  }

  //Find tip amount
  var tip = (bill * quality) / number_of_people;
  tip = tip.toFixed(2);

  //set it to display in the page
  document.getElementById("tip").innerHTML = "$ " + tip.toString();
}

// function is called once the button is clicked
document.getElementById("Calculate").onclick = function () {
  findTip();
};
