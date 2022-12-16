// get the elements - part-1

const player = document.querySelector('.player');
const video = player.querySelector('.bigBuckBunny');

const progress = player.querySelector('.progressed')
const progressBar = player.querySelector('.progress__Filled')
const playPause = player.querySelector('.playPause')
const dataSkip = player.querySelectorAll('[data-skip]')
const playerFlow = player.querySelectorAll('.player_flow')



// build the functions - part -2

function togglePlay(){

    // only paused videos can be checked there is no .playing or something like that
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }
}


function updateButton(){
    const status = this.paused ? '▶' : '⏸';
    playPause.textContent = status;
}


function dataSkipped(){
    const skip = parseFloat(this.dataset.skip);
    video.currentTime += skip;
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}


function handleProgressBar(){
    const percent = (this.currentTime/ this.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;

}


function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime; 
}
// Hook up the event listeners

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgressBar);
video.addEventListener('click', togglePlay);
playPause.addEventListener('click', togglePlay);

dataSkip.forEach(data => data.addEventListener('click', dataSkipped))

playerFlow.forEach(range => range.addEventListener('change', handleRangeUpdate))

let mousedown = false;

progress.addEventListener('change', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);