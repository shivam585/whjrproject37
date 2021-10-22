var canvas, backgroundImage;

var questions;

var question, contestant, quiz;

var kbc

function preload(){
 kbc=loadImage("kbc.png")



}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background(kbc);

}
