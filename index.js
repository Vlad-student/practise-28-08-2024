const root = document.getElementById('root');

const startTime = new Date(0,0,0,0,0,0)
let isRunning = false;
let countSecond = 0;
let idInterval = 0;

function startStopWatch (event) {
    const startBtn = event.target;
    const h1 = event.target.parentElement.previousElementSibling;
if (isRunning === false) {
    isRunning = true
   startBtn.textContent = 'stop'; 
   idInterval = setInterval(()=>{
    countSecond++;
    h1.textContent = new Date(new Date(0,0,0,0,0,0).setSeconds(countSecond)).toLocaleTimeString('en-GB');
},1000);
} else {
    clearInterval(idInterval)
isRunning = false
    startBtn.textContent = 'start';
}
}

function clearStopWatch (event){
const h1 = event.target.parentElement.previousElementSibling;
h1.textContent = '00:00:00'
const startBtn = event.target.previousElementSibling;
startBtn.textContent = 'start';
isRunning = false;
clearInterval(idInterval);
countSecond = 0;
}

const renderStopWatch = () => {
    const section = document.createElement('section')
    section.classList.add('stopwatch')
    const h1 = document.createElement('h1');
h1.textContent = '00:00:00'
const div = document.createElement('div');

const startBtn = document.createElement('button');
startBtn.textContent ='start';
startBtn.addEventListener('click', startStopWatch)

const clearBtn = document.createElement('button');
clearBtn.textContent ='clear';
clearBtn.addEventListener('click', clearStopWatch)

section.append(h1,div);
div.append(startBtn,clearBtn)
    return section;
}

root.append(renderStopWatch());


// const startTime = new Date(0,0,0,0,0,0);
// console.log(startTime.toLocaleDateString('en-GB'));
// console.dir(new Date(startTime.serSeconds(360)).toLocaleDateString('en-GB'));

// console.dir(startTime.setSeconds(1));

