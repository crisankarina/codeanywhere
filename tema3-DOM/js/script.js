// window.addEventListener("load", function(event) {
//   console.log("All resources finished loading!");
//  }); am pus asta doar pentru a exersa cum se scrie

 document.addEventListener("DOMContentLoaded", onHtmlLoaded);

 function onHtmlLoaded() {
   console.log("DOM fully loaded and parsed");
   
   var fname = document.getElementById("fname");
   var lname = document.getElementById("lname");
   var area = document.getElementById("text-area");
   
   var valid ;
   
   var btn = document.getElementById("sub");
   btn.addEventListener("click", onSubmit);
   
   function makeBorder(element) {
     element.style.border = "solid 2px red";
     valid = false;
   }
   
   function hideBorder(element){
     element.style.border = "solid 1px grey";
   }
   
   function displayBanner() {
     var banner = document.querySelector("h3");
     banner.innerText = "Thank you for contacting us, " + fname.value;
     banner.style.visibility = "visible";
     banner.style.background = "green";
     console.log("First name: ", fname.value);
     console.log("Last name: ", lname.value);
     console.log("Text-area:", area.value);
   }
   
   function hideBanner() {
     var banner = document.querySelector("h3");
     banner.style.visibility = "hidden";
     
   }
   
   function onSubmit() {
     valid = true;
     if (fname.value === ""){
       makeBorder(fname);
     } else {
       hideBorder(fname);
     }
     if (lname.value === ""){
       makeBorder(lname);
     } else {
       hideBorder(lname);
     }
     if (area.value === ""){
       makeBorder(area);
     } else {
       hideBorder(area);
     } 
     if (valid === true) {
       displayBanner();
     } else {
       hideBanner();
       
     }
   }
   
 }
// tema aceasta mi s-a parut foarte de folos si interesanta :)
