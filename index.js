//version 3.9
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
//Chant1
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

//Chant2
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

//Chant3
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

//Chant4
let audio3 = new Audio("https://github.com/Alaixs/ChantSupporter/raw/beta/Audio4.mp3");

$('#ppb4').on("click",function(){
  if($(this).hasClass('fa-play'))
   {
     $(this).removeClass('fa-play');
     $(this).addClass('fa-pause');
     audio3.play();
   }
  else
   {
     $(this).removeClass('fa-pause');
     $(this).addClass('fa-play');
     audio3.pause();
   }
});

audio.onended = function() {
     $("#ppb4").removeClass('fa-pause');
     $("#ppb4").addClass('fa-play');
};

//Chant5
let audio4 = new Audio("https://github.com/Alaixs/ChantSupporter/raw/beta/Audio5.mp3");

$('#ppb5').on("click",function(){
  if($(this).hasClass('fa-play'))
   {
     $(this).removeClass('fa-play');
     $(this).addClass('fa-pause');
     audio4.play();
   }
  else
   {
     $(this).removeClass('fa-pause');
     $(this).addClass('fa-play');
     audio4.pause();
   }
});

audio.onended = function() {
     $("#ppb5").removeClass('fa-pause');
     $("#ppb5").addClass('fa-play');
};

//Chant6
let audio5 = new Audio("https://github.com/Alaixs/ChantSupporter/raw/beta/Audio6.mp3");

$('#ppb6').on("click",function(){
  if($(this).hasClass('fa-play'))
   {
     $(this).removeClass('fa-play');
     $(this).addClass('fa-pause');
     audio5.play();
   }
  else
   {
     $(this).removeClass('fa-pause');
     $(this).addClass('fa-play');
     audio5.pause();
   }
});

audio.onended = function() {
     $("#ppb6").removeClass('fa-pause');
     $("#ppb6").addClass('fa-play');
};

//Chant7
let audio6 = new Audio("https://github.com/Alaixs/ChantSupporter/raw/beta/Audio7.mp3");

$('#ppb7').on("click",function(){
  if($(this).hasClass('fa-play'))
   {
     $(this).removeClass('fa-play');
     $(this).addClass('fa-pause');
     audio6.play();
   }
  else
   {
     $(this).removeClass('fa-pause');
     $(this).addClass('fa-play');
     audio6.pause();
   }
});

audio.onended = function() {
     $("#ppb7").removeClass('fa-pause');
     $("#ppb7").addClass('fa-play');
};

//Chant8

let audio7 = new Audio("https://github.com/Alaixs/ChantSupporter/raw/beta/Audio8.mp3");

$('#ppb8').on("click",function(){
  if($(this).hasClass('fa-play'))
   {
     $(this).removeClass('fa-play');
     $(this).addClass('fa-pause');
     audio7.play();
   }
  else
   {
     $(this).removeClass('fa-pause');
     $(this).addClass('fa-play');
     audio7.pause();
   }
});

audio.onended = function() {
     $("#ppb8").removeClass('fa-pause');
     $("#ppb8").addClass('fa-play');
};

//Chant9

let audio8 = new Audio("https://github.com/Alaixs/ChantSupporter/raw/beta/Audio9.mp3");

$('#ppb9').on("click",function(){
  if($(this).hasClass('fa-play'))
   {
     $(this).removeClass('fa-play');
     $(this).addClass('fa-pause');
     audio8.play();
   }
  else
   {
     $(this).removeClass('fa-pause');
     $(this).addClass('fa-play');
     audio8.pause();
   }
});

audio.onended = function() {
     $("#ppb9").removeClass('fa-pause');
     $("#ppb9").addClass('fa-play');
};