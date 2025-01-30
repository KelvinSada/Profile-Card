const currentTime = document.getElementById("current-time");

function locateTime(){

  const second = new Date().getUTCSeconds()
  const minute = new Date().getUTCMinutes()
  
  const minutes = minute<10?`0`+minute:minute;
  const seconds = second<10?`0`+second:second;
  
  const hours = new Date().getUTCHours()

  const utcTime = `Time: ${hours}:${minutes}:${seconds}`

  currentTime.innerHTML = utcTime
}
locateTime()