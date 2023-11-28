'use strict';

const newGameBtn = document.querySelector('.newGame');
const board = document.querySelector('.board');
const wrong_points = document.getElementById('wrong_ans');

class App {

	//Setting variables
	waterDrop = 'img/water-drop-575495_1280.png';
	rows = 4;
	cols = 4;
	computerChoice = new Array(this.rows);
	currentLevel = 0;
	wrongAns = 0;

	constructor() {

		//Setting app
		this._createBoard();
		this._playerSelect.bind(this);
	 	this._rebuildDots();
		this._init.bind(this);
		this._computerChoice();

		//Attaching event handlers
		newGameBtn.addEventListener('click', this._init.bind(this));

	};

	//Functionality
	_init() {
		//Reseting level
		this.currentLevel = 0;

		//Removing classes
		const boardAll = document.querySelectorAll(".drop");
		for(let el of boardAll) {
			el.classList.remove('active');
			el.classList.remove('correct');
			el.classList.remove('incorrect');
		};

		//Generating new 4 random numbrs
		this._computerChoice();

		//Adding class to first bubble
		const startingRow = document.querySelectorAll("[data-level='0']");
		console.log(this.currentLevel);
		for(let el of startingRow) {
			if(parseInt(el.dataset.option) === this.computerChoice[0]) el.classList.add('correct');	
		};

	};

	_computerChoice() {
		for(let y = 0; y < this.rows; y++){	
			this.computerChoice[y] = Math.floor(Math.random() * this.cols);
		};
		console.log(this.computerChoice);
	};

	_createBoard() {
		board.style['grid-template-columns'] = `repeat(${this.cols}, 1fr)`;
		for(let y = 0; y < this.rows; y++){
			for(let x = 0; x < this.cols; x++){
				let img = document.createElement('img');
				img.src = this.waterDrop;
				img.setAttribute('data-option', `${x}`);
				img.setAttribute('data-level', `${y}`);
				img.classList.add('drop');
				img.addEventListener('click', this._playerSelect.bind(this));
				if(y === this.currentLevel){
					img.classList.add('active');
				}
				board.appendChild(img);
			};	
			//this.computerChoice[y] = Math.floor(Math.random() * this.cols);
		};	
		//console.log(this.computerChoice);
		
	};

	_playerSelect(e) {
		let img = e.target;
		let level = parseInt(img.dataset.level);
		let playerChoice = parseInt(img.dataset.option);
		
		if(level === this.currentLevel){
			if(playerChoice === this.computerChoice[this.currentLevel]){
				img.classList.add('correct');
				this.currentLevel += 1;
				this._rebuildDots(this.currentLevel);
			} else {
				img.classList.add('incorrect');
				img.classList.remove('active');
				this.wrongAns += 1;
				wrong_points.innerText = this.wrongAns;
			};
		};
	};

	_rebuildDots(c_level){
		let imgs = document.querySelectorAll('.board > img');
		imgs.forEach((img) => {
			if(parseInt(img.dataset.level) === c_level){
				img.classList.add('active');
				console.log(img.dataset.level);
			} else {
				img.classList.remove('active');
			};
		});
	};
};

new App();








