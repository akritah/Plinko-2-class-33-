const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 const Events = Matter.Events;
 

 var engine,world;
 var particle;
 
var particles = [];
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var gameState="start";
var score =0;
var count=0;



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);

 text("500",20,680);
 text("500",100,680);
 text("500",180,680);
 text("100",260,680);
 text("100",340,680);
 text("100",420,680);
 text("200",500,680);
 text("200",580,680);
 text("200",660,680);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

if(particle!=null){
  particle.display();

  if(particle.body.position.y>680){

    if (particle.body.position.x<300) {
      score=score+500;
      particle=null;
    
    }
    if (particle.body.position.x>301 && particle.body.position.x<600) {
      score=score+100;
      particle=null;
     
    }
     if (particle.body.position.x>601 && particle.body.position.x<800) {
      score=score+200;
      particle=null;
     
    }
    }
    
  }

  if (count>=5) {
      gameState="end";
    }
    if (gameState==="end") {
      text("GAME OVER",350,400);
      textSize(40);
    }

}




function mousePressed(){
  if(gameState!=="end"){
    count=count+1;
    particles.push(new Particle(mouseX,10,10,10));
  }
}