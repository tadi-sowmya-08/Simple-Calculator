let screen=document.getElementById("screen");
let buttons=document.querySelectorAll('button');
let screenvalue='';
for (let item of buttons)
{
    item.addEventListener('click', clickedButton)
}
function clickedButton(e)
{
    buttonText=e.target.innerText;
    
    if (buttonText=='C'){
        screenvalue='';
        screen.value=screenvalue;
    }
    else if(buttonText=='='){
        screen.value=eval(screenvalue);

    }
    else{
        screenvalue+=buttonText;
        screen.value=screenvalue;
    }
}


        