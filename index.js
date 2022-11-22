//document.getElementById("count-el").innerText = 6
console.log("start of the index.js");
let count = 0;
console.log(count);
function increment(){
    console.log("button is clicked");
    count++;
    console.log(count);
    document.getElementById("count-el").innerText = count;
}
console.log("end of the index.js");