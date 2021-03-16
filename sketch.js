var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 80);
  fixedrect.shapeColor='green';

  movingrect=createSprite(400, 200, 80, 30);
  movingrect.shapeColor='green';
}

function draw() {
  background('black'); 
  
  movingrect.x=mouseX
  movingrect.y=mouseY

  if (movingrect.x - fixedrect.x <= movingrect.width / 2 + fixedrect.width / 2 &&
    fixedrect.x - movingrect.x <= movingrect.width / 2 + fixedrect.width / 2 &&
    movingrect.y - fixedrect.y <= movingrect.height / 2 + fixedrect.height / 2 &&
    fixedrect.y - movingrect.y <= movingrect.height / 2 + fixedrect.height / 2){
movingrect.shapeColor='blue';
fixedrect.shapeColor='blue';

  }

else{
  fixedrect.shapeColor='green';
  movingrect.shapeColor='green';
}




  drawSprites();

}