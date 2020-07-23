var x=10

function zn(){
    
    x=x+10
    document.getElementById("para").style.fontSize =x+"px"
}
function zo(){
    if(x>10){
        x=x-10
        document.getElementById("para").style.fontSize =x+"px"
    }
    else{
        alert("Can no zoom out further!")
    }
}