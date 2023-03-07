let a = document.getElementById('num1');
let b = document.getElementById('num2');
let opr = document.getElementById('op');
let res = document.getElementById('result');
function f1()
{
    res.innerHTML = Number(a.value) +Number(b.value);
    opr.innerHTML = '+';
}
function f2()
{
    res.innerHTML = Number(a.value) -Number(b.value);
    opr.innerHTML = '-';
}
function f3()
{
    res.innerHTML = Number(a.value) *Number(b.value);
    opr.innerHTML = 'x';
}
function f4()
{
    res.innerHTML = Number(a.value) /Number(b.value);
    opr.innerHTML = '/';
}