jQuery(document).ready(() => {
	const deviceWidth = window.innerWidth;
	//console.log(deviceWidth);
	if (deviceWidth < 1000) {
		// document.getElementsByTagName("img")
		$("img").attr("width", "100%")
		$(".xs-reverse").css({
			display: "flex",
			flexDirection: "column-reverse"
		})
	}

	const splashSection = $("#parallax");
	const backTrees1 = $("#parallax-1");
	const backTrees2 = $("#parallax-2");
	const frontTrees = $("#parallax-3");
	const leftMountain = $("#left-mountain");
	const rightMountain = $("#right-mountain");

	function parallax(e) {
        let _w = window.innerWidth;
        let _h = window.innerHeight;
        let _mouseX = e.clientX;
		let _mouseY = e.clientY;
		
		const offsetLeft = `${(_mouseX - _w) * 0.0015}%`
		const backTreeOffsetLeft = `${(_mouseX - _w) * 0.0005}%`
		const mountainOffsetLeft = `${(_mouseX - _w) * 0.0002}%`

		frontTrees.css("left", offsetLeft);
		backTrees1.css("left", backTreeOffsetLeft);
		backTrees2.css("right", backTreeOffsetLeft);
		leftMountain.css("left", mountainOffsetLeft);
		rightMountain.css("right", mountainOffsetLeft);
	}
	
	splashSection.on("mousemove", parallax);
});