
jQuery(document).ready((event) => {
    const sections = Array.from(document.getElementsByTagName("section"));
    let prevRatio = 0;

    createObserver();
    
    function createObserver() {
        let observer;
    
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };
  
        observer = new IntersectionObserver(handleIntersect, options);
        sections.forEach(section => { observer.observe(section); })
    }

    function handleIntersect(entries, observer) {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > prevRatio) {
                console.log(`intersectionRatio`, entry.intersectionRatio);
                console.log("We're in", entry.target.getAttribute("id"));

                $(entry.target).find("svg").addClass("start")
            }
    
            prevRatio = entry.intersectionRatio;
        });
    }
});