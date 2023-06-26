var isStop=true;
var s=0, m=0, h=0;

function start(){
    if(isStop==true){
        isStop=false;
        timer();
    }
}

function timer(){
    if(isStop==false){
        s=parseInt(s);
        m=parseInt(m);
        h=parseInt(h);
        s++;
        if(s==60){
            s=0;
            m++;
        }
        if(m==60){
            m=0;
            h++;
        }
        if(s<10){
            s="0"+s;
        }
        if(m<10){
            m="0"+m;
        }
        if(h<10){
            h="0"+h;
        }

        sw.innerHTML=h +" : "+ m +" : "+ s;
        setTimeout("timer()",1000);
    }
}

function stop(){
    isStop=true;
}

function reset(){
    sw.innerHTML="00 : 00 : 00";
    s=0, m=0,h=0;
    isStop=true;
}