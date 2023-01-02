
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mole, badmole, hammer, whac;
var moleImage, badmoleImage, hammerImage, whacImage;
var bg,title;
var bgImage, minibgImage, titleImage;
var startButton, endButton, restartButton;
var moleGroup;
var score = 0
var gamestate = "start"


function preload()
{
	moleImage = loadImage("ImagesAndSounds/mole.png")
	badmoleImage = loadImage("ImagesAndSounds/badmole.png")
	hammerImage = loadImage("ImagesAndSounds/hammer.png")
	bgImage =  loadImage("ImagesAndSounds/molebg.jpg")
	minibgImage = loadImage("ImagesAndSounds/startbg.png")
	titleImage = loadImage("ImagesAndSounds/whackTitle.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	startButton = createImg("ImagesAndSounds/startButton.png")
	startButton.position(250,300)
	startButton.mouseClicked(playState)

	// restartButton = createImg("ImagesAndSounds/restart.png")
	// restartButton.position(250,300)
	// restartButton.mouseClicked(playState)
	// restartButton.hide()
	

	title = createSprite(390,70,400,350)
	title.addImage(titleImage)
	title.visible = false


	bg = createSprite(400,350,800,700)
	bg.addImage(bgImage)
	bg.scale = 3.3
	bg.visible = false

	bgEnd = createSprite()
	bgEnd.addImage(minibgImage)
	bg.scale

	Engine.run(engine);

	hammer = createSprite(200,200)
	hammer.visible = false
	hammer.addImage(hammerImage)
	hammer.scale = 0.4

	moleGroup = new Group()
	badmoleGroup = new Group()
  
}


function draw() {
//   rectMode(CENTER);
  background("olive");
  
  drawSprites();
  //spawnMoles()
  
  if(gamestate=="start"){
	title.visible = true
  }
  if(gamestate=="play"){
	playState()
	spawnMoles()
	spawnBadmoles()
	console.log("play state is working")
  }
  if(gamestate=="end"){
	endState()
  }
  if(gamestate=="win"){
	winState()
  }
  if(gamestate=="loose"){
	looseState()
  }
  //text(mouseX + "," + mouseY, mouseX, mouseY);
}



function playState(){

	gamestate = "play";
	startButton.hide()
	bg.visible = true
	hammer.visible = true
	hammer.x = mouseX 
	hammer.y = mouseY + 80
	
	textSize(30)
	fill("white")
	text ("Score: "+score,100,50)

	push();
    //image(lifeImage, width / 2 - 130, height - player.positionY - 400, 20, 20);
    fill("white");
    rect(width / 2 - 100, 50, 185, 20);
    fill("red");
    rect(width / 2 - 100, 50, 100, 20);
    noStroke();
    pop();

	if(badmoleGroup.isTouching(hammer)){
		badmoleGroup[0].destroy()
		score = score + 10
	}
	if(score==190){
		gamestate = "loose"
	}

	push();
    //image(lifeImage, width / 2 - 130, height - player.positionY - 400, 20, 20);
    fill("white");
    rect(width / 2 - 100, 75, 185, 20);
    fill("green");
    rect(width / 2 - 100, 75, score, 20);
    noStroke();
    pop();

	if(moleGroup.isTouching(hammer)){
		moleGroup[0].destroy()
		score = score + 10
	}
	if(score==190){
		gamestate = "win"
	}
	
}

function spawnMoles(){
	if(frameCount % 60 === 0){
		mole = createSprite(160,115,70,70)
		mole.scale = 0.23
		console.log(World.frameCount)
		
		

		var randomPosition = Math.round(random(1,9))
		switch(randomPosition){
         case 1: mole.x = 160;
		         mole.y = 105;
		 break;

		 case 2: mole.x = 400;
		 mole.y = 105;
         break;

		 case 3: mole.x = 645;
		 mole.y = 105;
         break;

		 case 4: mole.x = 160;
		 mole.y = 340;
         break;

		 case 5: mole.x = 400;
		 mole.y = 340;
         break;

		 case 6: mole.x = 640;
		 mole.y = 340;
		 break;

		 case 7: mole.x = 160;
		 mole.y = 580;
		 break;

		 case 8: mole.x = 400;
		 mole.y = 580;
		 break;

		 case 9: mole.x = 640;
		 mole.y = 580;
		 break;

		 default: break;

		}

		mole.addImage(moleImage)
		bg.depth = mole.depth
		mole.depth = mole.depth + 1
		hammer.depth = mole.depth
		hammer.depth = hammer.depth + 1
		
		moleGroup.add(mole)
	}
}
function spawnBadmoles(){
	if(frameCount % 100 === 0){
		badmole = createSprite(160,115,70,70)
		badmole.scale = 0.23
		console.log(World.frameCount)
		
		

		var randomPosition = Math.round(random(1,9))
		switch(randomPosition){
         case 1: badmole.x = 160;
		         badmole.y = 105;
		 break;

		 case 2: badmole.x = 400;
		 badmole.y = 105;
         break;

		 case 3: badmole.x = 645;
		 badmole.y = 105;
         break;

		 case 4: badmole.x = 160;
		 badmole.y = 340;
         break;

		 case 5: badmole.x = 400;
		 badmole.y = 340;
         break;

		 case 6: badmole.x = 640;
		 badmole.y = 340;
		 break;

		 case 7: badmole.x = 160;
		 badmole.y = 580;
		 break;

		 case 8: badmole.x = 400;
		 badmole.y = 580;
		 break;

		 case 9: badmole.x = 640;
		 badmole.y = 580;
		 break;

		 default: break;

		}

		badmole.addImage(badmoleImage)
		bg.depth = badmole.depth
		badmole.depth = badmole.depth + 1
		hammer.depth = badmole.depth
		hammer.depth = hammer.depth + 1
		
		badmoleGroup.add(badmole)
	}
}
function winState(){
	swal({
		title: `congratulations!`,
		text: "You won the game!",
		imageUrl:
		  "https://th.bing.com/th/id/OIP.bw1qQei5JFrTnl-zDzE3WgHaJ3?w=162&h=216&c=7&r=0&o=5&dpr=1.5&pid=1.7",
		imageSize: "100x100",
		confirmButtonText: "Thanks For Playing"
	  });
}
function looseState(){
	swal({
		title: `You lost!`,
		text: "You hit the wrong moles!",
		imageUrl:
		  "https://th.bing.com/th/id/OIP.bw1qQei5JFrTnl-zDzE3WgHaJ3?w=162&h=216&c=7&r=0&o=5&dpr=1.5&pid=1.7",
		imageSize: "100x100",
		confirmButtonText: "Thanks For Playing"
	  });
}

// function endState(){
// 	if(){
// 		hammer.visible = false
// 		mole.visible = false

// 	}
// }