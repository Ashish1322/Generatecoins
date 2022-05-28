var c = 0;
function generateCoin()
{
    c+=1
    var a  =document.getElementById("coins").innerHTML
    document.getElementById("coins").innerHTML = a + "<img width='150' src='giphy.gif' />"
    var b = document.getElementById("coin")
    b.play()
    document.getElementById("count").innerText = "Count: " + c
}

