document.getElementById("clickBtn").addEventListener("click",dblclick);

function dblclick(){
    document.getElementById("demo").setAttribute("style","display:block;opacity:1;transform: rotate(360deg)")
}
document.getElementById("clickBtn1").addEventListener("click",dblclick1);
function dblclick1(){
    document.getElementById("demo").setAttribute("style","opacity:0");

}

document.getElementById("clickBtn2").addEventListener("click",dblclickc);

function dblclickc(){
    document.getElementById("demo1").setAttribute("style","transform:scaleY(1)")
}
document.getElementById("clickBtn3").addEventListener("click",dblclickc1);
function dblclickc1() {
    document.getElementById("demo1").setAttribute("style", "transform:scaleY(0)");
}

document.getElementById("clickBtn4").addEventListener("click",dblclickcs);

function dblclickcs(){
    document.getElementById("demo2").setAttribute("style","transform:scaleX(1)")
}
document.getElementById("clickBtn5").addEventListener("click",dblclickcs1);
function dblclickcs1() {
    document.getElementById("demo2").setAttribute("style", "transform:scaleX(0)");
}

document.getElementById("clickBtn6").addEventListener("click",dblclickcx);

function dblclickcx(){
    document.getElementById("demo3").setAttribute("style","transform:rotateX(1) ")
}
document.getElementById("clickBtn7").addEventListener("click",dblclickcx1);
function dblclickcx1() {
    document.getElementById("demo3").setAttribute("style", "transform:rotateX(0) ");
}

