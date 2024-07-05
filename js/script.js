let img;
let img2;
let canvasWidth = 800;
let canvasHeight = 600;
let imgWidth = 75;
let imgHeight = 100;
let xPos;
let yPos;
let xSpeed = 1;
let ySpeed = 1;
function preload(){
    img = loadImage('./images/TARDIS.png');
    img2 = loadImage('./images/planets.jpg')
}
function setup(){
    createCanvas(500,300);
    //createCanvas(canvasWidth,canvasHeight);
    xPos= random(0, canvasWidth-imgWidth);
    yPos = random(0,canvasHeight-imgHeight);
}
function draw(){
    //color,colorstring, [a],gray, [a],v1, v2, v3, [a],values,image, [a]
    background(img2)
    //rect(0, 0, canvasWidth, canvasHeight);
    image(img, xPos, yPos, 75,100);
    xPos += xSpeed;
    //xPos = xPos + xSpeed;
    //One line comment
    /*This is
    a multiple
    line comment*/
    yPos += ySpeed;
    if( (xPos > 500-75) || (xPos < 0) ){
        xSpeed = xSpeed * -1;
    }
    if(yPos > 300-100 || yPos < 0){
        ySpeed = ySpeed * -1;
    }
}