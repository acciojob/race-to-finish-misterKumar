


// Do not change the code above this
// add your promises to the array `promises`

let p1=new Promise((resolve,reject)=>{

    
    let random_time=getRandomTime(1000,5000);
    setTimeout(() => {
        resolve("Im in promise1")
    }, random_time);
})

let p2=new Promise((resolve,reject)=>{

    
    let random_time=getRandomTime(1000,5000);
    setTimeout(() => {
        resolve("Im in promise2")
    }, random_time);
})

let p3=new Promise((resolve,reject)=>{

    
    let random_time=getRandomTime(1000,5000);
    setTimeout(() => {
        resolve("Im in promise3")
    }, random_time);
})

let p4=new Promise((resolve,reject)=>{

    
    let random_time=getRandomTime(1000,5000);
    setTimeout(() => {
        resolve("Im in promise4")
    }, random_time);
})

let p5=new Promise((resolve,reject)=>{

    
    let random_time=getRandomTime(1000,5000);
    setTimeout(() => {
        resolve("Im in promise5")
    }, random_time);
})

function getRandomTime(min, max) {
    return Math.random() * (max - min) + min;
  }

//   const promises = [];
window.promises=[p1,p2,p3,p4,p5]; 
let output_div=document.getElementById("output");
Promise.any(promises).then((value)=>output_div.innerHTML=value);