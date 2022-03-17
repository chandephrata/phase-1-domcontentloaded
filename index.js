// Your code goes here
// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The DOM has loaded");
//   });
//   console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   );
  //document.addEventListener( "DOMContentLoaded", function(){

    document.addEventListener("DOMContentLoaded", function (e) {
       
        const text = document.querySelector("#text");
        console.log(text.innerHTML);
        text.innerHTML = "This is really cool!";
      });
      console.log(
        
      );