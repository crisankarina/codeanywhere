$(onHtmlLoaded);

   function onHtmlLoaded(){
     console.log("Dom Loaded")
     
     
     var loadPosts = function() {
      $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      //method : "GET" default daca nu il pun, este GET
      success: function (data) {
        console.log("Posts = ", data);
          }  
       });
     }

     var loadPost = function(id) {
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/" + id,
        success: function(com) {
          console.log("Post = ", com);
        }
      });
     }
     
     loadPosts();
     loadPost(3);
     loadPost(10);
     loadPost(50);
     
     //REQUEST TO CREATE A POST
     
     var createPost = function (){
       $.ajax({
         url: "https://jsonplaceholder.typicode.com/posts/",
         method: "POST",
         data: { // data este parametru cu care se trimite in js elemente de HTML
           title: "Post by Karina",
           body: "Bla bla bla",
           userId: 1
         },
         success: function (data) {
           console.log("Create post", data);
           console.log("Create post with id", data.id);
         }
       });
     }
     
     createPost();
     
     // REQUEST TO UPDATE A POST cu PUT
     
     var editPost = function (id){
       $.ajax({
         url: "https://jsonplaceholder.typicode.com/posts/" + id,
         method: "PUT",
         data: {
           title: "Edit Post by Karina",
           body: "Bla bla bla",
           userId: 1
         },
         success: function(data){
           console.log("New post", data);
         }
       });
     }
     
     editPost(1);
     editPost(10);
     
     
     // REQUEST TO DELETE A POST
     
     var deletePost = function (id){
       $.ajax({
         url: "https://jsonplaceholder.typicode.com/posts/" + id,
         method: "DELETE",
         success: function(){ //punem data daca consideram ca vrem sa il folosim in fct
           console.log("Post was deleted");
         }
       })
     }
     
     deletePost(1);
     deletePost(6);
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    
  }