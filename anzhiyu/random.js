var posts=["post14/","post3/","post15/","app/","post9/","lsp/","fadian/","post10/","film/001/","post7/","post6/","post8/","pinglun001/","quote/","post11/","post12/","post5/","post2/","post4/","post1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };