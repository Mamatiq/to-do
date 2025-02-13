window.onload = async function (todo) {
    const completedCountElement = document.getElementById("completed-todo");
    const uncompletedCountElement = document.getElementById("uncompleted-todo");


    let list = [];
    let completedList = [];
    let uncompletedList = [];

    // let uncompletedCountElement = document.getElementById("uncompleted-todo");

    await fetch('http://jsonplaceholder.typicode.com/todos')
        .then(response => list = response.json())
        .then(json => list = json.slice(0, 20))
        .catch(error => console.log(error))

    console.log(list);

    for (let i = 0; i < list.length; i++) {
        const currentTodo = list[i]
        if (currentTodo.completed === true) {
            completedList.push(currentTodo)
        } else {
            uncompletedList.push(currentTodo)
        }
    }

    completedCountElement.textContent = completedList.length;
    uncompletedCountElement.textContent = uncompletedList.length;
}

// console.log('------------')

// let a1 = prompt('Введи первое число');
// let a2 = prompt('Введи второе число');

// a1 = Number(a1);   
// a2 = Number(a2);   

// function cal(){
//     alert(`Итого ${a1 / a2 }`)
// }

// cal();

// function fn1() {

// }

// function a1() {
//     let fn1 = console.log('Hello from fn1');    

//     function a2() {
//         console.log('Hello from alert');
//         return fn1
//     }

//     function fn2() {
//         return a2 
//     }
// }

// let res1 = a1();
// console.log('здесь не должно выводиться ' + ' ' + res1);

// function Password(p) {
//     const pass = "qwertyuiop[]1234567890!@#$%^&*(gthsdmfnhgbujhnvuysxclutj)lkjhgfdsazxcvbnmQAZXSWERTYUIOPL<MNBVCXZASDFGHJKL";
//     let password = "";

//     for(let i = 0; i < p; i++) {
//         let randomIndex = Math.floor(Math.random() * pass.length);
//         password += pass[randomIndex];
//     }
//     return password;  // Возвращаем пароль
// }

// const randomPassword = Password(12);

// console.log(randomPassword);

// function isEven (num) {   
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isEven(6)); 

// const Call = () => {
//     console.log("Функция вызвана");
// }

// function callback() {
//     console.log(" что-то не то");
//     return callback();
// }

// const mycall = function (city, country, callback) {
//  if (callback && typeof callback === 'function') {
//     callback();
//  } else {
//     console.log(`Ищу информацию о городе ${city}, стране ${country}`);
//  }
// }

// mycall("Москва", "Россия", Call);

// const myfunc = () => {
//     console.log("Функция myfunc вызвана");
// }

// const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // numb = Number(numb);   

// numb.forEach(function (num) {
//     console.log(num * 5);
// });

// function complex (a, b, c) {
//     return a = b + c;
// }

// console.log(complex("", 6, 7));

// let width;
// width = prompt('Введите ширину прямоугольника');

// let height;
// height = prompt('Введите ширину прямоугольника');

// const area = width * height;

// console.log('Площадь прямоугольника: ' + area);

// const length = prompt('Введите слово');

// console.log(length.length);

// const data = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }

// console.log(data);

// delete data.name;

// console.log(data);

// console.log(data["age"]);

// data.adult = true;

// console.log(data["adult"]);

// for (let key in data) {
//     console.log(`${key} -- ${data[key]}`);
// }

// const user = {
//     name: "John",
//     nambered: +79177451844,
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.name}!`);
//     },
//     "hello world": "Привет мир! 123",
// }
// console.log(user.nambered);
// console.log(user.sayHello());
// console.log(user["hello world"]);

// const name1 = "Маматик";
// user[name1] = "Моё настоящее имя";
// console.log(user);


// console.log(window)

// const fn1 = {
//     age: 2006,
//     my: function () {
//         const age = 123;
//         const myu = () => {
//             console.log(2025 - this.age);
//         }
//         myu();
//     },
// }
// fn1.my();


// const testObj = {
//     age: 2000,
//     someResult: function() {
//         const age = 123;
//         const testFunc = () => {
//             console.log(this.age)
//         }
//         testFunc()
//     }
// }
// testObj.someResult();

// let Obj1 = {
//     Name: 'Marat',
//     lastName:'Sharafutdinov',
//     age:18,
//     nam1: 891774514444,

// }
// let Obj2 = {
//     nam: 89177451844,
// };

// Object.assign(Obj2, Obj1);
// Obj2.Name = "Марат";
// const Obj3 = Object.assign({}, Obj1, Obj2)
// Obj3.lastName = "Шарафутдинов"

// console.log(Obj1);
// console.log(Obj2);
// console.log(Obj3);

// const fz = 'size';

// const Obj4 = {
//     age: 15,
//     Name: "John",
// }

// const Obj5 = Object.assign({}, Obj4);

// Obj4[fz] = "100px";

// console.log(Obj4);
// console.log(Obj5);

// const Obj6 = {
//     name: 'John',
//     age: 25,
//     city: 'New York',
//     };

// const Obj7 = structuredClone(Obj6);
// Obj7.vfhfn = "Marat";

// console.log(Obj6);
// console.log(Obj7);

// const a1 = {
//     name: "Marat",
//     age: 18,
//     citi: "Moscow",
//         address: {
//             street: "Lenina",
//             house: 123
//         }
// }
// const a2 = JSON.stringify(a1);
// const a3 = JSON.parse(a2);

// const a2 = JSON.parse(JSON.stringify(a1));;

// a2.address.street = "Octabra";
// delete a1.address.street;

// console.log(a1);
// console.log(a2);
// console.log(a3);

// const Obj8 = {
//     name: "John",
//     age: 25,
// }

// const {name, age} = Obj8;

// console.log(name);
// console.log(age);

// const Obj9   = {
//     name: "John",
//     age: 25,
// }

// const {name: myname , age: myage, city = "london"} = Obj9;

// console.log(myname);
// console.log(myage);
// console.log(city);

// const bio = { name: "Costa", age: 33, tel: 891232131 };

// const info = ({ name, age, tel }) => {
//     console.log(`Имя: ${name}, Возраст: ${age}, Телефон: ${tel}`);
// };

// info(bio);

// const Obj10 = {
//     name: "Marat",
//     age: 18,
//     city: "Moscow",
//     address: {
//         street: "Lenina",
//         house: 123
//     }
// };

// const { name, age, city, address: { street, house } } = Obj10;

// console.log(street);

// const user2 = [
//     {name: "John", id:1},
//     {name: "Salle", id:2},
//     {name: "Margarita", id:3},
//     {name: "Sofia", id:4},
// ]
// for (const{ id, name} of user2 ) {
//     console.log(`User ${id} - name ${name}`);
// }

// const StudentInfo = {
//     name: "John",
//     age: 18,
//     university: "San Francisco",
//     major: true,
// };

// const printStudentInfo = ({name, age, university, major}) => {
//     console.log(`Name: ${name}, Age: ${age}, University: ${university}, Major: ${major}`);
// }


// printStudentInfo(StudentInfo);

// const mass1 = [1, 2, 3, 4, , function(){}, {}, {Name: "Marat"}];

// const [a1, a2, a3, a4, a5, ...Firstitem] = mass1;

// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// const mass2 = [1, 2, 3, 4, 5];

// const mass3 = [...mass2, "fsfa" , 1, 2, 3, 4, 5];

// console.log(mass2);
// console.log(mass3);

// const Obj11 = { 
//     name: "Obj11",
//     age: 12,
//     work: false,
// }

// const Obj12 = {...Obj11, "dsadsafsavvhgdiugiy" : true};

// console.log(Obj12);

// const Obj13 = {
//     width: "15px",
//     height: "20px",
//     z: "40px",
//     color:"#000000",
// }
// const {width, ...aboba} = {...Obj13, dsadsada: "dsaafs",};

// console.log(aboba);
// console.log(width);


// const Object2 = {
//     name: "Jane",
//     age: 30,
//     city: "Los Angeles",
//     NevPersone: function () {
//         console.log("Имя");
//     },
//     IDName () {
//         return true;
//     },
//     address: {
//         city: "Los Angeles",
//         id: 123321,
//     },
// }

// const keys = Object.keys(Object2);
// const keys1 = Object.values(Object2);
// const keys2 = Object.entries(Object2);
// const keys3 = Object2.hasOwnProperty("name");

// const keys4 = Object2.address?.id ?? "Ты втираешь что-то"

// console.log(keys4);
// console.log(keys3);
// console.log(keys);
// console.log(keys1);
// console.log(keys2);
// console.log(Object2.hasOwnProperty("name"));


// for (let key of keys) {
//     console.log(`${key} - ${Object2[key]}`);
// }

// const Car = {
//     brand:"",
//     model:"",
//     year:0,
//     displayInfo:function() {
//         console.log(`Бренд: ${this.brand}, модель: ${this.model}, год выпуска: ${this.year}`);
//     }
// }

// const camry = Object.create(Car)

// camry.brand = "Toyota";
// camry.model = "Camry";
// camry.year = 2020;

// const mustang = Object.create(Car)

// mustang.brand = "Ford";
// mustang.model = "Mustang";
// mustang.year = 2015;


// camry.displayInfo();

// const mass3 = [
// 	'Ваня',
// 	'Маматик',
// 	'Вика',
// 	{
// 		name: 'Игорь',
// 		year: 23,
// 	},
// 	function () {
// 		consol.log("Привет")
// 	}
// ];

// mass3[3].name = "Маматик"; 

// console.log(mass3);

// const mass4 = [
// 	'Ваня',
// 	'Игорь',
// 	'Илья',
// ];

// console.log(mass4);
// mass4[3] = ("Марат");
// console.log(mass4);

// mass4.splice(1, 2)

// console.log(mass4);

// const mass5 = [ "Элина", "Марат", "Экатерина", "Денис", "Илья", ];


// const copyOnemass5 = mass5.slice();
// const copyTwomass5 = mass5.slice(0,3);
// const copyThreemass5 = mass5.slice(-4, -1);
// const copy = mass5.concat();

// console.log(copy);
// console.log(mass5);
// console.log(copyThreemass5);
// console.log(copyOnemass5);
// console.log(copyTwomass5);

// const mass6 = ["Коля", "Миши", "Маша", "Даша", "Клаша", "Ирина", "Дмистрий", "Олег"];

// console.log(mass6.indexOf("Маша", 2));

// const massObj = [ 
// 	{name: "Игорь", age:10},
// 	{name: "Илья", age:14},
// 	{name: "Дима", age:19},
// 	{name: "Олег", age:25}, 
// ];

// const resultmassObj = massObj.find(function (item, index, array) {
// 	return item.age === 19  ;
// });

// console.log(resultmassObj);

// const massnamder = [1, 22, 43, 5, 6, 0, 44, 13];
// console.log(massnamder.sort());

// function sortmassnamder (a, b) {
// 	// console.log(`Я Сравниваю числа ${a} и ${b}`);
// 	if (a > b) return -1
// 	if (a == b) return 0
// 	if (a < b) return -1
// }

// console.log(massnamder.sort(sortmassnamder));

// const massmap = ["Игорь", "Илья", "Максим", "Азалия"];

// const copymassmap = massmap.map(function (item, index, array) {
// 	return item[1]
// });

// console.log(massmap);
// console.log(copymassmap);

// const str = "Марат, Элина, Самира";

// const massstr = str.split(',');
// console.log(massstr);

// const massstrTwo = str.split(",",2);
// console.log(massstrTwo);

// const mass11 = ['Маматик', 'Азаза', 'Игорёк',];
// const mass11copy = mass11.join(',')
// console.log(mass11copy);
// console.log(String(mass11));

// const mass12 = [];
// const Obj = {};

// if (Array.isArray(mass12)) {
// 	console.log("Это массив")
// } else {
// 	console.log("Это точно не массив")
// };

// if (Array.isArray(Obj)) {
//     console.log("Это массив")
// } else {
//     console.log("Это точно не массив")
// };

// const mass13 = ["Марат", "Иштван", "Коля", "Забор", ];

// for ( let i = 0; i < mass13.length; i++ ) {
// 	console.log(mass13[i])
// }

// for ( let namemass13 of mass13 ) {
// 	console.log(namemass13)
// };

// mass13.forEach(function (item, index, mass13) {
// 	console.log(`${item} находится под индксом ${index} в массиве: ${mass13} `)
// });

// const massnamber3 = [1, 2, 3, 4, 5, 6, 7, 8, 8,];

// const massnamber3copy = massnamber3.reduce(function(previousValue, item, index, array){
// 	return item + previousValue;
// }, 0);
// console.log(massnamber3copy);


// const OneId = document.getElementById("button_id");

// OneId.addEventListener("click", function() {
//     console.log("Кнопка нажалась");
// });

// const pe = document.querySelectorAll("p");

// Array.from(pe).forEach((a) => {
//     a.textContent = "Один и тот же текст";
// });

// for (let val of pe) {
//     console.log(val);
//     val.textContent = "Один";
// };

// const One = document.getElementById("button_id");
// const Two = document.getElementById("h3");
// const Three = document.getElementById("wrapper");
// const NewElement = document.createElement("div")

// NewElement.textContent = "Это новый элемент"
// Three.appendChild(NewElement)

// One.addEventListener("click", function(){
// 	console.log("Вы на что-то нажали")
// 	One.textContent = "А это другая кнопочка"
// });

// One.addEventListener("click", function(e){
//     Two.textContent = "У тебя получилось :D"
// });

// Three.addEventListener("click", function(e){
//     Three.style.backgroundColor = "#111"
// });

// const One = document.querySelector("#Button__heder");
// const input = document.getElementById("input__heder");
// const to_do = document.getElementById('to_do');
// const todoList = document.querySelector('#todo-list');

// One.addEventListener('click', getN);

// const result = document.querySelectorAll('.exercise__unfinished__task');
// console.log(result);

// function getN(newDiv) {
//     if (input.values != "") {
//         const todoElement = document.getElementById('to_do');
//         const newDiv = document.createElement('div');
//         newDiv.id = Date.now();
//         newDiv.classList.add('exercise__unfinished__task');
//         newDiv.innerHTML = `
//             <input class="checkbox__task checkbox" type="checkbox" />
//             <span id="span" class="task__text">${input.value}</span>
//             <button id="button__remove" class="button_todo button__task button__exercise">remowe</button>
//         `;
//         todoList.appendChild(newDiv);
//         input.value = "";

//         const result = document.querySelectorAll('.exercise__unfinished__task');
//         console.log(result);



//     } else {
//         console.log('Введите текст для добавления');
//     }
// }

// const batton = document.querySelector('#button__remove')
// const SSS = document.querySelectorAll("button_todo");
// const Arr = SSS;

// batton.addEventListener('click', fff);

// const remowebatton = document.querySelector('.button__task');

// function fff() {
//     Arr.forEach(item => {
//         const SSS = document.querySelectorAll("button_todo");
//         const Arr = SSS;
//         console.log(Arr);
//         const remowebatton = document.querySelector('.button__task');
//         remowebatton.addEventListener('click', () => {
//             this.remove();
//         });
//     })
// };

window.onload = (event) => {
    const headerbutton = document.querySelector('#Button__heder');
    const headerinput = document.querySelector('.header__input');
    const todoList = document.querySelector('#todo-list');

    const todo = () => {
        if (headerinput.value === '') {
            console.log('Введите текст задачи');
            return;
        }
        const item = document.createElement('div')
        item.innerHTML = `
        <input class="checkbox__task checkbox" type="checkbox" />
        <span id="span" class="task__text">${headerinput.value}</span>
        <button id="button__remove" class="button_todo button__task button__exercise">remowe</button>
        `
        item.classList.add('exercise__unfinished__task');
        todoList.appendChild(item);
        headerinput.value = '';
        fremove(item);
        
    }

    const fremove = (item) => {
        console.log(item);
        const task = item.querySelector('.button__exercise')
        console.log(task);
        task.addEventListener('click', () => {
            item.remove();
        })

        const unfinished_todo = document.querySelector('#untodo-list')
        const checkbox_todo = item.querySelector('.checkbox__task');
        checkbox_todo.addEventListener('change', () => {
            const p_prime = checkbox_todo
            console.log(p_prime)
        
        const unfinished = document.createElement('div')
        unfinished.innerHTML = `
        <input class="checkbox__task checkbox" type="checkbox" />
        <span id="span" class="task__text">${checkbox_todo.value}</span>
        <button id="button__remove" class="button_todo button__task button__exercise">remowe</button>
        `
        unfinished.classList.add('exercise__finished__task')
        unfinished_todo.appendChild(item);

        })


    }

    headerbutton.addEventListener('click', todo);
};
