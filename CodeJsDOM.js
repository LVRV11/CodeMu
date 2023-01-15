// let button = document.querySelector('#button');
// console.log(button);

    /* <p id="elem1">1</p>
    <p id="elem2">2</p>
    <p id="elem3">3</p>
Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих 
переменных в консоль. */

// let paragraf = document.querySelector('#elem1');
// console.log(paragraf);
// let paragrafNext = document.querySelector('#elem2');
// console.log(paragrafNext);
// let paragrafNextNext = document.querySelector('#elem3');
// console.log(paragrafNextNext);

{/* <div id="block">
        <p>1</p>
        <p>2</p>
    </div> */}

// let par = document.querySelector('#block 1');
// console.log(par);


{/* <div class="block">
	<p>1</p>
	<p>2</p>
</div> */}

// let par = document.querySelector('.block p');
// console.log(par);

{/* <p class="www">text</p>
<p class="www">text</p> */}

// let par = document.querySelector('.www');
// console.log(par);

// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	console.log('!!!');
// });

{/* <input id="button1" type="submit">
<input id="button2" type="submit">
<input id="button3" type="submit">
Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, 
по клику на вторую - число 2, а по клику на третью - число 3. */}

// let buttonOne = document.querySelector('#button1');
// buttonOne.addEventListener('click', function() {
//     	console.log('1');
//     });
// let buttonSecond = document.querySelector('#button2');
// buttonSecond.addEventListener('click', function() {
//         console.log('2');
//     });
// let buttonThree = document.querySelector('#button3');
// buttonThree.addEventListener('click', function() {
//         console.log('3');
//     });    

{/* <input id="button1" type="submit" value="button1">
<input id="button2" type="submit" value="button2"></input> */}

// function func1() {
// 	console.log(1);
// }

// function func2() {
// 	console.log(2);
// }

// let button = document.querySelector('#button1');
// button.addEventListener('click', func1);
// let buttonTwo = document.querySelector('#button2');
// buttonTwo.addEventListener('click', func2);

// <p id="elem1">text</p>
// <p id="elem2">text</p>
// <p id="elem3">text</p>
// <p id="elem4">text</p>
// <p id="elem5">text</p>

// function func() {
// 	console.log('message');
// }

// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('click', func);
// let elem2 = document.querySelector('#elem2');
// elem2.addEventListener('click', func);
// let elem3 = document.querySelector('#elem3');
// elem3.addEventListener('click', func);
// let elem4 = document.querySelector('#elem4');
// elem4.addEventListener('click', func);
// let elem5 = document.querySelector('#elem5');
// elem5.addEventListener('click', func);

// function func1() {
// 	console.log('1');
// }

// function func2() {
// 	console.log('2');
// }

// function func3() {
// 	console.log('3');
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func1);
// elem.addEventListener('click', func2);
// elem.addEventListener('click', func3);

// let button = document.querySelector('#button');
// // button.addEventListener('dblclick', func);
// button.addEventListener('mouseover', func);
// button.addEventListener('mouseout', func2);

// function func() {
//     console.log('xeee');
// }

// function func2() {
//     console.log('sssd');
// }

// Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.

// let button = document.querySelector('#button');
// let par = document.querySelector('#elem');
// button.addEventListener('click', func);

// function func() {
//     console.log(par.textContent);
// }

// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст

// let button = document.querySelector('#button');
// let par = document.querySelector('#elem');
// button.addEventListener('click', func);

// function func() {
//     console.log(elem.textContent = 'ХЛЕБ');
// }

// Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. 
// По нажатию на кнопку выведите на экран сумму хранящихся чисел.

// {/* <p id="elem">1</p>
// <p id="elem2">2</p>
// <input id="button" type="submit"> */}

// let button = document.querySelector('#button');
// let par = document.querySelector('#elem');
// let par2 = document.querySelector('#elem2');

// button.addEventListener('click', func);
// function func() {
//         console.log(+elem.textContent + +elem2.textContent);
//     }

// Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.

// let button = document.querySelector('#button');
// let par = document.querySelector('#elem');
// let par2 = document.querySelector('#elem2');
// let par3 = document.querySelector('#elem3');
// let tekstDiv = document.querySelector('#user');
// button.addEventListener('click', func);
// tekstDiv.textContent = +elem.textContent + +elem2.textContent + +elem3.textContent;


// function func() {
//             console.log(+elem.textContent + +elem2.textContent + +elem3.textContent);
//         }

// Дан абзац с числом и кнопка. 
// По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.

// let button = document.querySelector('#button');
// let par = document.querySelector('#elem');
// button.addEventListener('click', func);


// function func() {
//             console.log(elem.textContent = +elem.textContent + 1);
//         }

// Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.

// let button = document.querySelector('#button');
// let par = document.querySelector('#elem');
// button.addEventListener('click', func);


// function func() {
//             console.log(elem.textContent = elem.textContent + '!');
//         }

// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст так, чтобы он был жирным.

// let button = document.querySelector('#button');
// let par = document.querySelector('#elem');
// button.addEventListener('click', func);
// function func() {
//             console.log(elem.innerHTML = elem.textContent.bold());
//         }

// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', func);

// function func() {
//             console.log(elem.type = 'submit');
//         }

// Пусть у вас есть ссылка в виде тега a, кнопка и абзац. 
// По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.

// let button1 = document.querySelector('#button1');
// let text1   = document.querySelector('#text1');
// button1.addEventListener('click', function () {
// text1.innerHTML = '(' + link.href + ')'
// });

// let button1 = document.querySelector('#button1');
// let text1   = document.querySelector('#text1');
// // let img = document.querySelector('#images/foto1.jpg')

// button1.addEventListener('click', function () {
//     text1.innerHTML = src.img
//     });

// let button1 = document.querySelector('#button1');
// let elem = document.querySelector('#elem');
// let elem2 = document.querySelector('#elem2');
// // elem2.value = elem.value*elem.value;
// console.log(elem.value);
// button1.addEventListener('click', function () {
//         if (elem2.value = elem.value){
//             elem.value = elem2.value;
            
//         };
//         });

        // Даны два инпута и кнопка. В первый инпут пользователем вводится число. 
        // По нажатию на кнопку запишите во второй инпут квадрат введенного числа.


        // let elem = document.querySelector('#elem');
        // elem.addEventListener('focus', function() {
        //     console.log(elem.value = "");
        // });
        // let button1 = document.querySelector('#button1');
        // let elem = document.querySelector('#elem');
        // button1.addEventListener('click', function () {
        //         alert(elem.className)
        //         });
        
// let button1 = document.querySelector('#button1');
// let elem = document.querySelector('#elem');
// button1.addEventListener('click', function () {
//     elem.classList.add('паппа');
//     console.log(elem.className);
//             });    

// let button1 = document.querySelector('#button1');
// let elem = document.querySelector('#elem');

// button1.addEventListener('click', function () {
//     console.log(elem.classList);
//                 });
// console.log(document.querySelector('#image').src);
// let elem = document.querySelector('#image');
// console.log(image.src);
// console.log(image.width);
// console.log(image.height);

// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', func);
// function func() {
// 	this.value = '1';
// }
// elem.addEventListener('blur', func2);
// function func2() {
// 	this.value = '2';
// }

// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', func);
// function func() {
// 	this.value = +this.value + 1;
// }

// let elem = document.querySelector('#elem');
//         let elem2 = document.querySelector('#elem2');
//         let elem3 = document.querySelector('#elem3');
//         let elem4 = document.querySelector('#elem4');
//         let elem5 = document.querySelector('#elem5');
// elem.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);

// function func() {
//     this.innerHTML = this.innerHTML + '!';

// let elem = document.querySelector('#elem');
//         let elem2 = document.querySelector('#elem2');
//         let elem3 = document.querySelector('#elem3');
// elem.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);

// function func() {
//     this.value = this.value * this.value;
// }

// let elems = document.querySelectorAll('#elem');
//     let button = document.querySelector('#button')
//     button.addEventListener('click', func);

// function func() {
//     for(let elem of elems){
//         elem.textContent = 'text';
//     }
// }

// let elems = document.querySelectorAll('#elem');
//     let button = document.querySelector('#button')
//     button.addEventListener('click', func);
//      function func (){
//         for (let i = 0; i < elems.length; ){
//             let elem = elems[i++];
//             elem.innerHTML += i;
//         }
        
//     };

// let elems = document.querySelectorAll('#elem');
//     let button = document.querySelector('#button')
//     let par = document.querySelector('#result')
//     button.addEventListener('click', func);
//      function func (){
//         let sum = 0;
//         for (let i = 0; i < elems.length; i++){
//             sum += +elems[i].value;
//         }
//         par.innerHTML = sum; 
//         console.log(par.innerHTML) ; 
//     };

// let elems = document.querySelectorAll('#elem');
//     for(let elem of elems){
//         elem.addEventListener('blur', func);
//     }
 
//     function func() {
// 	this.value = Number(this.value) + 1;
// }

// let elems = document.querySelectorAll('#elem');
//     for(let elems of elem){
//         elems.addEventListener('blur', func);
//     }
 
//     function func() {
// 	this.value = Number(this.value) + 1;
// }

// let elem = document.querySelectorAll('#elem');
//     for (var i = 0; i < elem.length; i++) {
// 	elem[i].addEventListener('click', func);
// }
// function func() {
// 	this.innerHTML = this.innerHTML * this.innerHTML;
// } 

// let divs = document.querySelectorAll('div');

// for (let div of divs) {
// 	div.addEventListener('click', function (){
//         this.textContent++;
//     });
// }

// let button = document.querySelector('#button');
//         let link = document.querySelector('#link');
// 	    button.addEventListener('click', func);
//         function func (){
//         link.innerHTML = '(' + link.href + ')';
//         button.removeEventListener('click', func);
//     };

// let button = document.querySelector('#button');
//         button.addEventListener('click', func);
//         function func (){
//             button.value++;
//             if(button.value == 10){
//                 this.removeEventListener('click', func);
//             }
//         }

// let elems = document.querySelectorAll('p');
// for(let elem of elems){
//     elem.addEventListener('click', func)
// }

// function func(){
//     this.textContent = this.textContent + '!';
//     this.removeEventListener('click', func);
// }

// let elems = document.querySelectorAll('li');

//         for(let elem of elems){
//             elem.addEventListener('click', function func (){
//                 this.textContent++;
//                 this.removeEventListener('click', func);
//             })
//         }

// let elems = document.querySelectorAll('li');
// for(let elem of elems){
//     elem.addEventListener('click', function func (){
//         this.textContent++;
//         if(this.textContent == 10){
//             this.removeEventListener('click', func);
//         }
//     })
// }

// let elem = document.querySelector('#elem');
//         let value = elem.getAttribute('value');
//         console.log(value);

// let elem = document.querySelector('#elem');
// let getClass = elem.getAttribute('class');
// console.log(getClass);

getAttribute
setAttribute
removeAttribute
hasAttribute

classList
classList.remove
classList.add
classList.toggle
classList.contains

// let elem = document.querySelector('#elem');
// let value = elem.setAttribute('value', 'set');

// let elem = document.querySelector('#elem');
//         let length = elem.classList.length;
//         console.log(length)

{/* <ul>
        <li>2000</li>
        <li>2004</li>
        <li>2021</li>
        <li>2022</li>
        <li>2025</li>
        <li>2031</li>
    </ul>

let arrYears = document.querySelectorAll("li");
let total = 0;
for (let elem of arrYears) {
  let year = elem.innerHTML;
  let sumNumbers = 0;
  for (let i = 0; i < year.length; i++) {
    sumNumbers += +year[i];
  }
  if (sumNumbers === 6) {
    total += +year;
  }
} */}
