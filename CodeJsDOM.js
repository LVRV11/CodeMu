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

 // let elems = document.querySelectorAll('p');
// for(let elem of elems){
//     console.log(elem.textContent += '!');
// }

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent = +this.textContent + 1;
// 	});
// }
// // for (let elem of elems) {
// // 	elem.addEventListener('click', func);
// //     console.log(elem);
// //     function func() {
// // 		this.textContent = +this.textContent + 1;
// // 	};
// // }


// let button = document.querySelector('button');
//           let elem   = document.querySelector('p');

// button.addEventListener('click', function() {
// 	elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
// });

// let button = document.querySelector('button');
//           let elems  = document.querySelectorAll('p');

//         button.addEventListener('click', function() {
// 	    let sum = 0;
// 	    for (let elem of elems) {
// 		sum += Number(elem.textContent);
// 	}
	
// 	console.log(sum);
// });


// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function func (){
// 		this.textContent += '!';
// 	});
// }

// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', () => {
// 	for (let elem of elems) {
// 		elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
// 	}
// });

// let button = document.querySelector('button');
//     let elems  = document.querySelectorAll('p');

//     let sum = 0;
// 	button.addEventListener('click', func);
//     function func(){
    
//     for (let elem of elems) {
// 	sum += +elem.textContent;
// 		// console.log(sum);
//     }
//     console.log(sum);
// };

// let button = document.querySelector('button');  
//     let elems  = document.querySelectorAll('input');
//     let sum = 0;

//     button.addEventListener('click', func);
//     function func(){
//     for (let elem of elems) {
// 	sum += +elem.value;
// }
// console.log(sum);
// }

// let button = document.querySelector('button');  
//     let elems  = document.querySelectorAll('input');
//     let sum = 0;

//     button.addEventListener('click', () => {
//         for (let elem of elems) {
//         sum += +elem.value;
//     }
//     console.log(sum);
//     });

// let btn  = document.querySelector('#btn');
//     let inp1 = document.querySelector('#inp1');
//     let inp2 = document.querySelector('#inp2');
//     let inp3 = document.querySelector('#inp3');

//     btn.addEventListener('click', function() {
//         inp3.value = +inp1.value + +inp2.value;
//         console.log(inp3.value);
//     });

// let btn  = document.querySelector('#btn');
//     let res  = document.querySelector('#res');
//     let inp1 = document.querySelector('#inp1');
//     let inp2 = document.querySelector('#inp2');

//     btn.addEventListener('click', function() {
//         res.textContent = +inp1.value + +inp2.value;
//     });

//     let elem = document.querySelector('#elem');
//    elem.addEventListener('click', () => {
//     elem.textContent = elem.textContent + elem.dataset.text;
//     console.log(elem.textContent);
//    })
//    Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.

// let blocks = document.querySelectorAll('div');
//    for (let block of blocks) {
// block.addEventListener('click', function() {
// this.textContent+= this.dataset.num;
// });
// }

// let button = document.querySelector('#btn');
//    let button2 = document.querySelector('#btn2');
//    let sumClick = 0;
// button.addEventListener('click', function() {
// button.value = + button.value + 1;
// button.textContent = button.value;
// button.dataset.count = button.value;
// console.log(button.value);
// console.log(button.dataset.count);
// });
// button2.addEventListener('click', function(){
//     button2.textContent = button.dataset.count;
// });

// let msg = document.querySelector('#elem');
// msg.addEventListener('blur', func);
// function func(){
//     if (msg.value.length == msg.dataset.length){
//     console.log(msg.value);
//     } else {
//         alert('vvedite 5 знаков');
//     };
    
//     }

// let msg = document.querySelector('#elem');
// msg.addEventListener('blur', () => {
//     if (msg.value.length >= msg.dataset.min && msg.value.length <= msg.dataset.max){
//         console.log('ok');
//     } else {
//         alert ('vvedite');
//     }
// });

// let price = document.querySelector('#elem');
// price.addEventListener('click', () => {
//     price.textContent += price.dataset.productPrice*price.dataset.productAmount;
//     console.log(price.textContent);
// })

// let products = document.querySelectorAll('p');
// for (let i = 0; i < products.length;){
//     let product = products[i++];
//     product.setAttribute('data-num', [i]);
//     console.log(product);
// }
// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')

// button.addEventListener('click',function() {
// 	for (let input of inputs) {
// 		if (input.value === input.dataset.text) {
// 			input.classList.add('right');
// 		} else {
// 			input.classList.add('wrong');
// 		}
        
// 	}
//     console.log(inputs);
// });

// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
// let sum = 0;

// btn.addEventListener('click', function() {
// 	for (let input of inputs) {
// 		sum += +input.value;

// 	}
	
// 	console.log(sum);
// });

// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');

// btn.addEventListener('click', function() {
//     let sum  = +inp1.value + +inp2.value;
// 	inp3.value = sum;
// });

let inp = document.querySelector('#inp');
    inp.addEventListener('blur', function() {
    let sum = 0;
	let str = inp.value;
    let arr = str.split('');
    // console.log(str);
	for(let i = 0; i < arr.length; i++){
        sum += +arr[i];
    }
	console.log(sum);
});

let inputValue = document.querySelector('input');
    let pValue = document.querySelector('p');
    inputValue.addEventListener('blur', () => {
        pValue.textContent = pValue.textContent + ' ' + inputValue.value;
        console.log(pValue.textContent);
    })

    let input = document.querySelectorAll('input');
    let pValue = document.querySelector('p');
    let button = document.querySelector('button');
    let sum = 0;
    button.addEventListener('click', () => {
     for(let elem of input){
        sum += +elem.value;
        pValue.textContent = sum;
     }
    })

    let input = document.querySelector('input');
    input.addEventListener('focus', () => {
        let sum = 0;
        let str = input.value;
        let arr = str.split('');
        for(let i = 0; i < arr.length; i++){
            sum += +arr[i];
     }
     console.log(sum);
    })

    let input = document.querySelector('input');
    input.addEventListener('focus', () => {
        let sum = 0;
        let str = input.value;
        let arr = str.split(',');
        
        for(let i = 0; i < arr.length; i++){
            sum += +arr[i] / arr.length;
     }
     console.log(sum);
    });

    let elem = document.getElementById('input');
    //     input.addEventListener('focus', func);
    //     input.addEventListener('blur', func2);
    
    //     function func() {
    // 	elem.placeholder = '';
    // }
    // function func2() {
    // 	let elem = document.getElementById('input');
    // 	let elems = document.querySelectorAll('.name');
    // 	if (elem.value !== 0) {
    // 		let str = elem.value;
    // 		let arr = str.split(' ');
    // 		for (let i = 0; i < arr.length; i++) {
    // 			elems[i].value = arr[i];
    // 		}
    // 	}
    // 	if (elem.value == 0) {
    // 		elem.placeholder = 'Введите Ваши ФИО';
    // 		for (let i = 0; i < elems.length; i++) {
    // 			elems[i].value = '';
    // 		}
    // 	}
    //        let elem = document.getElementById('input');
    //        let elems = document.querySelectorAll('.name');
    //        input.addEventListener('blur', func);
    //        function func(){
    //             let str = elem.value;
    //             let arr = str.split(' ');
    //             for(let i = 0; i < arr.length; i++){
    //                 elems[i].value = arr[i];
    //             }
    //        }

    //        let input = document.querySelector('input');
    // input.addEventListener('blur', () =>{
    //     let str = input.value;
    //     let arr = str.split(' ');
    //     for(let i = 0; i < arr.length; i++){
    //         arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1); 
    //         let res = arr.join(' ');
    //         input.value = res;
    //     }
    //     console.log(input.value);
    // })

//     let input = document.querySelector('input');
//         input.addEventListener('blur', () =>{
//         let str = input.value;
//         let arr = str.split(' ');
//         input.length = arr.length;
//         alert(arr.length);
//         console.log(input.length);
//     });

//     let input = document.querySelector('input');
//         input.addEventListener('blur', () =>{
//             let arr2 = [];
//             let str = input.value;
//             let arr = str.split('.');
//             arr2 = arr.reverse();
//             let str1 = arr2.join('-');
// 	elem.value = str1;
//     });

//     function func() {
//         let str = elem.value;
//          let arr = str.split('');
//         let arr2 = str.split('').reverse();
//         for(let i = 0; i < arr.length; i++) {
//             if(arr[i]!== arr2[i]) { 
//                 alert('это слово не палиндром');
//                 return;
//             }
//           }
//         alert('это слово палиндром');
//         return;
//     }

//     let elem = document.querySelector('#num');

// elem.addEventListener('blur', func);

// function func() {
// 	let str = elem.value;
//  	let arr = str.split('');
// 	// let arr2 = str.split('').reverse();
// 	for(let i = 0; i < arr.length; i++) {
// 		if(arr[i] == 3) { 
// 			alert('содержит 3');
// 			return;
// 		}
//   	}
// 	alert('не содержит 3');
// 	return;
// }

// let elems = document.querySelectorAll('p');
// let button = document.querySelector('button');
// button.addEventListener('click', func);
// function func(){
//     for(let i = 0; i < elems.length; i++){
//         elems[i].textContent = elems[i].textContent + [i + 1];
//     }
// }

// let input = document.querySelector('input');
//        let button = document.querySelector('button')
//        let button2 = document.querySelector('#rock')
//        console.log(input.disabled);
//        button.addEventListener('click', ()=> {
//         input.disabled = false;
//         console.log(input.disabled);
//        })
//        button2.addEventListener('click', ()=>{
//         input.disabled = true;
//         console.log(input.disabled);
//        })
      

//        let input = document.querySelector('input');
//        let button = document.querySelector('button')
//        let button2 = document.querySelector('#num')
//        button.addEventListener('click', ()=>{
//     input.checked = true;
//        })
// button2.addEventListener('click', ()=>{
//         input.checked = false;
// });

// let input = document.querySelector('input');
//        let button = document.querySelector('button')
//        let text = document.querySelector('p')
//        button.addEventListener('click', ()=>{
//    if(input.checked){
//     text.textContent = 'hi'
//    }else{
//     text.textContent = 'poka'
//    }
// });

// let elem   = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	if (elem.disabled) {
// 		elem.disabled = false;
// 	} else {
// 		elem.disabled = true;
// 	}
// });

// let elem   = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	elem.disabled = !elem.disabled;
// });

// let radios = document.querySelectorAll('input[type="radio"]');
//         let button = document.querySelector('button');
//         let p = document.querySelector('p');
//         button.addEventListener('click', ()=>{
//             for(let radio of radios){
//                 if(radio.checked == true){
//                     p.textContent = radio.value;
//                 }
//             }
//         })
    

// let elem = document.querySelector('#elem');

// elem.addEventListener('input', function() {
// 	if(elem.value.length > 5){
//         elem.style.color = 'red';
//     };
// });

// let elem = document.querySelector('#elem');
//         let p = document.querySelector('p');
//        elem.addEventListener('input', ()=>{
//         if(elem.value.length > 5){
//         p.textContent = elem.value.length - 5;
//         }

//        })

//        let elem   = document.querySelector('#elem');
//        let elemTwo   = document.querySelector('#elemtwo');
//        elem.addEventListener('input', ()=>{
//         if(elem.value.length == 2){
//             elemTwo.focus();
//             if(elemTwo.value.length == 2){
//                 elemTwo.blur();
//             }
//         }
//     });

//     let select = document.querySelector('#select');
//       let p = document.querySelector('p');
//       let button = document.querySelector('button');
//       select.addEventListener('change', ()=>{
//         button.addEventListener('click', ()=>{
//         p.textContent = select.value;
// })
//       })

//       let select = document.querySelector('#select');
//       select.addEventListener('change', ()=>{
//         if(select.value % 4 === 0){
//             console.log('visokosnii god');
//         } else {
//             console.log('obichnii');
//         }
//       })

//       let workDays = document.querySelector('#select');
// workDays.addEventListener('change', ()=>{
//     if(workDays.value > 1 && workDays.value < 7){
//         console.log('worj day');
//     } else {
//         console.log('weekand');
//     }
// })


// let month = document.querySelector('select');
// let button = document.querySelector('button');
// button.addEventListener('click', ()=>{
//     month.value = '1';
// });

// let checkbox = document.querySelector('input');
// let button = document.querySelector('button');
// let div = document.querySelector('div');
// console.log(checkbox.checked);

// button.addEventListener('click', function() {
// 	if (checkbox.checked) {
// 		div.textContent = '111';
//         console.log(div.value);
// 	} else {
// 		div.textContent = '222';
// 	}
// });

// let checkbox = document.querySelector('input');
// console.log(checkbox)
// let button = document.querySelector('button');
// console.log(button)

// button.addEventListener('click', function() {
// 	if (checkbox.checked == true) {
// 		console.log('+++');
// 	} else {
// 		console.log('---');
// 	}
// });

// <div id="elem">0 : 0</div>
// let elem = document.getElementById('elem');

// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.clientX + ' : ' + event.clientY;
// });

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);

// function func(event) {
// 	if(event.type == 'click'){
//         elem.style.borderColor = "green";
//     } if (event.type == 'dblclick'){
//         elem.style.borderColor = "red";
//     }
//     }

//     let elem = document.querySelector('input');
// let p = document.querySelector('p');
// elem.addEventListener('keypress', function (event){
//     if(event.code == 'Enter'){
//     p.textContent = elem.value;
//     console.log(p.textContent);
//     console.log(event.key);
//     console.log(event.code);
//     }
// })


{/* <button id="elem">text</button>
 
 let elem = document.querySelector('#elem');
  
 elem.addEventListener('click', function (event) {
 if(event.altKey) {
 elem.style.cssText = 'background-color: red';
 }
 });

 let elem = document.querySelector('#elem');
  
 elem.addEventListener('click', function (event) {
    elem.textContent = elem.textContent + 'href';
    event.preventDefault();
	console.log('Вы не можете перейти по этой ссылке!');
});

let nameFag = document.querySelector('.nameFag')
 let name = document.querySelector('.name');
 let p = document.querySelector('p') ;
 let elem = document.querySelector('#elem')
 elem.addEventListener('click', function (event) {
  p.textContent = +nameFag.value + +name.value
  event.preventDefault();
});


let div = document.querySelector('div');
div.addEventListener('click', function(event) {
	if (event.target.tagName === 'DIV') {
		console.log('клик именно по диву');
	}
	if (event.target.tagName === 'UL') {
		console.log('клик именно по UL');
	}
    if (event.target.tagName === 'LI') {
		console.log('клик именно по LI');
	}
}); 

let div = document.querySelector('div');
div.addEventListener('click', function(event) {
	if (event.target.tagName === 'DIV') {
		console.log('клик именно по диву');
	}
	if (event.target.tagName === 'UL') {
		console.log('клик именно по UL');
	}
    if (event.target.tagName === 'LI') {
        event.target.innerHTML = event.target.innerHTML + '!';
		console.log('клик именно по LI');
	}
});

function time(){
    console.log('Прошло 3 секунды');
}
setInterval(time, 3000);

let num = 100;
setInterval(()=>{console.log(num--)}, 1000);

let num = 10;
let timerId = setInterval(()=>{
    console.log(num--);

    if(num == -1){
        clearInterval(timerId);
    }   
}, 1000)

et start = document.querySelector('#start');
    start.addEventListener('click', ()=>{
        let num = 100;
        setInterval(()=>{
            console.log(num--);
        }, 1000)
    })

     let start = document.querySelector('#start');
    start.addEventListener('click', function func () {
let num = 100;
 setInterval(function () {
    console.log(num--);
 }, 1000)
 this.removeEventListener('click', func);
    }) 

    let num = 100;
   let start = document.querySelector('#start');
    let stop  = document.querySelector('#stop');
    let timerId;
    start.addEventListener('click', function (){
        timerId = setInterval(function (){
            console.log(num--);
        }, 1000)
         });

         stop.addEventListener('click', function() {
	clearInterval(timerId);
});
let start = document.querySelector('#start');
    let stop  = document.querySelector('#stop');
    let timerId;
    start.addEventListener('click', function() {
	timerId = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
});

let elem = document.querySelector('#elem');
    let  timerId;
    timerId = setInterval(function() {
	elem.value = Number(elem.value) - 1;
    if (elem.value < 1){
    clearInterval(timerId);
    }
}, 1000);

 let elem = document.querySelector('#elem');

    elem.addEventListener('click', function() {
        let self = this;
	setInterval(function() {
		self.value = Number(elem.value) + 1;
	}, 1000);
});
   
Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, 
который каждую секунду будет увеличивать текст абзаца на 1.
 let button = document.querySelector('button');
    let timer = document.querySelector('p');
    button.addEventListener('click', function () {
        setInterval(function () {
            timer.textContent = Number(timer.textContent) + 1;
        }, 1000)
    });

    Дана кнопка. Дан абзац, текстом которого является число, например, 10. 
    По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. 
    Как только значение абзаца станет равно нулю - остановите таймер.

    let button = document.querySelector('button');
    let timer = document.querySelector('p');
    let timerId;
    button.addEventListener('click', function () {
            timerId = setInterval(function () {
            timer.textContent = Number(timer.textContent) - 1;
            if (timer.textContent == 0){
            clearInterval(timerId);
            }
        }, 1000)
    });

    let elem = document.querySelector('#elem');
    elem.addEventListener('blur', function (){
        setInterval(function (){
            elem.value = elem.value * elem.value;
        }, 1000);
    })
    
    Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал 
    тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - 
    он должен закончится.

    let elem = document.querySelector('#elem');
let timer = document.querySelector('p');
let timerId;
elem.addEventListener('blur', function () {
    timer.textContent = Number(elem.value);
timerId = setInterval(function () {
    timer.textContent = Number(timer.textContent) - 1;
console.log(timer.textContent);
if (timer.textContent == 0){
    clearInterval(timerId);
}
}, 1000);
});

let elem = document.querySelector('#elem');
let button = document.querySelector('button');
let p = document.querySelector('p');
let timerId;

button.addEventListener('click', function () {
    p.textContent = Number(elem.value);
    console.log(p.textContent);
    timerId = setInterval (function (){
        p.textContent = Number(p.textContent) - 1;
        if (p.textContent == 0){
            clearInterval(timerId);
        }
    }, 1000);
})

Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать 
таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.

<button id="start">start</button>
<button id="stop">stop</button>

let start = document.querySelector('#start');
    let stop = document.querySelector('#stop');
    let timer = document.querySelector('p');
    let timerId;

    start.addEventListener('click', func);
    function func(){
        timerId = setInterval(function(){
            timer.textContent ++;
        }, 1000);
    }

    stop.addEventListener('click', function (){
        clearInterval(timerId);
    })


    let elem = document.querySelector('p');
elem.style.color = 'red';
setInterval (func, 1000);
function func () {
    if(elem.style.color == 'red'){
        elem.style.color = 'green';
 } else {
    elem.style.color = 'red';
 }
}

let elem = document.querySelector('div');
setInterval(function(){
    let now = new Date();
    elem.innerHTML = now.toLocaleTimeString();
 }, 1000);


 let elem = document.querySelector('ol');
let li = document.createElement('li');
li.textContent = 'item';
elem.appendChild(li);

let ol = document.querySelector('ol');
let button = document.querySelector('button');
let li = document.createElement('li');
li.textContent = 'item';
button.addEventListener('click', ()=> {
    ol.appendChild(li)
});

Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. 
Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.


let ol = document.querySelector('ol');
let button = document.querySelector('button');


button.addEventListener('click', function (){
    let li = document.createElement('li');
    ol.appendChild(li);
    li.addEventListener('click', function (){
    li.textContent = li.textContent + '!';
})
})

 let ol = document.querySelector('ol');
     
    for(let i = 1; i <=10; i++){
        let li = document.createElement('li');
        li.textContent = li.textContent + [i];

        ol.appendChild(li);
    }


     let parent = document.querySelector('div');
    let p = document.querySelector('p');
    
     for(let i = 1; i <= 5; i++){
    let input = document.createElement('input');
    
    input.addEventListener('blur', function (){
      p.textContent = input.value;
    });
    parent.appendChild(input);
     }


     let li = document.querySelectorAll('li');
            for (let elem of li){
                elem.addEventListener('click', function(){
                    elem.remove();
                })
            }



            let ul = document.querySelector('#parent')
            let button = document.querySelector('#button');
            button.addEventListener('click', function (){
                ul.lastChild.remove();
            });   
            
             let ul = document.querySelector('ul');
            let li1 = document.createElement('li');
            li1.textContent = 'start';
            let li2 = document.createElement('li');
            li2.textContent = 'finish';
            ul.prepend(li1);
            ul.append(li2);

<ul id="parent">
        <li>text</li>
        <li>text</li>
        <li id="elem">text</li>
        <li>text</li>
        <li>text</li>
    </ul>
    <input type="submit" id="button">
<script>
            let ul = document.querySelector('#parent');
            let elem = document.querySelector('#elem');

            let li = document.createElement('li');
            li.textContent = 'new';

            ul.insertBefore(li, elem);

<ul id="parent">
        <li>text</li>
        <li>text</li>
        <li id="elem">text</li>
        <li>text</li>
        <li>text</li>
    </ul>
    <input type="submit" id="button">
<script>
            let ul = document.querySelector('#parent');
            let elem = document.querySelector('#elem');

            let li = document.createElement('li');
            li.textContent = 'new';

            li.addEventListener('click', ()=>{
                li.textContent = li.textContent + '!';
            })

            ul.insertBefore(li, elem);
            
  <div id="elem" style="border: 1px solid red;">
        <p>text</p>
        <p>text</p>
        <p>text</p>
    </div>
    <input type="submit" id="button">
<script>
            let elem = document.querySelector('#elem');
            let p = document.createElement('p');
            p.textContent = '!';

            elem.insertAdjacentElement('beforeBegin', p);
            
            
            <div id="elem" style="border: 1px solid red;">
        <p>text</p>
        <p>text</p>
        <p>text</p>
    </div>
<script>
            let elem = document.querySelector('#elem');

            elem.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div>');

      <div id="elem1">
    <p id="elem2"></p>
    </div>
<script>
            let elem1 = document.querySelector('#elem1');
            let elem2 = document.querySelector('#elem2');

            let contains = elem1.contains(elem2);
            console.log(contains);  
            
</script>


let parent = document.querySelector('#parent');
            // let p = document.querySelector('p');
            let arr = [1, 2, 3, 4, 5];


            for(let elem of arr){
    let p = document.createElement('p');
    p.textContent = elem + 1;
    parent.appendChild(p);
            }
            
