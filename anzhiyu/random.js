var posts=["2025/03/17/hello-world/","2025/03/25/mypost/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };