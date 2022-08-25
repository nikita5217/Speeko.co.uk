const ToTop = document.querySelector('.to-top');
const header = document.querySelector('header');
const body = document.querySelector('body');
const video = document.querySelector('.big-video-cont video');
const videoCont = document.querySelector('.electro-inform-block .electro-cont .info .play-cont');
// const videoBtn = document.querySelectorAll('.electro-inform-block .electro-cont .info img');

const bigVideoCont = document.querySelector('.big-video-cont');
const bigVideoFon = document.querySelector('.big-video-fon');
const bigVideo = document.querySelector('.big-video');
const bigVideoClouse = document.querySelector('.big-video-clouse');


videoCont.addEventListener('click', ()=>{
    videoFullscreen();
})
bigVideoClouse.addEventListener('click', ()=>{
    unVideoFullscreen();
})
bigVideoFon.addEventListener('click', ()=>{
    unVideoFullscreen();
})


function videoFullscreen(){
    bigVideoCont.style.display = 'flex';
    videoCont.style.display = 'none'
    body.style.overflow = 'hidden'
    setTimeout(function() {
        bigVideoCont.style.opacity = 1;
        bigVideo.style.transform = 'scale(1)';
        video.play();
    }, 20);
}
function unVideoFullscreen(){
    bigVideoCont.style.opacity = 0;
    bigVideo.style.transform = 'scale(.1)';
    body.style.overflow = 'unset'
    video.pause();
    videoCont.style.display = 'flex'
    setTimeout(function() {
        bigVideoCont.style.display = 'none';
    }, 400);
}



window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > window.innerWidth/5){
        ToTop.style.right = '4vw';
        // if (window.innerWidth < 767) {
        //     header.style.transform = 'translateY('+ -(window.innerWidth/7) + 'px)';
        // }
    } else{
        ToTop.style.right = '-18vw';
        // if (window.innerWidth < 767) {
        //     header.style.transform = 'translateY(0px)';
        // }
    }

    if (window.innerWidth < 767) {
        if ((window.pageYOffset/2) < (window.innerWidth/7)) {
            header.style.marginTop =  Math.round(-(window.pageYOffset/2)) + 'px';
            header.style.boxShadow = 'none'
        }else if((window.pageYOffset/2) > (window.innerWidth/5)){
            header.style.marginTop = Math.round(-(window.innerWidth/7)) + 'px';
            header.style.boxShadow = '-3px -3px 8px rgb(0 0 0 / 37%), 0 2px 8px rgb(0 0 0 / 37%)';
        }

    }
        
       
    
})
ToTop.addEventListener('click', ()=>{
    scrollTop();
})

function scrollTop(){
    if(window.pageYOffset > 10){
        window.scrollBy(0, -35);
        setTimeout(()=>{
            scrollTop();
        }, 5)
    }
}



function scrollDownTeam(){
    if (window.innerWidth < 767) {
        if(window.pageYOffset < ((window.innerWidth/100)*1150)-40){
            window.scrollBy(0, 25);
            setTimeout(()=>{
                scrollDownTeam();
            }, 5)
        } else if (window.pageYOffset > ((window.innerWidth/100)*1150)+40) {
            window.scrollBy(0, -25);
            setTimeout(()=>{
                scrollDownTeam();
            }, 5)
        }
    }else{
        if(window.pageYOffset < ((window.innerWidth/100)*190)-40){
            window.scrollBy(0, 25);
            setTimeout(()=>{
                scrollDownTeam();
            }, 5)
        } else if (window.pageYOffset > ((window.innerWidth/100)*190)+40) {
            window.scrollBy(0, -25);
            setTimeout(()=>{
                scrollDownTeam();
            }, 5)
        }
    }
}
function scrollDownTime(){
    if (window.innerWidth < 767) {
        if(window.pageYOffset < ((window.innerWidth/100)*550)-40){
            window.scrollBy(0, 30);
            setTimeout(()=>{
                scrollDownTime();
            }, 8)
        } else if (window.pageYOffset > ((window.innerWidth/100)*550)+40) {
            window.scrollBy(0, -30);
            setTimeout(()=>{
                scrollDownTime();
            }, 8)
        }
    }else{
        if(window.pageYOffset < ((window.innerWidth/100)*80)-40){
            window.scrollBy(0, 30);
            setTimeout(()=>{
                scrollDownTime();
            }, 8)
        } else if (window.pageYOffset > ((window.innerWidth/100)*80)+40) {
            window.scrollBy(0, -30);
            setTimeout(()=>{
                scrollDownTime();
            }, 8)
        }
    }
}
function scrollDownVideo(){
    if (window.innerWidth < 767){
        if(window.pageYOffset < ((window.innerWidth/100)*810)-40){
            window.scrollBy(0, 30);
            setTimeout(()=>{
                scrollDownVideo();
            }, 8)
        } else if (window.pageYOffset > ((window.innerWidth/100)*810)+40) {
            window.scrollBy(0, -30);
            setTimeout(()=>{
                scrollDownVideo();
            }, 8)
        }
    } else{
        if(window.pageYOffset < ((window.innerWidth/100)*125)-40){
            window.scrollBy(0, 30);
            setTimeout(()=>{
                scrollDownVideo();
            }, 8)
        } else if (window.pageYOffset > ((window.innerWidth/100)*125)+40) {
            window.scrollBy(0, -30);
            setTimeout(()=>{
                scrollDownVideo();
            }, 8)
        }
    }
}
function scrollDownContact(){
    if(window.pageYOffset < document.body.scrollHeight - window.innerHeight - 20){
        window.scrollBy(0, 35);
        setTimeout(()=>{
            scrollDownContact();
        }, 5)
    }
}

