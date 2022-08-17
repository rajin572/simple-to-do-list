
// to cahnge the background color
//________________________________________________________________________________________________________________________________________

function makeSuccess() {
  document.body.style.backgroundColor = "#146c43";
  document.body.classList.add("text-white");
  for (const finalForWhite of forWhite) {
    finalForWhite.classList.remove("border-dark");
  }
}


const warning = document.getElementById("warning");
warning.onclick = makeWarning;
function makeWarning() {
  document.body.style.backgroundColor = "#842029";
  document.body.classList.add("text-white");
  for (const finalForWhite of forWhite) {
    finalForWhite.classList.remove("border-dark");
  }
}



const info = document.getElementById("info");
info.onclick = function makeInfo() {
  document.body.style.backgroundColor = "#087990";
  document.body.classList.add("text-white");
  for (const finalForWhite of forWhite) {
    finalForWhite.classList.remove("border-dark");
  }
};



const purple = document.getElementById("purple");
purple.addEventListener("click", makePurple);
function makePurple() {
  document.body.style.backgroundColor = "#432874";
  document.body.classList.add("text-white");
  const forWhite = document.getElementsByClassName("list");
  for (const finalForWhite of forWhite) {
    finalForWhite.classList.remove("border-dark");
  }
}


const orange = document.getElementById("orange");
orange.addEventListener("click", function makeOrange() {
  document.body.style.backgroundColor = "#e8e8e8";
  document.body.classList.remove("text-white");
  document.body.style.color = "#000000";
  const forWhite = document.getElementsByClassName("list");
  for (const finalForWhite of forWhite) {
    finalForWhite.classList.add("border-dark");
  }
});

document
  .getElementById("defult")
  .addEventListener("click", function makeDefult() {
    document.body.style.backgroundColor = "#000000";
    document.body.classList.add("text-white");
    const forWhite = document.getElementsByClassName("list");
    for (const finalForWhite of forWhite) {
      finalForWhite.classList.remove("border-dark");
    }
  });

// ________________________________________________________________________________________________________________________________________

// hide and show button and change the h1 text
function makeChanges() {
  document.getElementById("h1").innerText =
    "You Can Change Color By Click On Those Buttons";
  document.getElementById("letsStart").style.display = "none";
  document.getElementById("letsEnd").style.display = "inline-block";
  document.getElementById("buttons").style.display = "block";
  document.getElementById("p").style.display = "none";
}
function makeChanges2() {
  document.getElementById("alert").style.display = "block";
  document.getElementById("h1").innerText = "If you don't like the Background color";
  document.getElementById("letsEnd").style.display = "none";
  document.getElementById("letsStart").style.display = "inline-block";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("p").style.display = "block";
}

document
  .getElementById("alert-off")
  .addEventListener("click", function() {
    document.getElementById("alert").style.display = "none";
  });
document
  .getElementById("again-off")
  .addEventListener("click", function() {
    document.getElementById("sAlart").style.display = "none";
  });

// ________________________________________________________________________________________________________________________________________
