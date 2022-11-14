const body = document.querySelector('body')
const imgBx = document.querySelector('.imgBx')
let btn = document.querySelector('.slider')
darkmode = true

// let getMode = localStorage.getItem("mode")

// if (getMode && getMode === "dark") {
//     body.classList.toggle('dark');
//     imgBx.classList.toggle('dark');
//     if(darkmode){
//         darkmode = false
//     }
//     else
//     {
//         darkmode = true
//     }
// }


btn.addEventListener("click", () => {
    body.classList.toggle('dark');
    imgBx.classList.toggle('dark');
    if(darkmode){
        darkmode = false
    }
    else
    {
        darkmode = true
    }
    if(!body.classList.contains('dark')) {
        return localStorage.setItem("mode", "light")
    }
    localStorage.setItem("mode", "dark")
})