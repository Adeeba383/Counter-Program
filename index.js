const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const labelCount = document.getElementById("myH1");
let count = 0;

increment.onclick = function(){
    count++;
    labelCount.textContent = count;

}
decrement.onclick = function(){
    count--;
    labelCount.textContent = count;
}
reset.onclick = function(){
    count = 0;
    labelCount.textContent = count;
}

