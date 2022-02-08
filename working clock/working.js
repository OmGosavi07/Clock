const hour=document.getElementById('hours');
const minute=document.getElementById('minutes');
const second=document.getElementById('seconds');

serInterval(()=>
{
    let date=new Date();
    let hours=date.getHours()*30;
    let minutes=date.getMinutes()*6;
    let seconds=date.getSeconds()*6;

    hour.style.transform=`rotateZ(${(hours)+(minutes/12)}deg)`;
    minute.style.transform=`rotateZ(${minutes}deg)`;
    second.style.transform=`rotateZ(${seconds}deg)`;
})