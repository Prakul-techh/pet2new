//Create variables here
var dog,dogImages,dogImages2;
var food,feedstock;
var feed,addFood;
var fedTime,lastFed;
var foodObj;
var database;

function preload()
{
dogImages=loadImage("images/dogImg.png");
dogImages2=loadImage("images/dogImg1.png");
}

function setup() {
 
  database=firebase.database();
  createCanvas(800, 700);

  foodObj=new Food(200,40,50,50);

  feedStock=database.ref('Food');
  feedStock.on("value",readStock);

  dog=createSprite(400,400,50,50)
  dog.addImage(dogImages);
  dog.scale=0.15;
 

  feed=createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  
  addFood=createButton("Add Food")
  addFood.position(800,95);
  addFood.mousePressed(addFood)

 

  
}

function fedTime(){


}


function draw() {  
background('green');
foodObj.display();

fedTime=database.ref('fedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
})

  
  //add styles here
  //text("Note:Press UP_ARROWKey to feed Dog Milk",200,200);
 
  text("food remaining: "+food,200,250)
  fill('black');
  stroke('black');

  if(lastFed>=12 ){
    text("Last Fed:"+lastFed%12+"PM",350,30);
  }else if(lastFed==0){
    text("Last Fed:12AM",350,30);
  }else{
    text("Last Fed:"+lastFed+"AM",350,30)
  }
  drawSprites();

}
function readStock(data){
  food=data.val();
  foodObj.updateFoodStock(foodS)
}

function feedDog(){
  dog.addImage(images/dogImg1.png)

  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0)
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }

  
  database.ref('/').update({
    food:foodObj.getFoodStock(),
    fedTime: hour ()
  })
}

function addFood(){
  foodS++;
  database.ref('/').update({
    food:foodS
  })
}


function writeStock(x){
  if(x<=0)
  {x=0}
  else
  {x=x-1;}
  database.ref('/').update({Food:x})

}





