var table = ["JAVA APPS", "MC PLUGINS", "DATABASES"];
var i = 0;
var currentSub = table[0].length-1;
var append = false;
var appendTask;
var removeTask;

document.addEventListener('DOMContentLoaded', function() {
  var animText = document.querySelector("#anim-text");

  setTimeout(function() {
    removeTask = setInterval(updateAnimText, 150)
  }, 1000);
  
  function updateAnimText(){
    if(append){
      if(animText.innerHTML.length == table[i].length){
        append = false;
        removeTask = setInterval(updateAnimText, 150);
  
        return;
      }

      animText.innerHTML = table[i].substring(0, currentSub);
      currentSub++;

      let randomInt = Math.floor(Math.random() * 800);
      appendTask = setTimeout(updateAnimText, randomInt);

      return;
    }

    if(animText.innerHTML.length == 0){
      append = true;
      i = i+1 == table.length ? 0 : i+1;

      clearInterval(removeTask);
      let randomInt = Math.floor(Math.random() * 800);
      appendTask = setTimeout(updateAnimText, randomInt);

      return;
    }

    animText.innerHTML = animText.innerHTML.substring(0, currentSub);
    currentSub--;
  }

var animTextEnd = document.querySelector("#anim-text-end");
function updateAnimTextEnd(){
  if(animTextEnd.style.color == "lightgray")
    animTextEnd.style.color = "rgba(14, 102, 102, 0)";
  else 
    animTextEnd.style.color = "lightgray";
}
setInterval(updateAnimTextEnd, 500);

});