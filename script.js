'use strict';

const btnNewGame = document.querySelector('.newGame');
const boardContainer = document.querySelector('.board');
const imga1 = document.querySelector('.imga1');
const imga2 = document.querySelector('.imga2');
const imga3 = document.querySelector('.imga3');
const imga4 = document.querySelector('.imga4');
const imga = document.querySelector('.imga');

const createDots = function() {
    for(let i = 0; i < 16; i++) {
        const img = document.createElement('img');
        img.src = `img\\water-drop-575495_1280.png`;
        const src = document.querySelector('.board');
        src.appendChild(img);
        img.className = `imga imga${i + 1}`;
        img.dataset.img = i + 1;
        //src.insertAdjacentHTML(`data-img="${i + 1}"`);
    }; 
};
createDots();
//setTimeout(() => {createDots();}, "4000");


//Starting new game

const init = function() {
    let dots = document.querySelectorAll('.imga');
    for(let dot of dots) {
        dot.classList.remove('start');
    };
};

btnNewGame.addEventListener('click', (e) => {
    //tabsContent.forEach(t => t.classList.remove('operations__tab--active'));
    init();
    startingGame();
});

const randomNumbers = function() {
    let randomRow2 = Math.floor(Math.random() * (8 - 5) + 5);
    let randomRow3 = Math.floor(Math.random() * (12 - 9) + 9);
    let randomRow4 = Math.floor(Math.random() * (16 - 13) + 13);

    console.log(randomRow2, randomRow3, randomRow4);
};
randomNumbers();

const startingGame = function(e) {
    let randomRow1 = Math.ceil(Math.random() * 4);
    console.log(randomRow1);
    document.querySelector(`.imga${randomRow1}`).classList.add('start');    
};

// const activateDots = function() {
//     document.querySelectorAll('.imga').forEach(dot => dot.classList.remove('active'));
//     document.querySelector(`.imga[data-img="${img}"]`).classList.add('active');
// }

boardContainer.addEventListener('click', function(e) {
    let n = 0;
    if(e.target.classList.contains('start') && e.target.classList.contains('imga1')) {
    console.log(e.target);
    document.querySelector(`.imga${5}`).classList.add('start'); 
    document.querySelector(`.imga${6}`).classList.add('start'); 

    let randomRow2 = Math.floor(Math.random() * (8 - 5) + 5);
    console.log(randomRow2);
        
    //document.querySelector(`.imga${randomRow2}`).classList.add('start'); 
    } else if(e.target.classList.contains('start') && e.target.classList.contains('imga2')) {
        console.log(e.target);
        document.querySelector(`.imga${5}`).classList.add('start'); 
        document.querySelector(`.imga${6}`).classList.add('start'); 
        document.querySelector(`.imga${7}`).classList.add('start'); 
    } else if(e.target.classList.contains('start') && e.target.classList.contains('imga3')) {
        console.log(e.target);
        document.querySelector(`.imga${6}`).classList.add('start'); 
        document.querySelector(`.imga${7}`).classList.add('start'); 
        document.querySelector(`.imga${8}`).classList.add('start'); 
    } else if(e.target.classList.contains('start') && e.target.classList.contains('imga4')) {
        console.log(e.target);
        document.querySelector(`.imga${7}`).classList.add('start'); 
        document.querySelector(`.imga${8}`).classList.add('start'); 
    }
    
 });






