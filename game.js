var jugador = document.getElementById("character");
var block = document.getElementById("block1");
var counter=0;


function jump(){
    if(jugador.classList == "animate"){return}
    jugador.classList.add("animate");
    setTimeout(function(){
        jugador.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(jugador).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        localStorage.setItem("Player",Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scorelocal").innerHTML = localStorage.getItem("Player");
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);