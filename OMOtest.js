let omotest = document.getElementById('lb');
omotest.addEventListener("mouseover", mouseover)
function mouseover()
{
    omotest.classList.add("labelstyle");
}
omotest.addEventListener("mouseleave", mouseout)
function mouseout()
{
    omotest.classList.remove("labelstyle");
}
