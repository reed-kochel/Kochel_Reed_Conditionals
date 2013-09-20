// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

var budget; //a given budget you are willing to have
var item; //s
var userInput = prompt ("What is your budget?");
var userInput = prompt ("Enter the price of an item you want. Use two numbers after decimal (ie 100.25)")
alert("View the web browser console to see if you can afford the item you want!")



//the code block used to determine if you can buy the item you want
if(budget < item){
  //code performed if condition is true
    console.log("You can buy the item you want") ;


}else{
    console.log("Sorry, you can't afford the item right now")
}