var num = 6;
var colors = generateRandomColors(num);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("Message");
console.log(randomColor());
var h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	num = 3;
	colors = generateRandomColors(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		// add initial colors to squares
		if (i < 3) {
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.background = "none";
		}
	}
	h1.style.backgroundColor = "#232323";
})

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	num = 6;
	colors = generateRandomColors(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		// add initial colors to squares
		squares[i].style.background = colors[i];
		squares[i].style.background = "block";
	}
	h1.style.backgroundColor = "#232323";
})


resetButton.addEventListener("click",function(){
	colors = generateRandomColors(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	message.textContent = "";


	for(var i = 0; i < squares.length; i++){
		// add initial colors to squares
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			changeColor(pickedColor);
			message.textContent = "Correct!";
			resetButton.textContent = "Play Again";
			h1.style.background = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}
	});
}

function changeColor(color){
	for(var i = 0; i < num; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var num = Math.floor(Math.random() * colors.length);
	console.log(num);
	return colors[num];
}

function generateRandomColors(num){
	var arr = []
	for (var i = 0; i < num; i++){
		arr[i] = randomColor();
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
