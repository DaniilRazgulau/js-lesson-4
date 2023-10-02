//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

const arr =  [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
//быть положительными и отрицательными. Выведите на экран только отрицательные
//числа, которые больше -10, но меньше -3.

const arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
const arr2 = [];

for(let i = 0; i < arr1.length; i++){
    if(arr1[i] > -10 && arr[i] < -3){
        arr2.push(arr1[i]);
    }
}

console.log(arr2);

let arrNew2 = arr1.filter(item => {
    if(item > -10 && item < -3){
        return true;
    }
});


console.log(arrNew2);

// Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
// while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
// массива. Запишите ее в переменную result и выведите.

const arr3 = [];
let result = 0;

for(let i = 23; i <= 57; i++){
    arr3.push(i);
    result += i;
}

console.log(arr3);
console.log(result);

// Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

const arr4 = ['10', '20', '30', '50', '235', '3000'];
let arr5 = arr4.filter(item => {
    if(item[0] === '1' || item[0] === '2' || item[0] === '5'){
        return true;
    }
})

console.log(arr5);

// Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
// дни недели, а выходные дни выведите жирным.

const arrDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for(let i = 0; i < arrDays.length; i++){
    if(i <= 4){
        document.write(`<p>${arrDays[i]}<p>`);
    } else{
        document.write(`<p>${arrDays[i].bold()}<p>`);
    }
}

// Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
// и получите последний элемент массива, используя свойство length.

const arr6 = [4 , 'table', 93, 44, 'heeeeeeeeeeeey'];

arr6.push('Im Groot');
console.log(arr6);
console.log(arr6[arr6.length-1]);

// Запросите у пользователя по очереди числовые значения при помощи prompt и
// сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
// значение. Выведите получившийся массив на экран. Выполните сортировку чисел
// массива, и выведите его на экран.

let arrNumber = [];

for(;;){
    let number = prompt('Введите число')

    if(isNaN(number) || number === null || number === ' '){
        break;
    }

    arrNumber.push(+number);
    arrNumber.sort(function(a, b){
        return a - b;
    });    
}

console.log(arrNumber);

// Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
// используя цикл while и метод reverse.

const arrReverse = [12, false, 'Текст', 4, 2, -5, 0];
const arrReverse2 = [];
let arr7 = arrReverse.length-1;

while(arrReverse2 >= 0){
    arrReverse2.push(arrReverse[arr7]);
    arr7--;
}

console.log(arrReverse2);

const arr8 = arrReverse.reverse();
console.log(arr8);

// Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
// целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

const arr9 = [5, 9, 21, , , 9, 78, , , , 6];
const arr10 = arr9.filter(Boolean);
let empty = arr9.length - arr10.length;
console.log(empty);

// Найдите сумму элементов массива между двумя нулями (первым и последним нулями
// в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
// более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
// [1,8,0,13,76,8,7,0,22,0,2,3,2].

const arr11 =  [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
let first = arr11.indexOf(0);
let last = arr11.lastIndexOf(0);
let sumNumbers = 0;

for(i = first; i < last; i++){
    if(sumNumbers[first] !== 0 && sumNumbers[last] !== 0){
        sumNumbers = 0;
    } else{
        sumNumbers += arr11[i];
    }
}

console.log(sumNumbers);