// 1
//  function js3(a,b){
//    if (a<b ) 
//    alert('Второе число больше первого!');
//   else if (a>b)
//   alert(' первое число больше второгоого!');
//  }
//  js3(4,3)

// 2
// let arr1 = prompt("Введите первое слова")
// let arr2 = prompt("Введите второ слова")

// function twoMass() {
//     if (arr1.length > arr2.length) {
//         alert(arr1.length    + ' '  + " больше чем " + ' ' + arr2.length)
//     } else if (arr2.length > arr1.length) {
//         alert(arr1.length    + ' '  + " меньше чем " + ' ' + arr2.length)
//     } else {
//         alert("ОНИ равны")
//     }
// }
// twoMass()

// 3
// const str = prompt('enter something...')

// function strlenght(str) {
//     console.log(str.length);
// }
// strlenght(str)

4

function sum() {
    var result = 0;
  
    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
  
    return result;
  }

console.log( sum(1, 2, 3) );
