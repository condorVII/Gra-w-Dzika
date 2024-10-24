var lost = false;
var i = 1;
var t = 500;
var w = false;
var rekord = 0; 

function latwy()
{
    if(w == true)
    {
        const l = document.getElementById("latwy");
        l.style.color = 'red';
        setTimeout(() => {
            l.style.color = 'black';
            }, 200);
    }
    else
    {
        t = 500;
    }
}
function sredni()
{
    if(w == true)
    {
        const s = document.getElementById("sredni");
        s.style.color = 'red';
        setTimeout(() => {
            s.style.color = 'black';
            }, 200);    
    }
    else
    {
        t = 250;
    }
}
function trudny()
{
    if(w == true)
    {
        const tr = document.getElementById("trudny");
        tr.style.color = 'red';
        setTimeout(() => {
            tr.style.color = 'black';
            }, 200);
    }
    else
    {
        t = 125;
    }
}
function ifLost()
{
    if(lost==true)
        {
            alert("Przegrałeś");
            clearInterval(myInterval);
            w = false;
            if (i > rekord){
                rekord = i;
                var r = document.getElementById("rekord");
                r.innerText = i-1;
            }
            i = 1;
        }
}
function setFalse()
{
    if(lost==false)
    {
        alert("Ta liczba ani nie była siodemką, ani nie miała w sobie cyfry siedem. Przegrywasz");
        clearInterval(myInterval);
        w = false;
        if (i > rekord){
            rekord = i;
            var r = document.getElementById("rekord");
            r.innerText = i-1;
        }
        i = 1;
    }
    lost = false;
}
function ifDzik()
{
    var p = document.getElementById("liczba");
    p.innerText = i;
    if(i%7==0 || i==7 || i.toString()[0] == "7" || i.toString()[1] == "7" || i.toString()[2] == "7")
    {
        lost = true;
        setTimeout(ifLost, t*1.60)

        
    }
    ++i;
    
}
function test()
{
    console.log(setInterval(idDzik,3000));
}

function start()
{
    
    if(w == true)
    {
        const tr = document.getElementById("startb");
        tr.style.color = 'red';
        setTimeout(() => {
            tr.style.color = 'black';
            }, 200);
    }
    else
    {
        w = true;
        var p0 = document.getElementById("trudnosc");
        var p1 = document.getElementById("start");
        myInterval = setInterval(ifDzik,t*2);
    }
    
}
