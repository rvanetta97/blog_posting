const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

const form = document.getElementById("form")
const uname = document.getElementById("uname")
const blogtitle = document.getElementById("blogtitle")
const bcontent = document.getElementById(bcontent)

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = uname.value 
    const title = blogtitle.value 
    const blogpost = bcontent.value

    localStorage.setItem("username", uname.value);
    localStorage.setItem("title", blogtitle.value);
    localStorage.setItem("blog-post", bcontent.value);

    window.location.href=""
})