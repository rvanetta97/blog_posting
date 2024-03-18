const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})

window.addEventListener('load', () => {
        const blogPosts = JSON.parse(localStorage.getItem("blogPosts"));
        const submittedpost = document.getElementById('submittedpost');
        submittedpost.innerHTML = '';

        if (Array.isArray(blogPosts)) {
            blogPosts.forEach(blogPost => {
                const post = document.createElement('div');

                post.classList.add('box')

                const title = document.createElement('span');
                title.textContent = blogPost.title;
                post.appendChild(title);

                const content = document.createElement('span');
                content.textContent = blogPost.content;
                post.appendChild(content);

                const author = document.createElement('span');
                author.textContent = blogPost.author;
                post.appendChild(author);

                submittedpost.appendChild(post);
            });
        }
    
});