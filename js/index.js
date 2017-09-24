var workTime = 25, restTime = 5, curTime = 0;
var workOrPlay = true, handle = false;
var distance = 0;
var x;
 function play(){
       var audio = document.getElementById("audio");
       audio.play();
          }
function reaction(){
  if(handle)
  x = setInterval(function() {
    if (workOrPlay) distance = workTime * 1000 * 60 - curTime;
    else distance = restTime * 1000 * 60 - curTime;
    if (distance < 0) {
      curTime = 0;
      
      clearInterval(x);
      workOrPlay = !workOrPlay;
      reaction();
      play();
      return;
    }
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(hours < 0 || minutes < 0 || seconds < 0) debugger;
    document.getElementById("curTime").innerHTML = hours + ": " + minutes + ": " + seconds;
    curTime += 1000;
  }, 1000);
  return;
}
function handeling(){
  curTime = 0;
  
  clearInterval(x);
  handle = !handle;
  reaction();
} 
function plusWork(){
  if (workTime == 999 || handle)
     return;
  workTime+=1;
  document.getElementById("workSettings").innerHTML = workTime;
}
function minusWork(){
 if (workTime == 1 || handle)
   return;
  workTime-=1;
  document.getElementById("workSettings").innerHTML = workTime;
}
function plusRest(){
  if (restTime == 999 || handle)
    return;
  restTime+=1;
  document.getElementById("restSettings").innerHTML = restTime;
}
function minusRest(){
  if (restTime == 1 || handle)
    return;
  restTime-=1;
  document.getElementById("restSettings").innerHTML = restTime;
}
$(ducument).ready(function(){
  /*if (!handle){
    $('#plusWork').on('click', function(){
      
    });
    $('#minusWork').on('click', function(){
     
    });
    $('#plusRest').on('click', function(){
      
    });
    $('#minusRest').on('click', function(){
      
    });
  }*/
})