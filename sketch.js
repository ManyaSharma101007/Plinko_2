const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions = [];
var plinkos = [];
var particles = [];

function setup() {
  createCanvas(400,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(200,790,400,10);

  for (var k = 0; k <=width; k = k + 50) {
    divisions.push(new Division(k, 620, 5, 350));
  }


   for (var j = 25; j <=width; j=j+50) 
   {
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 25; j <=width; j=j+50) 
   {
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
      plinkos.push(new Plinko(j,375));
   }

  Engine.run(engine);
}

function draw() {
  background(0); 

  ground.display();

  for (var k = 0; k < divisions.length; k++) {  
    divisions[k].display();
  }
  
  for (var i = 0; i < plinkos.length; i++) {    
    plinkos[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Ball(random(width/2-30, width/2+30), 10,10));
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  if(ball!=null)
    {
       ball.display();
        
        if (ball.body.position.y>760)
        {
              if (ball.body.position.x < 300) 
              {
                  score=score+500;      
                  ball=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (ball.body.position.x < 600 && ball.body.position.x > 301 ) 
              {
                    score = score + 100;
                    ball=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (ball.body.position.x < 900 && ball.body.position.x > 601 )
              {
                    score = score + 200;
                    ball=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }
}