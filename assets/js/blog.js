const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

window.addEventListener('load', () => {
    const username = localStorage.getItem('uname')
    const title = localStorage.getItem('blogtitle')
    const blogpost= localStorage.getItem("blogpost")
})