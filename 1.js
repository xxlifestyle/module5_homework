let myNum = prompt('Введите значение:');
myNum = +myNum;
if (typeof myNum != 'number' || isNaN(myNum) ){
  console.log('Упс, кажется, вы ошиблись');
} else {
  if (myNum % 2 == 0) {
    console.log('Число четное');
  } else{
    console.log('Число нечетное');
	}
}