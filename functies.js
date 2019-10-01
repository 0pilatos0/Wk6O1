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
    return kleur;
}
function dropRight(aantal){
    moveRight(aantal);
    drop();
}
function dropLeft(aantal){
    moveLeft(aantal);
    drop();
}
function grabRight(aantal){
    moveRight(aantal);
    grab();
}
function grabLeft(aantal){
    moveLeft(aantal);
    grab();
}