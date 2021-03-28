let arr = ['orange' , 'orange', 'orange', 'orange'];
let trigger = 0;
for (let i = 0; i < arr.length ; i++){
  if(arr[0] === arr[i]){
    trigger = true;
  } else {
    trigger = false;
    break;
  }
}
console.log(trigger);