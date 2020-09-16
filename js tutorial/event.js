//document.getElementById("demo").style.display="none";

document.getElementById("clickBtn").addEventListener("click",function(){
    document.getElementById("demo").setAttribute("style","display:block;opacity:1;transform: rotate(360deg)")
});
document.getElementById("clickBtn1").addEventListener("click",function(){
    document.getElementById("demo").setAttribute("style","opacity:0");

});


