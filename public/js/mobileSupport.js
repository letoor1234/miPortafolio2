var styleElem = document.head.appendChild(document.createElement("style"));
styleElem.innerHTML = ".hard-skill::after{left:0;} .project::after{left:0;}";
document.addEventListener('click', (e)=>{
    if(e.target.className==='hard-skill' || e.target.className==='project'){
        styleElem.innerHTML = ".hard-skill::after{left:0;} .project::after{left:0;} #"+e.target.id+"::after {left:100%;}";
    } else{
        styleElem.innerHTML = ".hard-skill::after{left:0;} .project::after{left:0;}";
    }
})

