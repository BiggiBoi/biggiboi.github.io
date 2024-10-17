const app = Telegram.WebApp;
const body = document.body;
const image = body.querySelector('#coin');
const score_div = body.querySelector('h1');
const current_power_div = body.querySelector('#power');
const total_power_div = body.querySelector('#total');
const classes_div = body.querySelector('.avatar');
const nickname = body.querySelector('.nickname');
const loader = document.querySelector(".loader");

app.ready();
app.expand();
app.enableClosingConfirmation()

let info = {
    id: 0,
    score: 0,
    current_power: 0,
    total_power: 0,
    taps_power: 1,
    taps:0,
    time_sync: Date.now()
}
let classes = '';
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
        info.current_power = response.current_power;
        info.total_power = response.total_power;
        info.score = response.score;
        info.id = response.telegram_id;
        if (response.class == null){
            classes = '?';
        } else {
            classes = response.class;
        }
        classes_div.innerText = classes;
        nickname.innerText = response.username;
        current_power_div.innerHTML = info.current_power; 
        total_power_div.innerHTML = info.total_power;
        score_div.innerText = info.score;
        loader.className += " hidden";
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
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        info.score = response.score;

        score_div.textContent = `${(Number(info.score)).toLocaleString()}`;
    })
}

start_sync(app.initDataUnsafe);

function send_sync(){
    timerID = setTimeout(()=>{
        info.time_sync = Date.now();
        info.taps-=info.current_power
        sync(info)
        info.taps = 0;
    },1000);
}
document.addEventListener("visibilitychange", () => {
    info.time_sync = Date.now();
    sync(info)
});
window.addEventListener("blur", e => {
    info.time_sync = Date.now();
    sync(info)
});
window.addEventListener("unload", e => {
    info.time_sync = Date.now();
    sync(info)
});
image.addEventListener('click' , (e)=> {

    clearTimeout(timerID);
    let x = e.offsetX;
    let y = e.offsetY;
    if (Number(info.current_power) = 0) {
        send_sync();
        info.taps = 0;
    }
    if(Number(info.current_power) > 0){
        score_div.textContent = `${(Number(info.score)+info.taps_power)}`;
        current_power_div.textContent = `${Number(info.current_power) - info.taps_power}`;
        info.score+=info.taps_power;
        info.current_power-=info.taps_power;
        info.taps +=1; 
        send_sync();
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

    body.querySelector('.progress').style.width = `${(100 * info.current_power) / info.total_power}%`;
});

setInterval(()=> {
    if(Number(info.total_power) > info.current_power){
        current_power_div.textContent = `${Number(info.current_power) + Number(info.taps_power)}`;
        info.current_power+=info.taps_power;
        body.querySelector('.progress').style.width = `${(100 * info.current_power) / info.total_power}%`;
    }
}, 1000);