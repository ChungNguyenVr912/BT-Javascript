// conv.addEventListener("click", 
function F()
{
    let am = parseInt(document.getElementById('input').value);
    let u1 = document.getElementById('unit1').value;
    let u2 = document.getElementById('unit2').value;
    // let conv = document.getElementById('convert');
    let res = document.getElementById('result');
    
    if(u1=='USD' && u2 == 'VND')
    {
        res.innerHTML = am*23000;
    }
    if(u1== 'VND' && u2== 'USD')
    {
        res.textContent = am/23000;
    }
}