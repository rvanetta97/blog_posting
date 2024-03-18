const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

const form = document.querySelector('#form')

form.addEventListener('submit', function(e) {
  e.preventDefault();
    const uname = document.getElementById("uname").value
    const blogtitle = document.getElementById("blogtitle").value
    const bcontent = document.getElementById("bcontent").value
    
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const blogPost = {
        author: uname,
        title: blogtitle,
        ontent: bcontent
    };
    console.log(blogPost)
    blogPosts.push(blogPost);
    const blogPostsJSON = JSON.stringify(blogPosts);
    localStorage.setItem('blogPosts', blogPostsJSON);
  
    
/*redirects user to the new page*/
    window.location.href='https://rvanetta97.github.io/blog_posting/blog.html';
    return
});