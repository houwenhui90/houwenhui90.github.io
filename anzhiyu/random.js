var posts=["2025/03/17/hello-world/","2025/03/18/mark/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };