// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

var servers; //a given amount of servers your companies have
var ethernetCables; //the amount of ethernet cables you have on hand.
var userInput = prompt ("How many servers do you have?"); //asking for user input
var userInput = prompt ("Enter how many ethernet cables you have on hand.")  //asking for user input
alert("View the web browser console to see if you have enough cables to hook up your web servers!")  //alert to let the user know they need to open the web browser console.



//the code block used to determine if you can buy the item you want
if(ethernetCables < servers){
    //code performed if condition is true
    console.log("You have enough cables to hook up your companies web servers!"); //console message to be displayed


}else{
    console.log("Sorry, you will need to acquire more ethernet cables to hook up the web servers!");
}
