function getColor(color) {
	let modal = document.getElementById('info');
	let colors = {
		"Yellow": {
			"info": "some bullshit here",
			"summary": "a short brief of the actual description"
		},
		"Red": {
			"info": "some bullshit here",
			"summary": "a short brief of the actual description"
		}
	};
	if (colors.hasOwnProperty(color)) {
		modal.innerHTML = `
		<div class="layer"></div>
		<div class="container">
		<div class="color__circle" style="background-color: ${color};"></div>
		<div class="color__title">
		<h1><span>${color}</span></h1>
		<p>
		${colors[color]["info"]}
		<br>
		<div class="sharelinks">
		Share on : <a href="#" class="btn" onclick="window.open('https://twitter.com/intent/tweet?text=My mood is ${color} - ${colors[color]["summary"]}. find yours on https://saberhosneydev.github.io/morning_stretches/study4/','popup','width=600,height=400'); return false;">Twitter</a>
		</div>
		</p>
		</div>
		<a class="closebtn" href="#" onclick="document.getElementById('info').style.display='none'"><i class="gg-close"></i></a>
		</div>
		`;
		modal.style.display = "block";
	}
}