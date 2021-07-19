const aboutSection = document.getElementById("about");
const splash = document.getElementById("splash");

document.addEventListener("scroll", (e) => {
	const aboutSectionYPos = aboutSection.getBoundingClientRect().top;
	const ratio = Math.max(aboutSectionYPos / window.innerHeight, 0);

	if (ratio === 0) return;

	splash.style.opacity = ratio;
    splash.style.transform = `scale(${ratio})`;
    
});