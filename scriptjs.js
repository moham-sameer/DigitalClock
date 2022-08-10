let hourEl = document.getElementById('hour');
let minuteEl = document.getElementById('minutes');
let secondEl = document.getElementById('seconds');
let ampmEl = document.getElementById("ampm");
let dayEl = document.getElementById("day");
let monthEl = document.getElementById("month");
let yearEl = document.getElementById("year");
let daynumEl = document.getElementById("daynum");


function updateClock(){
  let   h = new Date().getHours()
  let   m = new Date().getMinutes()
  let   s = new Date().getSeconds()
  let   ampm = "AM"
  let dateTime = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
  let   d = new Date();
  let dd = dateTime[d.getDay()]
  let months = ["Jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
  let   mon = new Date();
  let   mont = months[mon.getMonth()]
  let   dayn = new Date().getDate();
  let   y  = new Date().getFullYear();

    if(h>12){
        h = h - 12;
        ampm = "PM";
    }
    h = h < 10 ?  "0" + h: h;
    m = m < 10 ?  "0" + m: m;
    s = s < 10 ?  "0" + s: s;
    dayn = dayn < 10 ?  "0" + dayn: dayn;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    dayEl.innerText = dd;
    monthEl.innerText = mont;
    daynumEl.innerText = dayn;
    yearEl.innerText = y;
   setTimeout(() => {
    updateClock()
   }, 1000);
}
updateClock()