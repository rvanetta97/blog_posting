const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

const form = document.getElementById("form").value


form.addEventListener("submit", function(e) {
    e.preventDefault();
    const uname = document.getElementById("uname").value
    const blogtitle = document.getElementById("blogtitle").value
    const bcontent = document.getElementById("bcontent").value
    
    const blogPost = {
      author: uname,
      title: blogtitle,
      Content: bcontent
    };
    
    const blogPostJSON = JSON.stringify(blogPost);

    localStorage.setItem('blogPost', blogPostJSON);
    /*const username = uname.value 
    const title = blogtitle.value 
    const blogpost = bcontent.value

    localStorage.setItem("username", uname.value);
    localStorage.setItem("title", blogtitle.value);
    localStorage.setItem("blogpost", bcontent.value);*/

    window.location.href= 'https://rvanetta97.github.io/blog_posting/blog.html';
    /*return*/
})