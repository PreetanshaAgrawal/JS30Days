const navHeight = document.querySelector('.nav');

function fixNav() {
    if(window.scrollY >= navHeight.offsetTop){
        document.body.style.paddingTop = navHeight.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    }
    else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);