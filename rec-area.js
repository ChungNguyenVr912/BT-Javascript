let bg = document.getElementById('start');
bg.addEventListener("click", function()
{
    let width = prompt("Enter width:");
    let height = prompt("Enter height:");
    let a = Number(width);
    let b = Number(height);
    let area = a*b;
    document.write("The area is: " + area);
})