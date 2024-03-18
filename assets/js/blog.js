const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

localStorage.getItem('username')
localStorage.getItem('title')
localStorage.getItem('blog-post')

