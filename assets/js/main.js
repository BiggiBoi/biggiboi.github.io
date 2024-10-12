$(document).ready(function(){
    let coin = document.querySelector('.coin');

    coin.addEventListener('click', (e){
        let x = e.offsetX;
        let y = e.offsetY;
        navigator.vibrate(5);
        if(x < 150 & y < 150){
            coin.style.transform = 'translate(-0.25rem, -0.25rem) skewY(-10deg) skewX(5deg)';
        }
        else if (x < 150 & y > 150){
            coin.style.transform = 'translate(-0.25rem, 0.25rem) skewY(-10deg) skewX(5deg)';
        }
        else if (x > 150 & y > 150){
            coin.style.transform = 'translate(0.25rem, 0.25rem) skewY(10deg) skewX(-5deg)';
        }
        else if (x > 150 & y < 150){
            coin.style.transform = 'translate(0.25rem, -0.25rem) skewY(10deg) skewX(-5deg)';
        }

        setTimeout(()=>{
            coin.style.transform = 'translate(0px, 0px)';
        }, 100);
       // coin.classList.add('slide-fwd-center');
       // coin.addEventListener('animationend', function(){
       //     coin.classList.remove('slide-fwd-center');
       // }, {once:true});
    });
});