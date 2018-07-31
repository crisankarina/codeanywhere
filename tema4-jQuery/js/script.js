$(onHtmlLoaded); 

function onHtmlLoaded(){
  console.log("DOM fully loaded and parsed");
  
  var fname = $("#fname");
  var lname = $("#lname");
  var area = $("#text-area");
  var valid ;
  
  var btn = $("#sub");
  btn.on("click", onSubmit);
  
   function makeBorder(element) {
     element.css("border", "solid 2px red");
     valid = false;
   }
  
   function hideBorder(element){
     element.css("border", "solid 1px grey");
   }
  
   function displayBanner() {
     var banner = $("#banner");
     banner.text("Thank you for contacting us, " + fname.val());
     banner.css("visibility", "visible");
     banner.css("background", "green");
     console.log("First name: ", fname.val());
     console.log("Last name: ", lname.val());
     console.log("Text-area:", area.val());
   }
  
   function hideBanner() {
     var banner = $("#banner");
     banner.css("visibility", "hidden");
   }
  
   function onSubmit() {
     valid = true;
     if (fname.val() === ""){
       makeBorder(fname);
     } else {
       hideBorder(fname);
     }
     if (lname.val() === ""){
       makeBorder(lname);
     } else {
       hideBorder(lname);
     }
     if (area.val() === ""){
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