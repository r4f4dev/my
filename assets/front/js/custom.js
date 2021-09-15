const clockTitle = document.querySelector('.clock');
      //clockTitle = clockContainer.querySelector('h2');
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`;
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function inite() {
    getTime();
    setInterval(getTime, 1000);
}

inite();

