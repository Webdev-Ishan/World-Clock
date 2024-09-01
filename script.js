
const usa= document.getElementById('USA');
setInterval(()=>{
let d= new Date()
usa.innerHTML=d.toLocaleTimeString('en-US', {
    timeZone: 'America/New_York', // or 'America/Los_Angeles' for Pacific Time
  });

},1000)
