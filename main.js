//init progress
const progress = document.querySelector('.progress');

//add Event Listener to the window
window.addEventListener('scroll', prorgessBar);

//make a function
function prorgessBar(e){  // e - event
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percentage = windowScroll / windowHeight * 100; 
    
    progress.style.width = percentage + '%'; 
}