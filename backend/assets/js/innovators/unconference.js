const bg = document.getElementById("bg");
const ucSplash = document.getElementById("uc-splash");

ucSplash.addEventListener("mousemove", (e) => {
	let _w = window.innerWidth;
	let _h = window.innerHeight;
	let _mouseX = e.clientX;
	let _mouseY = e.clientY;

	let _depth1 = `${(_w - _mouseX) * 0.001}%, ${(_h - _mouseY) * 0.001}%`;
	let _depth2 = `${(_mouseX - _w) * 0.001}%, ${(_mouseY - _h) * 0.001}%`;

	splash.style.transform = `translate(${_depth1})`;
	bg.style.transform = `translate(${_depth2})`;
});