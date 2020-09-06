var ground, drop, rain = [], umbrella, thunder, thunder1, thunder2,light,sound

function preload(){
 umbrella=loadImage("man.jpg")
 thunder=loadImage("thunder.jpg")
 thunder1=loadImage("thunder1.png")
 thunder2=loadImage("thunder2.jpg")
 sound = loadSound("rain_start.mp3")

}

function setup(){
   createCanvas(windowWidth, windowHeight)

   for(var i=0; i<200; i++){
    drop = new Drop(random(0,width), random(0,height))
    rain.push(drop)
   }

   light = createSprite(width/2, 30,80,80)
   
    
}

function draw(){
    background(255);

    sound.play();
    imageMode(CENTER);
   

    light.x = random(20,width-20)
    var rand =Math.round(random(1,3))

        switch(rand){
            case 1: light.addImage(thunder);
            break;
            case 2: light.addImage(thunder)
            break;
            case 3: light.addImage(thunder2)
            break;
            default: break;
         }
         
    for(var i=0; i<rain.length; i++){
        rain[i].display();
        rain[i].fall();
       }
      
     image(umbrella,windowWidth/2,height/2+100,400,500);


     drawSprites();
}   

