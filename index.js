const btmm=document.querySelectorAll("button");
btmm[0].addEventListener("click", getclicked_W);
btmm[1].addEventListener("click", getclicked_A);
btmm[2].addEventListener("click", getclicked_s);
btmm[3].addEventListener("click", getclicked_D);
btmm[4].addEventListener("click", getclicked_J);
btmm[5].addEventListener("click", getclicked_k);
btmm[6].addEventListener("click", getclicked_L);


document.addEventListener("keypress", function(event){
    if(event.key=="w"){
            getclicked_W();

    }

    else if(event.key=="a"){
        getclicked_A();
    }
    else if(event.key=="s"){
        getclicked_s();
    }
    else if(event.key=="d"){
        getclicked_D();
    }
    else if(event.key=="j"){
        getclicked_J();
    }
    else if(event.key=="k"){
        getclicked_k();
    }
    else if(event.key=="l"){
        getclicked_L();
    }

});



function getclicked_W(){
    var audio= new Audio('sounds/tom-1.mp3');
    audio.play();
    
}


function getclicked_A(){
    var audio= new Audio('sounds/tom-2.mp3');
    audio.play();
    
}

function getclicked_s(){
    var audio= new Audio('sounds/tom-3.mp3');
    audio.play();
    
}

function getclicked_D(){
    var audio= new Audio('sounds/tom-4.mp3');
    audio.play();
    
}

function getclicked_J(){
    var audio= new Audio('sounds/snare.mp3');
    audio.play();
    
}

function getclicked_k(){
    var audio= new Audio('sounds/kick-bass.mp3');
    audio.play();
    
}


function getclicked_L(){
    var audio= new Audio('sounds/crash.mp3');
    audio.play();
    
}