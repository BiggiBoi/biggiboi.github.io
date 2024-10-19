let isMobile = function(a){ if (typeof a === 'undefined') { var a =  navigator.userAgent||navigator.vendor||window.opera;} if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))){return true;}else{return false;}};
if (isMobile() === false) {
    document.querySelector('.qr-code').style.display = 'flex';
    document.querySelector('.app').remove();
    document.querySelector(".loader").remove();
   }
const app = Telegram.WebApp;
const body = document.body;
const image = body.querySelector('#coin');
const score_div = body.querySelector('h1');
const current_power_div = body.querySelector('#power');
const total_power_div = body.querySelector('#total');
const clan_div = body.querySelector('.avatar');
const nickname = body.querySelector('.nickname');
const loader = document.querySelector(".loader");
const rank_div = document.querySelector(".rank");

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
let clan = '';
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
        info.taps_power = response.taps_power;
        if (response.clan == null){
            clan = '?';
        } else {
            clan = response.clan;
        }
        clan_div.innerText = clan;
        nickname.innerText = response.username;
        current_power_div.innerHTML = response.current_power; 
        total_power_div.innerHTML = response.total_power;
        rank_div.innerText = response.rank;
        score_div.innerText = response.score;

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
        //info.current_power = response.current_power;
        //info.score = response.score;
        //info.taps_power = response.taps_power;
       // rank_div.innerText = response.rank;
        //score_div.textContent = `${(Number(info.score))}`;
    })
}

start_sync(app.initDataUnsafe);

function send_sync(){
    timerID = setTimeout(()=>{
        let user = {
            time_sync: Date.now(),
            id: app.initDataUnsafe.user.id,
            score: 0,
            current_power: 0
        }
        //info.time_sync = Date.now();
        //info.id = app.initDataUnsafe.user.id
        console.log('sync',user);
        if (info.taps > 1){
            info.score = score_div.innerHTML;
        }
        //sync(info)
        info.taps = 0;
    },1000);
}

function hint(x, y){
    let hint_div = document.querySelector('.click-hint');
    let hint = document.createElement("div");
    hint.classList.add('hint');
    hint.innerText = '+'+info.taps_power;
    hint.style.top = y;
    hint.style.left = x;
    hint.style.visibility = 'visible';
    hint_div.appendChild(hint);
    hint.classList.add('hint-animation');
    setTimeout(()=>{
        hint.style = 'visibility: hidden; opacity: 0; translate(-50%, -50%) translateY(-120px)';
        hint.remove();
    }, 500);
}

function to_click(e){
    clearTimeout(timerID);
    let x = e.offsetX;
    let y = e.offsetY;
    let x1 = e.pageX;
    let y1 = e.pageY;

    if((Number(info.current_power) > 0) && (Number(info.current_power) - Number(info.taps_power) >= 0) && info.taps <= info.current_power){
        score_div.textContent = `${score_div.innerHTML+info.taps_power}`;
        current_power_div.textContent = `${Number(info.current_power) - info.taps_power}`;
        info.score+=info.taps_power;
        info.current_power-=info.taps_power;
        info.taps +=1; 
        send_sync();
    } 
    hint(x1,y1);
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
    
}

document.addEventListener("visibilitychange", () => {
    info.time_sync = Date.now();
    //sync(info)
});
window.addEventListener("blur", e => {
    info.time_sync = Date.now();
    //sync(info)
});
window.addEventListener("unload", e => {
    info.time_sync = Date.now();
    //sync(info)
});
image.addEventListener('click' , (e)=> {
    to_click(e)    
});

setInterval(()=> {
    if(Number(info.total_power) > info.current_power){
        current_power_div.textContent = `${Number(info.current_power) + 1}`;
        info.current_power+=1;
        body.querySelector('.progress').style.width = `${(100 * info.current_power) / info.total_power}%`;
    }
}, 1000);