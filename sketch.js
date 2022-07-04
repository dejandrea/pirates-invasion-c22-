const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine, world;

var bgImg;
var ground;
var tower, towerImg;




function preload() {
  bgImg = loadImage("./assets/background.gif")
  towerImg = loadImage("./assets/tower.png")
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  }

  //criando o corpo do solo
  ground = Bodies.rectangle(0,height-1,width*2,1,options);
  World.add(world,ground);

  //criando o corpo da torre
  tower = Bodies.rectangle(160,350,160,310,options)
  World.add(world,tower)

}

function draw() {
  background(189);
  image(bgImg,0,0,width,height)

  Engine.update(engine);

  // exibindo o solo na tela
  rect(ground.position.x,ground.position.y,width*2,1)

  // exibindo a torre na tela
  push() //inicia uma nova configuração
  imageMode(CENTER)
  image(towerImg,tower.position.x, tower.position.y,160,310)
  pop() //volta para a configuração antiga


  // exibindo a torre na tela
  push() //inicia uma nova configuração
  imageMode(CENTER)
  image(towerImg,tower.position.x, tower.position.y,160,310)
  pop() //volta para a configuração antiga


  // exibindo a torre na tela
  push() //inicia uma nova configuração
  imageMode(CENTER)
  image(towerImg,tower.position.x, tower.position.y,160,310)
  pop() //volta para a configuração antiga


  // exibindo a torre na tela
  push() //inicia uma nova configuração
  imageMode(CENTER)
  image(towerImg,tower.position.x, tower.position.y,160,310)
  pop() //volta para a configuração antiga


  // exibindo a torre na tela
  push() //inicia uma nova configuração
  imageMode(CENTER)
  image(towerImg,tower.position.x, tower.position.y,160,310)
  pop() //volta para a configuração antiga


  // posição do mouse na tela
  text("X:"+mouseX+" | Y:"+mouseY,mouseX, mouseY)
}
