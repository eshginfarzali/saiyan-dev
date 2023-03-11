var fil=document.querySelector('.es-filter');
var fils=document.querySelector('.es-filters');


fils.addEventListener('click', function(){
    if(fil.style.display=="flex"){
        fil.style.display="none"
    }else{
        fil.style.display="flex"
    }
     
})