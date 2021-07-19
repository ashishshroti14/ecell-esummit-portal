const id$ = (id) => document.getElementById(id);
const q$ = (query) => document.querySelector(query);


document.onreadystatechange = function () {
    let state = document.readyState;
    if (state == 'interactive') {
        document.getElementsByClassName('body-inner').item(0).style.visibility = "hidden";
    } else if (state == 'complete') {

        // I dont understand all the objects in window.performance
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart; 
        // console.log('Page load time is ' + loadTime);

        // But this, I do
        const THRESHOLD = 1000;
        const MIN_LOAD_TIME = loadTime < THRESHOLD ? THRESHOLD : 0;
        // const MIN_LOAD_TIME = 0;

        setTimeout(() => {
            id$('loader-container').style.visibility = "hidden";
            document.getElementsByClassName('body-inner').item(0).style.visibility = "visible";
        }, MIN_LOAD_TIME );


    }
  }