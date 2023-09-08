const daysElement=document.querySelector(".days");
const hoursElement=document.querySelector(".hours");
const minutesElement=document.querySelector(".minutes");
const secondsElement=document.querySelector(".seconds");
const heading=document.querySelector("h1");
const counterTimer=document.querySelector(".counterTimer");

// Converting everything in Miliseconds
const second=1000, 
minute=60*second,
hour=60* minute,
day=24*hour;


const timeFunction=()=>{
    // Generating Current Date in MM/DD/YYYY format
    let now=new Date(),
    dd=String(now.getDate()).padStart(2,"0"),
    mm=String(now.getMonth()+1).padStart(2,"0"),
    yyyy=now.getFullYear();
    now=`${mm}/${dd}/${yyyy}`;

    // User Entered Date
    let enterDay,enterMonth;
    while(1){
        enterDay=prompt("Enter Day").padStart(2,"0");
        if(enterDay>0 && enterDay<=31)
            break;
        alert("Entered Day is not in correct range.\nPlease Enter Correct Day");
    }
    while(1){
    enterMonth=prompt("Enter Month").padStart(2,"0");
        if(enterMonth>0 && enterMonth<=12)
            break;
        alert("Entered Month is not in correct range.\nPlease Enter Correct Month");
    }
    let targetDate=`${enterMonth}/${enterDay}/${yyyy}`;
    
    //Cheching if date is passed or not
    if(now>targetDate)
        targetDate=`${enterMonth}/${enterDay}/${yyyy+1}`;
    
    const intervalID=setInterval(()=>{
    // Converting target date in milisec
    const timer=new Date(targetDate).getTime();

    //taking current date in Milisec
    const today=new Date().getTime();

    // Finding difference B/W target date and current date
    const diff=timer-today;
    const leftDays=Math.floor(diff / day);
    const leftHours=Math.floor((diff % day)/hour);
    const leftMinutes=Math.floor((diff % hour)/minute);
    const leftSeconds=Math.floor((diff % minute)/second);
     
    // Updating Timer by help of DOM
    daysElement.innerText=leftDays;
    hoursElement.innerText=leftHours;
    minutesElement.innerText=leftMinutes;
    secondsElement.innerText=leftSeconds;
    
    // Stopping Timer
    if(diff<0){
    counterTimer.style.display="none";
    heading.innerText="Time's Up";
    clearInterval(intervalID);
    }

    },0);
};

timeFunction();