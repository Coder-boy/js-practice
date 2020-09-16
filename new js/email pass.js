var userName ="Ashraf";
var dbName="Ashraf";

var usrEmail="aaa252324@gma il.com";
var dbEmail="aaa252324@gmail.com";

var usrPass="anahafez";
var dbPass="anahafez";


if(userName==dbName ||   usrEmail==dbEmail && usrPass==dbPass  ){
    document.getElementById("demo").innerHTML="information is correct"

}else{
    document.getElementById("demo").innerHTML="information is incorrect"
}