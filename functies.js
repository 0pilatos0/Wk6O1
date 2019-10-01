function moveRight(aantal){
    for(i = 0; i < aantal; i++ ){
        robotArm.moveRight();
    }
}

function moveLeft(aantal){
    for(i = 0; i < aantal; i++ ){
        robotArm.moveLeft();
    }
}
function drop(){
    robotArm.drop();
}
function grab(){
    robotArm.grab();
}
function scan(){
    grab();
    kleur = robotArm.scan();
    drop();
    return kleur;
}