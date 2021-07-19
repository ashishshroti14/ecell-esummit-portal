const aboutSection = document.getElementById("about");
const heading = document.getElementById("main-heading");

function setHeadingScale(e) {
	const aboutSectionYPos = aboutSection.getBoundingClientRect().top;
	const ratio = Math.max(aboutSectionYPos / window.innerHeight, 0);

	if (ratio === 0 && e) return;

	heading.style.opacity = ratio;
	heading.style.transform = `scale(${ratio})`;
}

document.addEventListener("scroll", setHeadingScale);

// Canvas effect boilerplate from: https://codepen.io/DanielN/pen/LEEZVN
const canvas = document.querySelector("canvas");
const type = canvas.getAttribute("data-type");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mx, my;

document.addEventListener(
	"mousemove",
	(e) => {
		mx = e.clientX;
		my = e.clientY;
	},
	false
);

window.onresize = function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};

function Point(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

class Pattern {
	constructor(type, position) {
		this.type = type;
		this.pos = position;
		this.dx = 0;
		this.dy = 0;
		this.angle = 0;
		this.dist = 0;
	}

	update = function () {
		this.dx = mx - this.pos.x;
		this.dy = my - this.pos.y;
		this.dist = Math.sqrt(Math.pow(this.dx, 2) + Math.pow(this.dy, 2));
		this.angle = Math.atan2(this.dy, this.dx);
	};

	draw = function () {
		ctx.save();
		ctx.translate(this.pos.x, this.pos.y);
		ctx.rotate(this.angle);
		ctx.beginPath();
		let alpha = Math.min(1 - this.dist / 250, 0.3);

		switch (type) {
			case "arrows":
				ctx.moveTo(-15, -10);
				ctx.lineTo(15, 0);
				ctx.lineTo(-15, 10);
				ctx.lineWidth = 5;

				ctx.strokeStyle = "rgb(227, 179, 76, " + Math.max(0.05, alpha) + ")";
				ctx.stroke();
				break;

			case "dots":
				ctx.moveTo(0, 0);
				let radius = Math.max(10 * (1 + this.dist / 300), 10);

				ctx.arc(0, 0, radius, 0, 2 * Math.PI, false);
				ctx.fillStyle = "rgb(115, 65, 180, " + Math.max(0.05, alpha) + ")";
				ctx.fill();
				break;

			case "squares":
				ctx.fillStyle = "rgb(57, 187, 203, " + Math.max(0.05, alpha) + ")";
				ctx.fillRect(-15, -15, 30, 30);
				ctx.fill();
				break;
		}

		ctx.restore();
	};
}

let patternGrid = [];

window.onload = function () {
	for (let y = 0; y < canvas.height / 20; y++) {
		for (let x = 0; x < canvas.width / 50; x++) {
			let shape = new Pattern(type, new Point(x * 75, y * 75));
			patternGrid.push(shape);
			shape.update();
			shape.draw();
		}
	}
	requestAnimationFrame(main);
	setHeadingScale();
};

function main() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let y = 0; y < canvas.height / 20; y++) {
		for (let x = 0; x < canvas.width / 50; x++) {
			patternGrid[y * 10 + x].update();
			patternGrid[y * 10 + x].draw();
		}
	}
	requestAnimationFrame(main);
}
