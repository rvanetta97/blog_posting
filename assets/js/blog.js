const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})

window.addEventListener('load', (displayPosts) => {
    const displayPosts = function (blogPosts) {
        const blogPosts = JSON.parse(localStorage.getItem("blogPosts"));
        const submittedpost = document.getElementById('submittedpost');
        submittedpost.innerHTML = '';

        if (Array.isArray(blogPosts)) {
            blogPosts.forEach(blogPost => {
                const post = document.createElement('div');

                const title = document.createElement('span');
                title.textContent = blogPost.title;
                post.appendChild(title);

                const content = document.createElement('span');
                content.textContent = blogPost.text;
                post.appendChild(content);

                const author = document.createElement('span');
                author.textContent = blogPost.authorName;
                post.appendChild(author);

                submittedpost.appendChild(post);
            });
        }
    };
});