document.querySelector("button").addEventListener("click", () => {
    document.querySelector("button").style.display = "none"
    setTimeout(() => {
        document.querySelector("button").style.display = "block"
    }, 1000)
})