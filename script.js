let show = document.getElementById("output");
// window.promises = [promise1 , promise2 ,promise3 ,promise4 , promise5];

let promise1 = new Promise( (resolve , reject) => {
    setTimeout(() => {
        resolve("hello 1")
    }, 4000)
})

let promise2 = new Promise( (resolve , reject) => {
    setTimeout(() => {
        resolve("hello 2")
    }, 5000)
})

let promise3 = new Promise( (resolve , reject) => {
    setTimeout(() => {
        resolve("hello 3")
    }, 1000)
})

let promise4 = new Promise( (resolve , reject) => {
    setTimeout(() => {
        resolve("hello 4")
    }, 2000)
})

let promise5 = new Promise( (resolve , reject) => {
    setTimeout(() => {
        resolve("hello 5")
    }, 3000)
})


window.promises = [promise1 , promise2 ,promise3 ,promise4 , promise5];
// Do not change the code above this
// add your promises to the array `promises`
Promise.any([promise1 , promise2 ,promise3 ,promise4 , promise5])
.then((res) => {
    show.innerText = res ;
})
