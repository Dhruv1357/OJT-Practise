var A = 0;
var B = 0;
var C = 0;

function ClickA() {
    ++A;
    document.querySelector(".OA").innerText = A;
    lead();
}
function ClickB() {
    ++B;
    document.querySelector(".OB").innerText = B;
    lead();
}
function ClickC() {
    ++C;
    document.querySelector(".OC").innerText = C;
    lead();
}

function lead()
{
    if(A>B && A>C)
    {
        document.querySelector(".leadOpt").innerText="Option A"
    }
    else if(B>C && B>A)
    {
        document.querySelector(".leadOpt").innerText="Option B"
    }
    else if(C>A && C>B)
    {
        document.querySelector(".leadOpt").innerText="Option C"
    }
}