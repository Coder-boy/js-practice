function timeNow(){
    dateObject = new Date ()
    var hoursNow = dateObject.getHours();
    var minutesNow = dateObject.getMinutes();
    var secondsNow = dateObject.getSeconds();
    var currentTime = hoursNow +":"+minutesNow+":"+secondsNow +" PM";
    
    document.getElementById("time").innerHTML=currentTime;
     


}
setInterval(timeNow,1000);
