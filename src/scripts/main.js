AOS.init();

const eventDate = new Date("Feb 6, 2024 15:00:00");
const timeStamp = eventDate.getTime();

const timeCount = setInterval(function () {
  const now = new Date();
  const timeStampNow = now.getTime();

  const timeToEvent = timeStamp - timeStampNow;
  const minutesInMs = 1000 * 60;
  const hoursInMs = minutesInMs * 60;
  const daysInMs = hoursInMs * 24;

  const daysToEvent = Math.floor(timeToEvent / daysInMs);
  const hoursToEvent = Math.floor((timeToEvent % daysInMs) / hoursInMs);
  const minutesToEvent = Math.floor((timeToEvent % hoursInMs) / minutesInMs);
  const secondsToEvent = Math.floor((timeToEvent % minutesInMs) / 1000);

  document.getElementById(
    "counter"
  ).innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;
}, 1000);
