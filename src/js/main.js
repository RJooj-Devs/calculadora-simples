const elements = {
    //Display
    calcDisplay: document.querySelector('span.calc'),
    history: document.querySelector('i.icon'),
    output: document.querySelector('p.output'),

    //
}

function digit(val)
{
    if(elements.calcDisplay.innerHTML == '0')
    {
        elements.calcDisplay.innerHTML = val
    } else{
        elements.calcDisplay.innerHTML += val
    }
}