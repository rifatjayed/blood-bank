document.querySelector("#btn3").addEventListener("click",function(e){
e.preventDefault();
  document.getElementById("popup").style.display = "block";
})
document.querySelector(".close-btn").addEventListener("click",function(){
    document.getElementById("popup").style.display = "none";
})