var table = ["JAVA APPS", "MC PLUGINS", "DATABASES"];
var i = 0;
var currentSub = table[0].length-1;
var append = false;

document.addEventListener('DOMContentLoaded', setTimeout(function() {
  var animText = document.querySelector("#anim-text");

  var appendTask;
  var removeTask = setInterval(updateAnimText, 150);
  
  function updateAnimText(){
    if(append){
      if(animText.innerHTML.length == table[i].length){
        append = false;

        clearInterval(appendTask);
        removeTask = setInterval(updateAnimText, 150);
  
        return;
      }

      animText.innerHTML = table[i].substring(0, currentSub);
      currentSub++;

      return;
    }

    if(animText.innerHTML.length == 0){
      append = true;
      i = i+1 == table.length ? 0 : i+1;

      clearInterval(removeTask);
      appendTask = setInterval(updateAnimText, 350);

      return;
    }

    animText.innerHTML = animText.innerHTML.substring(0, currentSub);
    currentSub--;
  }
}, 1500));