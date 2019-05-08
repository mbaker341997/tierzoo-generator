// load the template
window.onload = function() {
  var canvas = document.getElementById("preview");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("template");
  ctx.drawImage(img, 0, 0);

  // if window loads with values in the inputs, then go ahead and set them
  changeStat("intNumber", document.getElementById("intNumber").value);
  changeStat("pwrNumber", document.getElementById("pwrNumber").value);
  changeStat("defNumber", document.getElementById("defNumber").value);
  changeStat("mblNumber", document.getElementById("mblNumber").value);
  changeStat("hpNumber", document.getElementById("hpNumber").value);
  changeStat("stlNumber", document.getElementById("stlNumber").value);


}

// color of each stat block
var statColors = {
  intNumber: "#FFFFFF",
  pwrNumber: "#F78201",
  defNumber: "#4192FE",
  mblNumber: "#66BE36",
  hpNumber: "#AE2515",
  stlNumber: "#647797"
}

// x-coordinates of each stat block's top-left
var statXCoords = {
  intNumber: 808,
  pwrNumber: 905,
  defNumber: 1003,
  mblNumber: 1101,
  hpNumber: 1195,
  stlNumber: 1291
}

// change stat values
function changeStat(statID, amount) {
  if(amount < 0) {
    alert("Stat value cannot be negative")
  }
  else {
    var ctx = document.getElementById("preview").getContext("2d");
    const rectWidth = 60;//width of rectangle
    const fullHeight = 480;//height of rectangle when at 100
    const fullY = 155;//y-coordinate of top-left corner when at 100

    // reset the old rectangle
    ctx.fillStyle = "#000000";
    ctx.fillRect(statXCoords[statID],0,rectWidth,635);// don't use fullHeight so that if a user sets a stat above 100 then that upper part gets taken away.

    // draw the new rectangle
    ctx.fillStyle = statColors[statID];
    rectHeight = Math.floor((amount/100)*fullHeight);//calculate height of rectangle
    rectY = fullY + (fullHeight-rectHeight);//calculate y coordinate of top-left
    ctx.fillRect(statXCoords[statID],rectY,rectWidth,rectHeight);
  }
}

// change build Name
function changeName() {
  var name = document.getElementById("buildName").value;

  var canvas = document.getElementById("preview");
  var ctx = canvas.getContext("2d");

  //reset Name
  ctx.fillStyle = "#000000";
  ctx.fillRect(0,0,canvas.width,100);// don't use fullHeight so that if a user sets a stat above 100 then that upper part gets taken away.

  // write new name
  ctx.fillStyle = "#FFFD15";
  ctx.font = "35px runescape_uf";
  ctx.textBaseline = "alphabetic";
  ctx.textAlign = "center";
  ctx.fillText(name, canvas.width/2, 77);
}
