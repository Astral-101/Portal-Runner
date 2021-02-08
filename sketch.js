var title, titleImage;
var multiplayer, multiplayerImage;
var singleButton, singleButtonImage;
var multiButton, multiButtonImage;
var portal, portalImage;
var bg, backgroundImage;
var START = 0;
var SINGLE = 1;
var gameState = START;
var character1Image;
var character2Image;
var selectionTitle, selectionTitleImage;
var boyPlayer, girlPlayer;

function preload(){

  //Preloading Images
  titleImage = loadImage("Images/TitleImage.png");
  multiplayerImage = loadImage("Images/MultiplayerImage.png");
  singleButtonImage = loadImage("Images/SinglePlayerButton.png");
  multiButtonImage = loadImage("Images/MultiPlayerButton.png");
  portalImage = loadImage("Images/PortalImage.png");
  backgroundImage = loadImage("Images/PortalBackground.jpg");
  character1Image = loadImage("Images/maleCharacter.png");
  character2Image = loadImage("Images/femaleCharacter.png");
  selectionTitleImage = loadImage("Images/selectionTitle.png");

}


function setup() {
  //GameState Start
  if (gameState === START){
    startImages();
    console.log("gameState is " +gameState)
  }

  
}

function draw() {
  background(255,255,255);  
  createCanvas(1000,600);

  //GameState Changes
  if (keyDown(UP_ARROW) && gameState === START){
    gameState = SINGLE;
    title.visible = false;
    multiplayer.visible = false;
    singleButton.visible = false;
    multiButton.visible = false;
    console.log("currently in " +gameState)
    console.log(bg.visible);

  }

  if(gameState === SINGLE){
    characterSelection();
    // console.log(characterSelection);
    

  }

  drawSprites();
}

//Functions for Different Game Sections

function startImages(){
  bg = createSprite(500, 300, 1000, 600);
  bg.addImage("bg", backgroundImage);

  title = createSprite(510, 200, 50, 50);
  title.addImage("title", titleImage);
  title.scale = 0.8;

  multiplayer = createSprite(500, 250, 50, 50);
  multiplayer.addImage("multi", multiplayerImage);
  multiplayer.scale = 0.5;     

  singleButton = createSprite(500, 350, 50, 50);
  singleButton.addImage("singler", singleButtonImage);
  singleButton.scale = 0.8;
                                             
  multiButton = createSprite(500, 395, 50, 50);
  multiButton.addImage("multi", multiButtonImage);
  multiButton.scale = 0.8;
}

function characterSelection(){
  var character1 = createSprite(320, 340, 50, 50);
  character1.addImage("male", character1Image);
  character1.scale = 1.4;

  // var character2 = createSprite(680, 370, 50, 50);
  // character2.addImage("female", character2Image);
  // character2.scale = 1.6;

  selectionTitle = createSprite(500, 100, 50, 50);
  selectionTitle.addImage("selection",  selectionTitleImage);
  selectionTitle.scale = 0.6;

  // character1.setCollider()
  character1.debug = true;
  // console.log()

  // if (mousePressedOver(character2)){
  //   character1.visible = false;
  //   character2.visible = false;
  //   selectionTitle.visible = false;
  //   girlPlayer = createSprite(100, 450, 50, 50);
  //   girlPlayer.addImage("female", character2Image);

    
  // }
}

function mousePressed(character1){
  character1.visible = false;
  // character2.visible = false;
  selectionTitle.visible = false;
  boyPlayer = createSprite(100, 450, 50, 50);
  boyPlayer.addImage("male", character1Image);
  console.log(boyPlayer.x);
  

}




