// alert('By');
// var myName=5;
// var yourName=myName;
// alert(yourName);
// var user="Andrew";
// alert(typeof user);
// alert(typeof myName);
// var a;
// alert(typeof a);
// alert(b);
// var x=(10);
// var y=(5);
// var name="Name";
// var result=(name+x+y);
// alert(result);
// var z =(4*2);
// alert(z);

// function showMessage() {
//     var user="AndrewE";
//     alert(user);
// }
// showMessage();

// var result=prompt("Ваше имя", "введите имя");
// alert(result);


// var isAdmin = confirm("Вы - администратор?");
// alert( isAdmin );

// var result=prompt("Ваше имя", "введите ваше имя");
// alert("Ваше имя"+" "+result);

// var x=0;
// if(x>5) {
//     alert("x>5");
// }
// else if(x<5 && x>0){
//     alert("x< fdgdf  5");
// }
// else if(x==0){
//     alert("x=0");
// }

// var y=0;
// switch (y) {
//     case 1: document.write('x не равен 1'); break;
//     case 0: document.write('x = 0'); break;
// }

// var age = prompt("Ваш возраст", "введите число");
// var message = (age<18) ? "Ваш возраст слишком маленький":
//             (age>=18 && age<=50) ? "отличный возраст":
//              "вау";

// alert(message);


// var login = prompt("Who r u?",'user name');
// var message = (login=='admin') ? "Привет, Админ!":
//             (login==null) ? "Вход отменен":
//              "Я Вас не знаю";

// alert(message);

// var pass = prompt('Enter ur pass');
// var message = (pass == 'pass') ? 'Пароль принят':
//                 (pass == null) ? 'Вход отменен':
//                 'пароль не верный';
// alert(message);

// var login = prompt("Who r u?",'user name');
// if (login=='Admin') {
//     alert( "Привет, Админ!");
//         var pass = prompt('Enter ur pass', 'пароль');
//         var message = (pass == 'pass') ? 'Пароль принят':
//         (pass == null) ? 'Вход отменен':
//         'пароль не верный';
//     alert(message);
// }
// else if (login==null){
//     alert("Вход отменен");
// }
// else {
//     alert("Я Вас не знаю");
// }


// var a = prompt('Enter a', 'number');
// var b = prompt('Enter b', 'number');
// var result = +a + +b;

// var message = (result< 4) ? 'Мало':
//             'Много';
// alert(message);

// var login = promdt ('Enter name')
//             if (login == 'Вася') {
                
//                 message = 'Привет';
                
//                 } else if (login == 'Директор') {
                
//                 message = 'Здравствуйте';
                
//                 } else if (login == '') {
                
//                 message = 'Нет логина';
                
//                 } else {
                
//                 message

// var i;
// for (i=0; i<15; i++){
//     alert(i);
// }


// var i;
// for (i=0; i<15; i++){
//     if (i % 3 == 0) continue;
//     document.write(i + "<br>");
// }



// var x = 29;
// for (i=17; i<x; i++){
//     if (x%2 == 0) {
//        if (i == x-2) {
//              continue;
//         }
//     } else {
//         if (i == x-1) {
//             continue;
//         }
//     }

//     // от последнего четного числа

//     if (i % 2 == 0) {
//         document.write(i + "<br>");
//     }
// }


// Вывести все чётные числа в промежутке от 17 до 29, кроме последнего чётного числа.
// Теперь попробуем написать такой же скрипт, но при каждом шаге переменную увеличивать на 2, а не на 1
// var x=10;
// var i=0;
// while (i<x) {
//     i=i+2; document.write(i+"<br>");
//     }

    // Написать цикл, который просит у пользователя написать чётное число больше 20. 
    // И запрашивает снова пока пользователь не ввёдет подходящее число либо не нажмёт “cancel”.

// do {
//     var x = prompt('Введите четное число больше 20');
//     if (x == null) break;
//     x = +x;
// } while (x<20);
// if (x!=null) {alert("ok");}


// обьявить массив и вывести длинну в консоль F12
// var arr = [1,4,5,6,4,7];
// console.log(arr.length);
// // вывести значение второго элемента массива
// console.log (arr[2]);
// console.log (arr[2]=4); //перезаписать значение элемента

// arr[6]="last element"; //добавляем последний элемент еще один со значением last element
// console.log (arr[6]); //выводим этот элемент



//вывести все элеменеты массива по порядку в столбик
// var arr = [1,4,5,6,4,7];
// for (var i=0; i<arr.length; i++){
//     document.write(arr[i]+"<br>");
// }



//Наполнить массив 5ю значениями и увеличить кажд след элемент на 1 записываемый в массив
// var arr=[];
// var firstEl = 5;
// for (i=0; i<5; i++) {
//     arr[i]=firstEl;
//     firstEl+=1;
//     document.write(arr[i]+"<br>");
// }
// //теперь считаем сумму элементов этого же массива
// var x=0;
// for (i=0; i<arr.length; i++) {
//     x=x+arr[i];
// }
// document.write(x);



//наполняем трехмерный массив элементами, где значение элемента = порядковому номеру элемента
// var arr_1=[];
// var arr_2=[];
// var arr_3=[];
// for (i=0; i<5; i++) {arr_1[i]=i;}
// for (i=0; i<10; i++) {arr_2[i]=i;}
// for (i=0; i<15; i++) {arr_3[i]=i;}

// var arr = [arr_1, arr_2, arr_3];
// for(var x=0; x<arr.length; x++) {
//     for(var j=0; j<arr[x].length; j++){
//         document.write(arr[x][j]+"<br>")
//     }

// }



// сортируем массив пузырьковой сортировкой
// var testArr=[5,8,0,3,9];
// for (var i=0; i<testArr.length; i++) {
//      if (testArr[i+1]<testArr[i]) {
//         var j=testArr[i+1]; 
//         testArr[i]=testArr[i+1];
//         testArr[i+1]=j;
//        }
// }
// document.write(testArr);



var testArr=[5,8,0,3,9];
for (var j=0; j<testArr.length; j++) {
   for (var i=0; i<testArr.length; i++) {
        if (testArr[i]>testArr[i+1]) {
            var x=testArr[i+1]; 
            testArr[i+1]=testArr[i];
            testArr[i]=x;
        }
    }
}    
document.write(testArr);
