$(onLoad) 
  
function onLoad (){
  console.log("DOM LOADED");
  $('#button1').click(getPostAndCommentsUsingFetch);
  
  function getPostAndCommentsUsingFetch() {
    fetch(
      'https://jsonplaceholder.typicode.com/posts', {
       method: 'GET'       
    })
    .then(function(response){
      return response.json()
    })
    .then(function(posts){
    
      console.log('posts', posts)
      var html = '<ul>' 
      for(var i=0; i<10; i++){
         var postId = posts[i].id;
//          if (postId === 3) throw 'We don\'t want to process this id';
         html += '<li>';
         html += '<div>' + posts[i].title + '</div>';
         html += '<ol id="post_id_' + postId + '"></ol>';
         html += '</li>';
         getCommentsPost(postId);
       }
       html += '</ul>'
      $('.content').html(html);
    })
   .catch(function(error) {
      alert(error);
    }) 
  }
  
  function getPostsAndComments(){
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET"
    })
    .then(function (posts){
      var html = '<ul>' 
      for(var i=0; i<10; i++){
         var postId = posts[i].id;
         html += '<li>';
         html += '<div>' + posts[i].title + '</div>';
         html += '<ol id="post_id_' + postId + '"></ol>';
         html += '</li>';
         getCommentsPost(postId);
       }
       html += '</ul>'
      $('.content').html(html);
    })
  }
  
  function getCommentsPost (postId){
    var computedPostId = postId
    if (postId === 4 || postId === 7) {
      computedPostId = '///dsds/' 
    }
   
    $.ajax({
       url: "https://jsonplaceholder.typicode.com/posts/" + computedPostId + "/comments",
       method: "GET",
    })
    .then(function (comments){
      var commentsList = "";
      var maxComments = comments.length > 10 ? 10 : comments.length;
      for (i=0; i<maxComments; i++) {
        commentsList += '<li>' + comments[i].name + '</li>'; 
      }
      $('#post_id_' + postId).html(commentsList);
    })
    .catch(function(error) {
      $('#post_id_' + postId).html('<li style="color:red;">Cannot get comments for post id ' + postId+ '</li>')
    })
  } 
}