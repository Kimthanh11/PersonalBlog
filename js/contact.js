document.getElementById("contact").addEventListener("click", myFunction);
document.getElementById("name").addEventListener("input", myFunction1);
document.getElementById("email").addEventListener("input", myFunction2);
document.getElementById("subject").addEventListener("input", myFunction3);
document.getElementById("message").addEventListener("input", myFunction4);

function myFunction() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (name == '') {
    document.getElementById("Error_name").innerHTML = "Please fill out your name.";
  } else if (name.length > 100) {
    document.getElementById("Error_name").innerHTML = "Your name should not exceed 100 characters.";
  }

  if (email == '') {
    document.getElementById("Error_email").innerHTML = "Please fill out your email.";
  } else if (email.length > 100) {
    document.getElementById("Error_email").innerHTML = "Your email should not exceed 100 characters.";
  }
  
  if (subject == '') {
    document.getElementById("Error_subject").innerHTML = "Please fill out the subject.";
  } else if (subject.length < 50) {
    document.getElementById("Error_subject").innerHTML = "Subject should not shorter than 50 characters.";
  } else if (subject.length > 250) {
    document.getElementById("Error_subject").innerHTML = " Subject should not exceed 250 characters.";
  }
  
  if (message == '') {
    document.getElementById("Error_message").innerHTML = "Please fill out your message.";
  } else if (message.length > 500) {
    document.getElementById("Error_message").innerHTML = "Message should not exceed 500 characters.";
  }
}


function myFunction1() {
  var name = document.getElementById("name").value;
  if (name != '') {
    document.getElementById("Error_name").innerHTML = '';
  }
}

function myFunction2() {
  var name = document.getElementById("email").value;
  if (name != '') {
    document.getElementById("Error_email").innerHTML = '';
  }
}

function myFunction3() {
  var name = document.getElementById("subject").value;
  if (name != '') {
    document.getElementById("Error_subject").innerHTML = '';
  }
}

function myFunction4() {
  var name = document.getElementById("message").value;
  if (name != '') {
    document.getElementById("Error_message").innerHTML = '';
  }
}