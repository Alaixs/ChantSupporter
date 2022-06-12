//version 3.5
window.onload = () => {
	let rgbText, nodes, hues;
	
	rgbText = document.querySelector(".rgb-text");

	rgbText.innerHTML = [].slice
		.call(rgbText.innerHTML)
		.map(c => `<span>${c}</span>`)
		.join("");

	nodes = document.querySelectorAll(".rgb-text span");
	hues = [];

	nodes.forEach((c, i) => {
		hues.push(Math.round(i * (360 / nodes.length)));
	});
	
	(function loop() {
		hues.forEach((h, i, _this) => {
			_this[i]--;
			nodes[i].style.color = `hsl(${_this[i]},100%,50%)`;
		});
		window.requestAnimationFrame(loop);
	})();
};

let audio = new Audio("https://github.com/Alaixs/ChantSupporter/raw/beta/Audio1.mp3");

$('#ppb1').on("click",function(){
  if($(this).hasClass('fa-play'))
   {
     $(this).removeClass('fa-play');
     $(this).addClass('fa-pause');
     audio.play();
   }
  else
   {
     $(this).removeClass('fa-pause');
     $(this).addClass('fa-play');
     audio.pause();
   }
});

audio.onended = function() {
     $("#ppb1").removeClass('fa-pause');
     $("#ppb1").addClass('fa-play');
};

let audio1 = new Audio("https://github.com/Alaixs/ChantSupporter/raw/beta/Audio2.mp3");

$('#ppb2').on("click",function(){
  if($(this).hasClass('fa-play'))
   {
     $(this).removeClass('fa-play');
     $(this).addClass('fa-pause');
     audio1.play();
   }
  else
   {
     $(this).removeClass('fa-pause');
     $(this).addClass('fa-play');
     audio1.pause();
   }
});

audio.onended = function() {
     $("#ppb2").removeClass('fa-pause');
     $("#ppb2").addClass('fa-play');
};

let audio2 = new Audio("https://github.com/Alaixs/ChantSupporter/raw/beta/Audio3.mp3");

$('#ppb3').on("click",function(){
  if($(this).hasClass('fa-play'))
   {
     $(this).removeClass('fa-play');
     $(this).addClass('fa-pause');
     audio2.play();
   }
  else
   {
     $(this).removeClass('fa-pause');
     $(this).addClass('fa-play');
     audio2.pause();
   }
});

audio.onended = function() {
     $("#ppb3").removeClass('fa-pause');
     $("#ppb3").addClass('fa-play');
};