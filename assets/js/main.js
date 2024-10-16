const app = Telegram.WebApp;
const body = document.body;
const image = body.querySelector('#coin');
const h1 = body.querySelector('h1');
const current_power = body.querySelector('#power')
const total_power = body.querySelector('#total')
const avatar = body.querySelector('.avatar')
const nickname = body.querySelector('.nickname')

app.ready();
app.expand();
app.enableClosingConfirmation()
console.log(app.initDataUnsafe);

function _user(id) {
    let user = new Object();
    user.id =id;
    user.score = 0;
    user.current_power = 0;
    user.total_power = 0;
    user.taps = 0;
    user.time_sync = 0;
    user = JSON.stringify(user);
    return user
}
function sync(user){
    fetch('https://api.lyclick.lc12.ru/sync', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: user
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
}

let game_user = _user(app.initDataUnsafe.user.id)

sync(game_user)

nickname.innerText = `${app.initDataUnsafe.user.username}`



let coins = localStorage.getItem('coins');
let total = localStorage.getItem('total');
let power = localStorage.getItem('power');
let count = localStorage.getItem('count');
let taps = 0;






if(coins == null){
    localStorage.setItem('coins' , '0');
    h1.textContent = '0';
}else{
    h1.textContent = Number(coins).toLocaleString();
}

if(total == null){
    localStorage.setItem('total' , '500')
    body.querySelector('#total').textContent = '/500';
}else {
    body.querySelector('#total').textContent = `/${total}`;
}


if(power == null){
    localStorage.setItem('power' , '500');
    body.querySelector('#power').textContent = '500';
}else{
    body.querySelector('#power').textContent = power;
}


if(count == null){
    localStorage.setItem('count' , '1')
}

window.addEventListener('unload', function(){
    localStorage.setItem('coins' , '0');
});
timerID=0;
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

    coins = localStorage.getItem('coins');
    power = localStorage.getItem('power');
    
    if(Number(power) > 0){
        localStorage.setItem('coins' , `${Number(coins) + 1}`);
        h1.textContent = `${(Number(coins) + 1).toLocaleString()}`;
    
        localStorage.setItem('power' , `${Number(power) - 1}`);
        body.querySelector('#power').textContent = `${Number(power) - 1}`;
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
    taps = taps+1
    t();

    body.querySelector('.progress').style.width = `${(100 * power) / total}%`;
});

setInterval(()=> {
    count = localStorage.getItem('count')
    power = localStorage.getItem('power');
    if(Number(total) > power){
        localStorage.setItem('power' , `${Number(power) + Number(count)}`);
        body.querySelector('#power').textContent = `${Number(power) + Number(count)}`;
        body.querySelector('.progress').style.width = `${(100 * power) / total}%`;
    }
}, 1000);