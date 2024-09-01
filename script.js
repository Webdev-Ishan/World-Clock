
const usa= document.getElementById('USA');
setInterval(()=>{
let d= new Date()
usa.innerHTML=d.toLocaleTimeString('en-US', {
    timeZone: 'America/New_York', 
  });

},1000)


const london= document.getElementById('UK');
setInterval(()=>{
let d= new Date()
london.innerHTML=d.toLocaleTimeString('en-US', {
    timeZone: 'Europe/London', 
  });

},1000)


const Japan= document.getElementById('Japan');
setInterval(()=>{
let d= new Date()
Japan.innerHTML=d.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Tokyo', 
  });

},1000)




const India= document.getElementById('India');
setInterval(()=>{
let d= new Date()
India.innerHTML=d.toLocaleTimeString();

},1000)




const China= document.getElementById('China');
setInterval(()=>{
let d= new Date()
China.innerHTML=d.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Shanghai', 
  });

},1000)




const Russia= document.getElementById('Russia');
setInterval(()=>{
let d= new Date()
Russia.innerHTML=d.toLocaleTimeString('en-US', {
    timeZone: 'Europe/Moscow', 
  });

},1000)