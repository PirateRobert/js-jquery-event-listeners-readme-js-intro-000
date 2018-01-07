//define functions here
function getIt(){
  $("p").on("click",function(){
    alert("Hey!")
  })
}
function frameIt(){
  $("img").on("")
}
function pressIt(){
  $("input").on("keydown",function(key){
    if(key.which === 71){
      alert("G-League...now on Twitch.tv")
    }
  })
}
$(document).ready(function(){

// call functions here

});
