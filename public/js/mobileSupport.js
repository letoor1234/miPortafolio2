var loader = document.getElementById('load-veil');

var styleElem = document.head.appendChild(document.createElement("style"));
styleElem.innerHTML = "body{max-height: 100vh; overflow:hidden} .hard-skill::after{left:0;} .project::after{left:0;}";


document.addEventListener('click', (e)=>{
    if(e.target.className==='hard-skill' || e.target.className==='project'){
        styleElem.innerHTML = "#load-veil{display:none;}.hard-skill::after{left:0;} .project::after{left:0;} #"+e.target.id+"::after {left:100%;}";
    } else{
        styleElem.innerHTML = "#load-veil{display:none;}.hard-skill::after{left:0;} .project::after{left:0;}";
    }
})

function isLoaded(){
    styleElem.innerHTML = "#load-veil{display:none;}.hard-skill::after{left:0;} .project::after{left:0;}";
}

