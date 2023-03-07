let button = document.getElementById('submit');
button.addEventListener("click", function()
{
    let ma = document.getElementById('math').value;
    let ph = document.getElementById('physic').value;
    let bio = document.getElementById('biology').value;
    let showtb = document.getElementById('tb');
    let a, b, c, dtb;
    a = Number(ma);
    b = Number(ph);
    c = Number(bio);
    dtb = (a + b + c)/3;
    showtb.textContent = +dtb;
})


let c1 = document.getElementById('cel');
let f1 = document.getElementById('fah');

c1.addEventListener("input", function()
{
    let c2 = Number(c1.value);
    f1.value = ((c2/5)*9)+32;
})
f1.addEventListener("input",function()
{
    let f2 = Number(f1.value);
    c1.value = (f2-32)/9*5;
})

const pi = 3.14159;
let ra = document.getElementById('rad');
let ar = document.getElementById('area');
let cir = document.getElementById('circuit');

ra.addEventListener("input", function()
{
    let $rad = Number(ra.value);
    ar.textContent = $rad*$rad*pi;
    cir.textContent = 2*$rad*pi;
})
