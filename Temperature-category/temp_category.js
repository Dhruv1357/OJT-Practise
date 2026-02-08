function Print()
{
    var userInp=document.querySelector(".temper").value;
    if(userInp<15)
    {
        document.querySelector(".Out").innerText="Cold";
    }
    else if(userInp>14 && userInp<31)
    {
        document.querySelector(".Out").innerText="Warm";
    }
    else
    {
        document.querySelector(".Out").innerText="Hot";
    }
}