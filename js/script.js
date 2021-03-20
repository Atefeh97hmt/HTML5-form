function changecolor() {
  document.getElementById("colorful").style.backgroundColor = document.getElementById("inpcolor").value;
}

function chagedate() {
  document.getElementById("demo").innerHTML = "Record date: " + document.getElementById("inpDate").value;
}

function showEmail() {
  document.getElementById("demo2").innerHTML = "Your Email Address: " + document.getElementById("inpEmail").value;
}

function showmonth() {
  document.getElementById("demo3").innerHTML = "Month Is: " +
    document.getElementById("inpMonth").value;
}

function showN() {
  document.getElementById("demo4").innerHTML =
    "Input Number Is: " + document.getElementById("rng").value;
}

function showTime() {
  document.getElementById("demo5").innerHTML =
    "Time Is: " + document.getElementById("inpTime").value;
}

function showURL() {
  document.getElementById("demo6").innerHTML =
    "URL Is: " + document.getElementById("inpURL").value;
}