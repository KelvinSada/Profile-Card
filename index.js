const currentTime = document.getElementById("current-time");

function locateTime(){

  const seconds = new Date().getUTCSeconds()
  const minutes = new Date().getUTCMinutes()
  const hours = new Date().getUTCHours()

  const utcTime = `Time: ${hours}:${minutes}:${seconds}`

  currentTime.innerHTML = utcTime
}
locateTime()