let key1 = document.getElementById('bt1');
key1.addEventListener("click", function()
{
    let i = 10;
    let f = 20.5;
    let b = true;
    let s = 'Hà Nội';

    document.write('i = ' + i);
    document.write('<br/>');
    document.write('f = ' + f);
    document.write('<br/>');
    document.write('b = ' + b);
    document.write('<br/>');
    document.write('s = ' + s);
})
let key2 = document.getElementById('bt2');
key2.addEventListener("click", function()
{
    let width = 20;
    let height = 10;
    let area = width * height;
    document.write('Area = ' + area);
})
let key3 = document.getElementById('bt3');
key3.addEventListener("click", function()
{
    let a = prompt("Nhap vao a:");
    let b = prompt("Nhap vao b:");
    // let c = a%b;
    if(a%b == 0)
    {
        alert('a chia het cho b');
        
    }else
    {
        alert('a khong chia het cho b');
    }
})