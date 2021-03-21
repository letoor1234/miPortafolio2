var body = document.getElementById('body');
var loader = document.getElementById('load-veil');
var loaderText = loader.children[0];
var el_Id= null;
body.style='max-height: 100vh; overflow:hidden;'
loader.style= 'display: block;'

var string= 'Loading...'
var stringCount = 1;

function loadingAnim(){
    stringCount++;

    if(stringCount <= 30){
        loaderText.innerHTML = string.slice(0, stringCount/3);
        el_Id= window.requestAnimationFrame(loadingAnim);
    } else{
        body.style='';
        loader.style= 'display: none;';
    }
}

el_Id =window.requestAnimationFrame(loadingAnim);