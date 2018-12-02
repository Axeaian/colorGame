var numsquares=6;
var colors=[];
var pickedColor;
var h1 = document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var rgb = document.getElementById("rgb");
var result = document.getElementById("result");
var rset = document.querySelector("#reset");
var mode=document.querySelectorAll(".mode");

init();

function init(){
	modeSetup();
	squareSetup();
	reset();
}

rset.addEventListener("click", reset);


function modeSetup(){
	for(var i=0;i<mode.length;i++){
		mode[i].addEventListener("click",function(){
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy" ? numsquares = 3: numsquares = 6;
			reset();
		})
	}	
}

function squareSetup(){
	for(var i=0; i<squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clickedSquare
			var clickedSquare = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedSquare===pickedColor){
				result.textContent="CORRECT!!!";
				rset.textContent = "PLAY AGAIN??";
				changeColor(pickedColor);
				h1.style.backgroundColor = pickedColor;	
			} else{
				this.style.backgroundColor = "#252525";
				result.textContent="TRY AGAIN!";
				}
		});
	}
}

function changeColor(color){
	//loop through all squares 
	for(var i=0; i<squares.length; i++){
	//change each color to given color
	squares[i].style.backgroundColor = color;
}}

function pickColor(){
	random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColor(num){
	//make an array
	var arr = [];
	//add num random color to array
	for(var i=0;i<num;i++){
		//get random color and push into array
		arr[i] = randomColor();
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var red = Math.floor(Math.random()*255);
	//pick a green from 0-255
	var green = Math.floor(Math.random()*255);
	//pick a blue from 0-255
	var blue = Math.floor(Math.random()*255);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function reset(){
	//generate new random color
	colors = generateRandomColor(numsquares);
	// pick new color
	pickedColor = pickColor();
	//update rgb question with new picked color
	rgb.textContent = pickedColor;
	result.textContent=" ";
	rset.textContent = "NEW COLORS";
	//change color of squares
	for(var i=0; i<squares.length; i++){
		squares[i].style.display="block";
		if(colors[i]){
		squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}	
}