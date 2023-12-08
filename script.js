'use strict';

const newGameBtn = document.querySelector('.newGame');
const board = document.querySelector('.board');
const wrong_points = document.getElementById('wrong_ans');
const imgs = document.querySelectorAll('.img');

class App {

	//Setting variables
	waterDrop = 'img/water-drop-575495_1280.png';
	rows = 3;
	cols = 4;
	computerChoice = new Array(this.rows);
	hintNumbers = new Array(this.cols);
	currentLevel = 0;
	wrongAns = 0;

	constructor() {

		//Setting app
		this._createBoard();
		this._playerSelect.bind(this);
	 	this._rebuildDots();
		this._init.bind(this);
		this._computerChoice();
		this._computedHint.bind(this);

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

	_computedHint() {
		this.hintNumbers = this.hintNumbers
					.fill('enything')
					.map( (_, i) => {
						if (i !== this.computerChoice[this.currentLevel])
						return i;
					} )
					.with(1, this.computerChoice[this.currentLevel])
					.sort(() => Math.random() - 0.5)
					.slice(0, -1);	

					let hint = document.querySelectorAll("[data-option]");
					for (let el of hint) {
						if(parseInt(el.dataset.option) === this.hintNumbers) {
							console.log(el.dataset.option);
						}
			
					}
			
					
		console.log(this.hintNumbers);
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
				this._computedHint();
			} else {
				img.classList.add('incorrect');
				img.classList.remove('active');
				this.wrongAns += 1;
				wrong_points.innerText = this.wrongAns;
			};
		};
	};



	_rebuildDots(currentLevel){
		imgs.forEach((img) => {
			if(parseInt(img.dataset.level) === currentLevel){
				img.classList.add('active');
			} else {
				img.classList.remove('active');
			};
		});
		
	};
};

new App();








