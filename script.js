// ===========================
// PAGE NAVIGATION
// ===========================

const pages = document.querySelectorAll(".page");

function showPage(pageNumber){

    pages.forEach(page=>page.classList.remove("active"));

    document
    .getElementById("page"+pageNumber)
    .classList.add("active");

}

function nextPage(page){

    showPage(page);

}

function previousPage(page){

    showPage(page);

}

// ===========================
// NO BUTTON
// ===========================

const noBtn=document.getElementById("noBtn");

if(noBtn){

noBtn.addEventListener("mouseenter",()=>{

const x=Math.random()*220-110;

const y=Math.random()*120-60;

noBtn.style.transform=
`translate(${x}px,${y}px)`;

});

}

// ===========================
// CALENDAR
// ===========================

const calendar=document.getElementById("calendarDays");

const monthYear=document.getElementById("monthYear");

const months=[

"July 2026",

"August 2026"

];

const monthData=[

{

name:"July 2026",

days:31,

start:3

},

{

name:"August 2026",

days:31,

start:6

}

];

let currentMonth=0;

let selectedDate="";

function renderCalendar(){

calendar.innerHTML="";

monthYear.innerText=monthData[currentMonth].name;

for(let i=0;i<monthData[currentMonth].start;i++){

const blank=document.createElement("div");

calendar.appendChild(blank);

}

for(let d=1;d<=monthData[currentMonth].days;d++){

const day=document.createElement("div");

day.innerText=d;

day.onclick=function(){

document

.querySelectorAll(".calendar-days div")

.forEach(e=>e.classList.remove("selected"));

day.classList.add("selected");

selectedDate=d+" "+monthData[currentMonth].name;

};

calendar.appendChild(day);

}

}

renderCalendar();

// ===========================
// MONTH BUTTONS
// ===========================

document

.getElementById("nextMonth")

.onclick=function(){

if(currentMonth<1){

currentMonth++;

renderCalendar();

}

};

document

.getElementById("prevMonth")

.onclick=function(){

if(currentMonth>0){

currentMonth--;

renderCalendar();

}

};

// ===========================
// TIME SELECTION
// ===========================

const timeCards=document.querySelectorAll(".time-card");

let selectedTime="";

timeCards.forEach(card=>{

card.onclick=function(){

timeCards.forEach(c=>c.classList.remove("active"));

card.classList.add("active");

selectedTime=

card.dataset.time;

};

});
// ===========================
// FOOD SELECTION
// ===========================

const foodCards=document.querySelectorAll(".food-card");

let selectedFood="";

foodCards.forEach(card=>{

card.onclick=function(){

foodCards.forEach(c=>c.classList.remove("active"));

card.classList.add("active");

selectedFood=card.dataset.food;

};

});

// ===========================
// FINISH
// ===========================

function finishDate(){

// Default values if user skips selection

if(selectedDate===""){

selectedDate="17 July 2026";

}

if(selectedTime===""){

selectedTime="7:00 PM";

}

if(selectedFood===""){

selectedFood="🍝 Pasta";

}

// Update Summary

document.getElementById("finalDate").innerText=selectedDate;

document.getElementById("finalTime").innerText=selectedTime;

document.getElementById("finalFood").innerText=selectedFood;

// Show last page

showPage(5);

}

// ===========================
// FLOATING HEARTS
// ===========================

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*window.innerWidth+"px";

heart.style.bottom="-40px";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.pointerEvents="none";

heart.style.opacity="0.8";

heart.style.zIndex="999";

heart.style.transition="transform 6s linear, opacity 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=`translateY(-${window.innerHeight+100}px)`;

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},6500);

},1800);

// ===========================
// BUTTON RIPPLE EFFECT
// ===========================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.4)";

ripple.style.left=(e.offsetX-size/2)+"px";

ripple.style.top=(e.offsetY-size/2)+"px";

ripple.style.transform="scale(0)";

ripple.style.transition=".6s";

this.appendChild(ripple);

requestAnimationFrame(()=>{

ripple.style.transform="scale(4)";

ripple.style.opacity="0";

});

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ===========================
// MOUSE PARALLAX BACKGROUND
// ===========================

document.addEventListener("mousemove",(e)=>{

const bg1=document.querySelector(".bg1");

const bg2=document.querySelector(".bg2");

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

bg1.style.transform=`translate(${x*40}px,${y*40}px)`;

bg2.style.transform=`translate(${-x*40}px,${-y*40}px)`;

});

// ===========================
// ENTER KEY SUPPORT
// ===========================

document.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

const active=document.querySelector(".page.active");

if(active.id==="page1") nextPage(2);
else if(active.id==="page2") nextPage(3);
else if(active.id==="page3") nextPage(4);
else if(active.id==="page4") finishDate();

}

});