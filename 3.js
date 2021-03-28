let word = prompt('Ввод:');
let result = '';
for (let i = word.length; i > 0; i--){
  result += word[i - 1];
}
console.log(result);