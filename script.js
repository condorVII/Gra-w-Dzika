var lost = false;
var i = 1;
var t = 500;
function latwy()
{
    t = 500;
}
function sredni()
{
    t = 250;
}
function trudny()
{
    t = 125;
}
function ifLost()
{
    if(lost==true)
        {
            alert("Przegrałeś");
            clearInterval(myInterval);
            location.reload();
        }
}
function setFalse()
{
    if(lost==false)
    {
        alert("Ta liczba ani nie była siodemką, ani nie miała w sobie cyfry siedem. Przegrywasz");
        clearInterval(myInterval);
        location.reload();

    }
    lost = false;
}
function ifDzik()
{
    var p = document.getElementById("liczba");
    p.innerText = i;
    if(i%7==0 || i==7 || i.toString()[1] == "7")
    {
        lost = true;
        setTimeout(ifLost, t*1.50)

        
    }
    ++i;
    
}
function test()
{
    console.log(setInterval(idDzik,3000));
}

function start()
{
    var p0 = document.getElementById("trudnosc");
    p0.innerText = "===";
    var p1 = document.getElementById("start");
    p1.innerText = "===";
    myInterval = setInterval(ifDzik,t*2);
}
