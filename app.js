const enddate ="19 March 2023 10:00 PM"
document.getElementById("end-date").innerHTML=enddate;
const d = new Date();
let differ;
function clock(){
  
    }


setInterval(() => {
    const end= new Date(enddate);
    const start =new Date();
   
    differ=(end-start)/1000;

document.getElementById("day").innerText=Math.floor(differ/3600/24);
    document.getElementById("hour").innerHTML=Math.floor(differ/3600)%24;
    document.getElementById("second").innerHTML=Math.floor(differ/60)%60;
    document.getElementById("millisecond").innerHTML=Math.floor(differ)%1000;
 
   
}, 10);
