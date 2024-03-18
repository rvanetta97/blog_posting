const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

const form = document.getElementById("form").value
const uname = document.getElementById("uname").value
const blogtitle = document.getElementById("blogtitle").value
const bcontent = document.getElementById("bcontent").value

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = uname.value 
    const title = blogtitle.value 
    const blogpost = bcontent.value

    localStorage.setItem("username", uname.value);
    localStorage.setItem("title", blogtitle.value);
    localStorage.setItem("blogpost", bcontent.value);

    window.location.href="./blog.html";
    return
})