let hrs=document.getElementById("hrs");
let mins=document.getElementById("mins");
let sec=document.getElementById("sec");

let currTime=new Date();

setInterval(()=>{
    let currTime=new Date();
    hrs.innerHTML=(currTime.getHours()<10?"0":"")+currTime.getHours();
    mins.innerHTML=(currTime.getMinutes()<10?"0":"")+currTime.getMinutes();
    if(currTime.getSeconds()<10){
        let k=currTime.getSeconds();
        let s="0"+k.toString();
        sec.innerHTML=s;
    }else sec.innerHTML=currTime.getSeconds();
},1000);

