const elem = document.querySelectorAll('.item input[type= "checkbox"]');


// tracking the last checked box
let lastChecked;

function myCheckbox(e) {

    // flag variable
    let inBet = false;
    
    // checking if the shift key is pressed and they are 'checking' it
    if(e.shiftKey && this.checked){
        elem.forEach(element => {

            // execute when either the first checked element or the last checked 
            // element is found
            if(element === this || element === lastChecked){
                inBet = !inBet;
            }

            // checking the boxes in between the first and the last checked boxes
            if(inBet){
                element.checked = true;
            }
        });
    }

    lastChecked= this;
}



elem.forEach(element => element.addEventListener('click', myCheckbox) );


// for sensing the key pressed is shift
// window.addEventListener('keydown', (e) => {
        
//     if(e.key === 'Shift') {
//         console.log(true);
//     }

// });