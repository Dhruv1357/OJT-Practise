function result()
{
    var text = document.querySelector("textarea").value; 
    document.querySelector(".char").innerText = text.length;

    var word = 0;
    var sentence=0;
    for(var i=0;i<=text.length - 1;i++)
    {
        if(text[i]==" ")
        {
            word++;
        }
    }
    document.querySelector(".words").innerText=word+1;

    for(var i=0;i<=text.length - 1;i++)
    {
        if(text[i]=="." || text[i]=="?" || text[i]=="!")
        {
            sentence++;
        }
    }
    document.querySelector(".Sent").innerText=sentence;
}