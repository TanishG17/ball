var ball,img,paddle,paddles,balls;
function preload() {
  /* preload your images here of the ball and the paddle */
  balls = loadImage("ball.png");
  paddles= loadImage("paddle.png");
}

  
  
  function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200,200);
  paddle = createSprite(100,100);
    
    
    /* assign the images to the sprites */
  ball.addImage("ballss",balls);
  paddle.addImage("paddless",paddles)
  /* give the ball an initial velocity of 9 in the X direction
  */
  ball.velocityx = 9;

}


  
  
  function draw() {
  background(205,153,0);
 
    /* create Edge Sprites here */
 edges=createEdgeSprites();
 
    /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[2]);
   ball.bounceOff(edges[3]);
 ball.bounceOff(edges[1]);
 
    /* Allow the ball to bounceoff from the paddle */
    ball.bounceOff(paddle);
 
    /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 ball.collide(paddle, random(-5,5));
  
    /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = -5;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = 5;
  }
  drawSprites();
  
}


  
  function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityY = rand(-5,5);
  
  
}

