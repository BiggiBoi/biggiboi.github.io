const app = Telegram.WebApp;
const body = document.body;
const image = body.querySelector('#coin');
const score_div = body.querySelector('h1');
const current_power_div = body.querySelector('#power')
const total_power_div = body.querySelector('#total')
const classes_div = body.querySelector('.avatar')
const nickname = body.querySelector('.nickname')

app.ready();
app.expand();
app.enableClosingConfirmation()

let inf = {}
let score = 0;
let current_power = 0;
let total_power = 0;
let taps_power = 1;
let classes = '';
let taps = 0;
let timerID = '';


function start_sync(initData){
    fetch('https://api.lyclick.lc12.ru/start', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(initData)
    })
    .then(response => response.json())
    .then(response => {
        current_power = response.current_power;
        total_power = response.total_power;
        score = response.score;
        if (response.class == null){
            classes = '?';
        } else {
            classes = response.class;
        }
        classes_div.innerText = classes;
        nickname.innerText = response.username;
        current_power_div.innerHTML = current_power; 
        total_power_div.innerHTML = total_power;
        score_div.innerText = score;
        console.log(response);
    })
}
function sync(data){
    fetch('https://api.lyclick.lc12.ru/sync', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
}

start_sync(app.initDataUnsafe);

function t(){
    timerID = setTimeout(()=>{
        console.log('Нажатий'+taps);
        taps = 0;
    },1000);
}
image.addEventListener('click' , (e)=> {

    clearTimeout(timerID);
    let x = e.offsetX;
    let y = e.offsetY;


    navigator.vibrate(5);
    
    if(Number(current_power) > 0){
        score_div.textContent = `${(Number(score) + 1).toLocaleString()}`;
        current_power_div.textContent = `${Number(current_power) - 1}`;
        current_power-=1;
        score+=1;
        taps +=1; 
    } 

    if(x < 150 & y < 150){
        image.style.transform = 'translate(-0.25rem, -0.25rem) scale(0.95) skewY(-5deg) skewX(5deg)';
    }
    else if (x < 150 & y > 150){
        image.style.transform = 'translate(-0.25rem, 0.25rem) scale(0.95) skewY(-5deg) skewX(5deg)';
    }
    else if (x > 150 & y > 150){
        image.style.transform = 'translate(0.25rem, 0.25rem) scale(0.95) skewY(5deg) skewX(-5deg)';
    }
    else if (x > 150 & y < 150){
        image.style.transform = 'translate(0.25rem, -0.25rem) scale(0.95) skewY(5deg) skewX(-5deg)';
    }
    setTimeout(()=>{
        image.style.transform = 'translate(0px, 0px) scale(1)';
    }, 100);

    t();

    body.querySelector('.progress').style.width = `${(100 * current_power) / total_power}%`;
});

setInterval(()=> {
    if(Number(total_power) > current_power){
        total_power_div.textContent = `${Number(current_power) + Number(taps_power)}`;
        current_power+=taps_power;
        body.querySelector('.progress').style.width = `${(100 * current_power) / total_power}%`;
    }
}, 1000);