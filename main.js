var score=0;

function decrease(){
    score=score-20;
document.getElementById("box").textContent=score;
}
function increase(){
    score=score+20;
    document.getElementById("box").textContent=score;
}
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none")
  {
    x.style.display = "block";
  } else 
  {
    x.style.display = "none";
  }
}