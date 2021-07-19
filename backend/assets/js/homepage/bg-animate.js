const night = $("#night-bg");

setInterval(() => {
    night.toggleClass("faded");
    $("#splash-content").toggleClass("day-time");
}, 6000);