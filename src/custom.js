
// Mac OS window controls

const $ = (selector) => document.querySelector(selector)

const titlebar = $("#workbench\\.parts\\.sidebar > div.composite.title")
const buttonsDiv = document.createElement("div")

const close = document.createElement("button")
const minimize = document.createElement("button")
const maximize = document.createElement("button")

minimize.disabled = true
maximize.disabled = true

buttonsDiv.classList.add("window-controls")
close.classList.add("window-control")
minimize.classList.add("window-control")
maximize.classList.add("window-control")

close.id = "close"
minimize.id = "minimize"
maximize.id = "maximize"

close.style.backgroundColor = "#FC5753"
minimize.style.backgroundColor = "#FDBC40"
maximize.style.backgroundColor = "#36C84B"


buttonsDiv.appendChild(close)
buttonsDiv.appendChild(minimize)
buttonsDiv.appendChild(maximize)

titlebar.prepend(buttonsDiv)

close.addEventListener("click", () => window.close())

