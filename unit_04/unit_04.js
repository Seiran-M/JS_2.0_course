// Task 1
// Создайте button.b-1 - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.

function f1() {
    alert('Task #1');
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Создайте input.b-2 type=button - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.

function f2() {
    alert('Task #2');
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Создайте p.p-3 - при нажатии на него выводите alert с номером задачи.

function f3() {
    alert('И да, это он!!!');
}

document.querySelector('.p-3').onclick = f3;

// Task 4. Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-4

function f4() {
    const checkbox = document.querySelector('.i-4').checked;
    let out = document.querySelector('.out-4');
    if (checkbox){
        out.textContent = 'true';
    }
    else out.textContent = 'false';
}

document.querySelector('.b-4').onclick = f4;

// Task 5.
//Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте value="task-5" - при нажатии на кнопку b-5 выводите value checkbox если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5

function f5() {
    const checkbox = document.querySelector('.i-5')
    let out = document.querySelector('.out-5');

    if (checkbox.checked){
        out.textContent = checkbox.value;
    }
    else out.textContent = 'false';
}

document.querySelector('.b-5').onclick = f5;


// Task 6. 
//Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку выводите value из input в div.out-6

function f6() {
    let out = document.querySelector('.out-6');
    out.textContent = document.querySelector('.i-6').value;
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку выводите в div.out-71 value прописанное в input. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.

function f7() {
    const input= document.querySelector('.i-7');
    let out1 = document.querySelector('.out-71');
    let out2 = document.querySelector('.out-72');
    out1.textContent=input.value;

    if (input.value.length>=6){
        out2.textContent = 1;
    }
    else out2.textContent = 0;


}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Создайте div.out-8 и кнопку .b-8. При нажатии кнопки создавайте внутри div.out-8 элемент input.i-81 и кнопку .b-81 (innerHTML). Добавьте на созданную кнопку событие клик и запуск функции f81. Функция должна в .out-81 выводить value созданного input.i-81.

function f8() {
    // кнопку создаем через ....innerHTML = '<button....</button>
    // т.е. как строку и в ставляем на страницу
    //  потом получаем кнопку со страницы и вешаем событие
    //    вашасозданнаякнопка.onclick = f81;

    document.querySelector('.out-8').innerHTML = '<input class="i-81" type="text"><button class="b-81">button</button>';
    // document.querySelector('.out-8').innerHTML = '<button class="b-81">button</button>';
    document.querySelector('.b-81').onclick = f81

}

function f81 () {
    const input = document.querySelector('.i-81');
    const out = document.querySelector('.out-81');
    out.textContent = input.value;
}

document.querySelector('.b-8').onclick = f8;

// Task 9
//Создайте один input(radio).r-9  и button.b-9 - при нажатии на button если radio.r-9 выбран (активен, checked) выводите в .out-9 - value прописанное в r-9, либо 0 если не активен. 

function f9() {
    const input = document.querySelector('.r-9');
    const out = document.querySelector('.out-9');

    if (input.checked){
        out.textContent = input.value
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// >Создайте input(color).i-10 и button.b-10 - при нажатии на кнопку окрашивайте div.out-10 выбранным цветом (имеется ввиду .style.background = ).

function f10() {
    const input = document.querySelector('.i-10');
    const out = document.querySelector('.out-10');

    out.style.background = input.value;
}

document.querySelector('.b-10').onclick = f10;


// Task     11
//   Создайте input(color).i-111 и input(color).i-112- два элемента и button.b-11 - при нажатии на кнопку присвойте цвет из первого input в value второго.

function f11() {
    const input1 = document.querySelector('.i-111');
    const input2 = document.querySelector('.i-112');

    input2.value = input1.value;
}

document.querySelector('.b-11').onclick = f11;

// Task 12
//   Создайте input(date).i-12 и button.b-12 - при нажатии на кнопку выводите на в  out-12 выбранную в input дату.

function f12() {
    const input = document.querySelector('.i-12');
    const out = document.querySelector('.out-12');

   out.textContent = input.value;
}

document.querySelector('.b-12').onclick = f12;

// Task 13
//  Создайте input(range).i-13. При изменении положения ползунка i-13 выводите значение в out-13. Для события используйте oninput.

function f13() {
    const range = document.querySelector('.i-13');
    const out = document.querySelector('.out-13');

    out.textContent = range.value;
}

document.querySelector('.i-13').oninput = f13;

// Task 14
// Создайте text-area.t-14 и button.b-14 - при нажатии на кнопку выводите на в out-14 текст введенный в t-14.

function f14() {
    const input = document.querySelector('.t-14');
    const out = document.querySelector('.out-14');

    out.textContent = input.value;
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Создайте text-area.t-15, input.i-15 и button.b-15 - при нажатии на кнопку выводите текст из input.i-15 в textarea.t-15 и на страницу в out-15.

function f15() {
    const input = document.querySelector('.i-15');
    const out = document.querySelector('.out-15');
    const textarea = document.querySelector('.t-15');

    out.textContent = input.value;
    textarea.value = input.value;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Создайте select.s-16 и button.b-16 - при нажатии на кнопку выводите в out-16 value выбранного option из s-16.

function f16() {
    // для получения выбранного option просто получите select в переменную и select.value;
    const input = document.querySelector('.s-16');
    const out = document.querySelector('.out-16');

    out.textContent = input.value

}

document.querySelector('.b-16').onclick = f16;

// Task 17
// Создайте select.s-17. Добавьте ему событие onchange, при наступлении которого запускается функция f17. Функция должна выводить в out-17 value выбранного в select option.

function f17() {
    const input = document.querySelector('.s-17');
    const out = document.querySelector('.out-17');

    out.textContent = input.value
}

document.querySelector('.s-17').onchange = f17;

// Task 18
// Создайте select.s-18 и input.i-18. Добавьте на select событие onchange, при наступлении которого запускается функция f18. Функция должна выводить в input i-18 value выбранного в select option.

function f18() {
    const select = document.querySelector('.s-18');
    const input = document.querySelector('.i-18');

    input.value = select.value
}

document.querySelector('.s-18').onchange = f18;

// Task 19
// Создайте форму. В ней input(text).i-191 и input(password).i-192 - и кнопку button.b-19. По нажатию кнопки выводите значение text и password в out-19 через пробел. Обратите внимание на хитрость. Мы, кнопку сейчас повесили за пределами формы. Чуть позже мы рассмотрим почему это делали.

function f19() {
    const text = document.querySelector('.i-191');
    const pass = document.querySelector('.i-192');
    const out = document.querySelector('.out-19');

    out.textContent = text.value + ' ' +  pass.value

}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Создайте форму .f-20. В ней input(text) и input(password) - и кнопку button.b-20. По нажатию кнопки выводите значение из input text и password в out-20 через пробел. Используйте form.elements (читать)

// очень внимательно изучите верстку!!! 
// обратите внимание, что мы не используем class, а присвоили name!!!

function f20(e) {
    e.preventDefault(); // чтобы форма не перезагружала страницу!!!!
    let form = document.querySelector('.f-20');
    let out = document.querySelector('.out-20');
    let username = form.elements['username'].value;
    let password = form.elements['password'].value;

    out.textContent = username + ' ' + password;

    console.log(form.elements);
    console.log(form.elements['username'].value); // так можно обратиться к элементу внутри формы

}

document.querySelector('.b-20').onclick = f20;