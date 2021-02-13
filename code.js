var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9a5a9195-c5e2-4e14-9095-b54eea355621","85dfb950-2642-4b5d-b0a5-200a97bb7d59","530a2408-1bf7-4163-a276-c994417d76a9","13548c6c-48b3-495e-9252-52ea3b6a34fa","c62be05e-d563-460f-bf4b-b774407a2515","8ae2bf7c-0666-4a07-b38e-862c53eaf9cf","2bc45272-a9df-4748-aaba-75561114db95","1a8cc122-582d-4338-9c09-4efcd21fc4a1","cb8b98ef-25a2-44e1-899a-b66741bd6f8b","06e9a4a0-57e0-45d7-8202-2a02a5d4c364","1098c2eb-6730-4440-a495-2dd8690bef15","a165354a-b97e-4d40-a502-170efa77dcf1","4c0826a6-da16-49a3-815b-a60c4348c06c","7c1c3cb1-cc10-4051-beec-4e975a6ddd7d","be5279f7-d7c5-4475-8f49-16c48602efaf","7a894156-d7b5-4049-b9fa-7a8daf219752","df1c0a44-d656-403e-b44e-e78cf384d87a","7019ad5b-2b8d-4038-b735-d8958069fada","16a9b1fb-e958-4ecf-a47b-63eb9bec836d"],"propsByKey":{"9a5a9195-c5e2-4e14-9095-b54eea355621":{"name":"pac ghosts 4.jpg_1","sourceUrl":null,"frameSize":{"x":48,"y":43},"frameCount":2,"looping":true,"frameDelay":12,"version":"W6Or3loRdhSJHTJB9rT2bHQ78tsyyOOe","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":86},"rootRelativePath":"assets/9a5a9195-c5e2-4e14-9095-b54eea355621.png"},"85dfb950-2642-4b5d-b0a5-200a97bb7d59":{"name":"red l.jpg_1","sourceUrl":null,"frameSize":{"x":43,"y":42},"frameCount":2,"looping":true,"frameDelay":12,"version":"9eOeTzf91NjNXJTqoDafma53GFiYpbFI","loadedFromSource":true,"saved":true,"sourceSize":{"x":43,"y":84},"rootRelativePath":"assets/85dfb950-2642-4b5d-b0a5-200a97bb7d59.png"},"530a2408-1bf7-4163-a276-c994417d76a9":{"name":"orange l.jpg_1","sourceUrl":null,"frameSize":{"x":45,"y":39},"frameCount":2,"looping":true,"frameDelay":12,"version":"_8HZSaQMMSXppL9DpSqwEcAdsRUMUXQH","loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":78},"rootRelativePath":"assets/530a2408-1bf7-4163-a276-c994417d76a9.png"},"13548c6c-48b3-495e-9252-52ea3b6a34fa":{"name":"pink l.jpg_1","sourceUrl":null,"frameSize":{"x":50,"y":39},"frameCount":2,"looping":true,"frameDelay":12,"version":"bu6rG4Vv2VyaMqsby60bm0Lbz4A7_UJM","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":78},"rootRelativePath":"assets/13548c6c-48b3-495e-9252-52ea3b6a34fa.png"},"c62be05e-d563-460f-bf4b-b774407a2515":{"name":"up","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":2,"looping":true,"frameDelay":5,"version":"GhcTk7kWQ.RRwKoVQBWJ6Hew0Iuy51jN","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/c62be05e-d563-460f-bf4b-b774407a2515.png"},"8ae2bf7c-0666-4a07-b38e-862c53eaf9cf":{"name":"right","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":2,"looping":true,"frameDelay":5,"version":"JXxDgSDLP6KaTLzitS2f.aj1su8Zyft9","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/8ae2bf7c-0666-4a07-b38e-862c53eaf9cf.png"},"2bc45272-a9df-4748-aaba-75561114db95":{"name":"logo","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"DwrrM2M9gTu29AWtA_srRevqdcDTHb_W","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/2bc45272-a9df-4748-aaba-75561114db95.png"},"1a8cc122-582d-4338-9c09-4efcd21fc4a1":{"name":"left","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":2,"looping":true,"frameDelay":5,"version":"XqOYGNe3VSlDutxx_V4jE1yogWopPBeM","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/1a8cc122-582d-4338-9c09-4efcd21fc4a1.png"},"cb8b98ef-25a2-44e1-899a-b66741bd6f8b":{"name":"down","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":2,"looping":true,"frameDelay":5,"version":"h5lS.pcuHEykNYHPhYjiUAws7wtDtRYO","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/cb8b98ef-25a2-44e1-899a-b66741bd6f8b.png"},"06e9a4a0-57e0-45d7-8202-2a02a5d4c364":{"name":"obstacle 2.png_1","sourceUrl":null,"frameSize":{"x":44,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"NNKbDmaG9IdQOM97BZ0m2NrfptZMJzqN","loadedFromSource":true,"saved":true,"sourceSize":{"x":44,"y":200},"rootRelativePath":"assets/06e9a4a0-57e0-45d7-8202-2a02a5d4c364.png"},"1098c2eb-6730-4440-a495-2dd8690bef15":{"name":"obstacle 1.png_1","sourceUrl":null,"frameSize":{"x":300,"y":44},"frameCount":1,"looping":true,"frameDelay":12,"version":"cLuQ53zTWcb8iw_.mQCSlMIC9k1seGpx","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":44},"rootRelativePath":"assets/1098c2eb-6730-4440-a495-2dd8690bef15.png"},"a165354a-b97e-4d40-a502-170efa77dcf1":{"name":"obsatcle 3.png_1","sourceUrl":null,"frameSize":{"x":90,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":"QPLUnslblLyPnUE_fk7hOF4p9B9Gb67q","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":90},"rootRelativePath":"assets/a165354a-b97e-4d40-a502-170efa77dcf1.png"},"4c0826a6-da16-49a3-815b-a60c4348c06c":{"name":"ball","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"bdehDys3PZSz7YTpcldac7t.SsbsG3jg","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4c0826a6-da16-49a3-815b-a60c4348c06c.png"},"7c1c3cb1-cc10-4051-beec-4e975a6ddd7d":{"name":"ball black","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"6aHZcgLCk2r0j1QvXC3a.ldRtgaCdrTI","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/7c1c3cb1-cc10-4051-beec-4e975a6ddd7d.png"},"be5279f7-d7c5-4475-8f49-16c48602efaf":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/LBlP81tVFOe5pivbH48aq_4zoApgk97p/category_game_blocks/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"LBlP81tVFOe5pivbH48aq_4zoApgk97p","categories":["game_blocks"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LBlP81tVFOe5pivbH48aq_4zoApgk97p/category_game_blocks/textGameOver.png"},"7a894156-d7b5-4049-b9fa-7a8daf219752":{"name":"pacman logo.jpg_1","sourceUrl":"assets/v3/animations/KhCjjF7JXVVuI3LGXBQUvVAAI9TjC2afZZctBuC7cFc/7a894156-d7b5-4049-b9fa-7a8daf219752.png","frameSize":{"x":228,"y":63},"frameCount":1,"looping":true,"frameDelay":4,"version":"BXkqgWCljj_L4xHGHm342IU25T7KluEn","loadedFromSource":true,"saved":true,"sourceSize":{"x":228,"y":63},"rootRelativePath":"assets/v3/animations/KhCjjF7JXVVuI3LGXBQUvVAAI9TjC2afZZctBuC7cFc/7a894156-d7b5-4049-b9fa-7a8daf219752.png"},"df1c0a44-d656-403e-b44e-e78cf384d87a":{"name":"spacebattle_16_1","sourceUrl":null,"frameSize":{"x":15,"y":14},"frameCount":1,"looping":true,"frameDelay":12,"version":"ON.PZqGOg0wpfKkAT0208b7SvK1CsB8Y","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":14},"rootRelativePath":"assets/df1c0a44-d656-403e-b44e-e78cf384d87a.png"},"7019ad5b-2b8d-4038-b735-d8958069fada":{"name":"trophy_1","sourceUrl":null,"frameSize":{"x":165,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"mShpkhti.HLPGQNPK606dCi7mt8Lm9uN","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":165,"y":168},"rootRelativePath":"assets/7019ad5b-2b8d-4038-b735-d8958069fada.png"},"16a9b1fb-e958-4ecf-a47b-63eb9bec836d":{"name":"burst06_1","sourceUrl":"assets/api/v1/animation-library/gamelab/t569jVNRHeTqM2O_7oiquvzQpB.DMdh9/category_game_blocks/burst06.png","frameSize":{"x":396,"y":354},"frameCount":1,"looping":true,"frameDelay":2,"version":"t569jVNRHeTqM2O_7oiquvzQpB.DMdh9","categories":["game_blocks"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":354},"rootRelativePath":"assets/api/v1/animation-library/gamelab/t569jVNRHeTqM2O_7oiquvzQpB.DMdh9/category_game_blocks/burst06.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var youwon = createSprite(200,200);
youwon.setAnimation("trophy_1");
youwon.visible=false;

var pacman = createSprite(30, 350);
pacman.debug=false;
pacman.setCollider("circle",3,0,15)
pacman.setAnimation("right");
pacman.visible=false;
var invisiblewall1=createSprite(20,300,70,60);
 invisiblewall1.visible=false;
 var pillG = createGroup();
 var heart1 = createSprite(10,10);
 heart1.setAnimation("spacebattle_16_1");
 var heart2 = createSprite(27,10);
 heart2.setAnimation("spacebattle_16_1");
 var heart3 = createSprite(43,10);
 heart3.setAnimation("spacebattle_16_1");
var score = 0;
var ghostblue = createSprite(130,200,10,10);
ghostblue.setAnimation("pac ghosts 4.jpg_1");
var ghostorange = createSprite(276,197,10,10);
ghostorange.setAnimation("orange l.jpg_1");
var ghostpink = createSprite(190,200,10,10);
ghostpink.setAnimation("pink l.jpg_1");
var ghostred = createSprite(240,200,10,10);
ghostred.setAnimation("red l.jpg_1");

for (var f = 95; f < 340; f=f+40) {
 var pills4 = createSprite(275,f);
 pills4.setAnimation("ball");
pills4.setCollider("circle",-5,-10,3);
   
   pillG.add(pills4);
  
  
  
}
for (var g = 60; g < 350; g=g+40) {
   var pills6 = createSprite(g,345);
   
  pills6.setCollider("circle",-5,-10,3);
   pills6.setAnimation("ball");
    pillG.add(pills6);
 }


var blast1 = createSprite(200,200);
blast1.setAnimation("burst06_1");
blast1.visible=false;



var wall1 = createSprite(320, 200,5);
wall1.setAnimation("obstacle 2.png_1");
var wall2 = createSprite(78,200);
wall2.setAnimation("obstacle 2.png_1");
var wall3 =createSprite(200,380);
wall3.setAnimation("obstacle 1.png_1");
var wall4 =createSprite(200,300);
wall4.setAnimation("obsatcle 3.png_1");
var wall5 = createSprite(200,130);
wall5.setAnimation("obsatcle 3.png_1");
var wall6 = createSprite(200,15);
wall6.setAnimation("obstacle 1.png_1");
var invisiblewall2 = createSprite(20,390,60,40);
invisiblewall2.visible=false;
var gameover1 = createSprite(200,50);
gameover1.visible=false;
gameover1.setAnimation("textGameOver_1");

var logopacman = createSprite(200,210);
logopacman.setAnimation("pacman logo.jpg_1");

var gameState = "start";

var life = 3;

 for (var i = 50; i < 400; i=i+40) {
   var pills= createSprite(i,70);
   //pills.debug=true;
  pills.setCollider("circle",-5,-10,3)
   pills.setAnimation("ball");
   pillG.add(pills);
 }
 for (var a = 70; a < 320; a=a+40) {
   var pills2 = createSprite(20,a);
  // pills2.debug=true;
  pills2.setAnimation("ball");
  pills2.setCollider("circle",-5,-10,3)
   
   pillG.add(pills2);
}

 for (var b = 100; b < 400; b=b+40) {
   var pills3 = createSprite(370,b);
   //pills3.debug=true;
  pills3.setCollider("circle",-5,-10,3);
   pills3.setAnimation("ball");
    pillG.add(pills3);
 }

for (var j = 90; j < 350; j=j+40) {
   var pills5 = createSprite(120,j);
   //pills3.debug=true;
  pills5.setCollider("circle",-5,-10,3);
   pills5.setAnimation("ball");
    pillG.add(pills5);
 }







function draw() {
  background("black");
fill("yellow")
textSize(15);
text(score,370,15);



if (life === 2){
  
  heart3.visible=false;
  }

if (life === 1) {
  
  heart2.visible=false;
}

if (life === 0) {
  
  heart1.visible=false;
  
  
}

if (pacman.isTouching(ghostred)|| pacman.isTouching(ghostblue)|| pacman.isTouching(ghostpink)|| pacman.isTouching(ghostorange)){
   ghostblue.x=130;
   ghostblue.y=200;
   ghostred.x=240;
   ghostred.y=200;
   ghostorange.x=276;
   ghostorange.y=197;
   ghostpink.x=190;
   ghostpink.y=200;
   pacman.x=30;
   pacman.y=350;
   life=life-1;
   /*var ghostblue = createSprite(130,200,10,10);
ghostblue.setAnimation("pac ghosts 4.jpg_1");
var ghostorange = createSprite(276,197,10,10);
ghostorange.setAnimation("orange l.jpg_1");
var ghostpink = createSprite(190,200,10,10);
ghostpink.setAnimation("pink l.jpg_1");
var ghostred = createSprite(240,200,10,10);
ghostred.setAnimation("red l.jpg_1");*/
   
   
 }

if (life === 0) {
 gameState = "over";
  pillG.destroyEach();
pacman.destroy;
ghostred.destroy();
ghostorange.destroy();
ghostpink.destroy();
ghostblue.destroy();
wall1.destroy();
wall2.destroy();
wall3.destroy();
wall4.destroy();
wall5.destroy();
wall6.destroy();
pacman.destroy();
  gameover1.visible=true;
  pillG.setAnimationEach("ball black");
  blast1.visible=true;
  
}

 if (keyDown("space")){
     
   var gameState="play";
   logopacman.destroy();
   invisiblewall1.destroy();
   invisiblewall2.destroy();
   pacman.visible=true;
  
 }

 pacman.bounce(invisiblewall1);
 pacman.bounce(invisiblewall2);
 
 
 
 
 
 
  
 createEdgeSprites();
 
pacman.collide(wall1);
pacman.collide(wall2);
pacman.collide(wall3);
pacman.collide(wall4);
pacman.collide(wall5);
pacman.collide(wall6);
 
 
  if (keyDown("right")){
pacman.x=pacman.x+5;

pacman.setAnimation("right");

  }
  
  if (keyDown("left"))
  {
    pacman.x=pacman.x-5 ;
   pacman.setAnimation("left");
    
  }
  
  if (keyDown("up")){
    pacman.setAnimation("up");
  pacman.y=pacman.y-5 ;
    
    
  }
  
  if (keyDown("down")){
    
    pacman.setAnimation("down");
    
    pacman.y=pacman.y+5;
    
  } 
 
 if (score === 2200){
   
   gameState = "win"
  pillG.visible=false;
  pacman.visible=false;
  ghostred.visible=false;
  ghostblue.visible=false;
  ghostorange.visible=false;
  ghostpink.visible=false;
  wall1.visible=false;
  wall2.visible=false;
  wall3.visible=false;
  wall4.visible=false;
  wall5.visible=false;
  wall6.visible=false;
  heart1.visible=false;
  heart2.visible=false;
  heart3.visible=false;
  youwon.visible=true;
  youwon.setAnimation("trophy_1");
  textFont("Algerian");
  textSize(40);
  stroke("red");
  fill("yellow");
  text("YOU WON",100,50);
  pillG.setAnimationEach("ball black");
   
 }
 if (keyDown("space")){
ghostblue.setVelocity(randomNumber(-6, 6),randomNumber(-6,6));

ghostred.setVelocity(randomNumber(-6, 6),randomNumber(-6,6));

ghostorange.setVelocity(randomNumber(-6, 6),randomNumber(-6,6));

ghostpink.setVelocity(randomNumber(-6, 6),randomNumber(-6,6));
}
  
  

ghostblue.bounceOff(edges);
ghostblue.bounceOff(wall1);
ghostblue.bounceOff(wall2);
ghostblue.bounceOff(wall3);
ghostblue.bounceOff(wall4);
ghostblue.bounceOff(wall5);
ghostblue.bounceOff(wall6);

ghostred.bounceOff(edges);
ghostred.bounceOff(wall1);
ghostred.bounceOff(wall2);
ghostred.bounceOff(wall3);
ghostred.bounceOff(wall4);
ghostred.bounceOff(wall5);
ghostred.bounceOff(wall6);

ghostpink.bounceOff(edges);
ghostpink.bounceOff(wall1);
ghostpink.bounceOff(wall2);
ghostpink.bounceOff(wall3);
ghostpink.bounceOff(wall4);
ghostpink.bounceOff(wall5);
ghostpink.bounceOff(wall6);

ghostorange.bounceOff(edges);
ghostorange.bounceOff(wall1);
ghostorange.bounceOff(wall2);
ghostorange.bounceOff(wall3);
ghostorange.bounceOff(wall4);
ghostorange.bounceOff(wall5);
ghostorange.bounceOff(wall6);

pacman.bounce(edges);


   for (var z = 0; z < pillG.length; z++) { 
    if (pillG.get(z).isTouching(pacman)) {
      pillG.get(z).destroy();
      score=score+50
      
    }
  }
  drawSprites();
}
















// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
