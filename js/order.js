document.getElementById("order").addEventListener("click", myFunction);
document.getElementById("name").addEventListener("input", myFunction1);
document.getElementById("message").addEventListener("input", myFunction2);
document.getElementById("date").addEventListener("input", myFunction3);
document.getElementById("address").addEventListener("input", myFunction4);
document.getElementById("cake").addEventListener("input", myFunction5);


function myFunction() {
  var cake = document.getElementById("cake").value;
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;
  var date = document.getElementById("date").value;
  var address = document.getElementById("address").value;

  if (cake == "--- Select cake ---") {
    document.getElementById("Error_cake").innerHTML = "Please select our product.";
  }

  if (name == '') {
    document.getElementById("Error_name").innerHTML = "Please fill out your name.";
  } else if (name.length > 100) {
    document.getElementById("Error_name").innerHTML = "Your name should not exceed 100 characters.";
  }
  
  if (message == '') {
    document.getElementById("Error_message").innerHTML = "Please fill out your message.";
  } else if (message.length > 500) {
    document.getElementById("Error_message").innerHTML = "Message should not exceed 30 characters.";
  }

  if (date == '') {
    document.getElementById("Error_date").innerHTML = "Please fill out the deliver date.";
  } 

  if (address== '') {
    document.getElementById("Error_address").innerHTML = "Please fill out the address.";
  } else if (address.length > 500) {
    document.getElementById("Error_address").innerHTML = "Address should not exceed 500 characters.";
  }
}


function myFunction1() {
  var name = document.getElementById("name").value;
  if (name != '') {
    document.getElementById("Error_name").innerHTML = '';
  }
}

function myFunction2() {
  var name = document.getElementById("message").value;
  if (name != '') {
    document.getElementById("Error_message").innerHTML = '';
  }
}

function myFunction3() {
  var name = document.getElementById("date").value;
  if (name != '') {
    document.getElementById("Error_date").innerHTML = '';
  }
}

function myFunction4() {
  var name = document.getElementById("address").value;
  if (name != '') {
    document.getElementById("Error_address").innerHTML = '';
  }
}

function myFunction5() {
    var name = document.getElementById("address").value;
    if (name != "--- Select cake ---") {
      document.getElementById("Error_cake").innerHTML = '';
    }
  }