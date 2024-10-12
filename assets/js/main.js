$(document).ready(function(){
    let coin = document.querySelector('.coin');

    coin.addEventListener('click', function(){
        coin.classList.add('slide-fwd-center');
        coin.addEventListener('animationend', function(){
            coin.classList.remove('slide-fwd-center');
        }, {once:true});
    });
});