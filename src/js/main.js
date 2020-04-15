const elements = {
    //Display
    calcDisplay: document.querySelector('span.calc'),
    history: document.querySelector('i.icon'),
    output: document.querySelector('p.output'),

    //
}
let ac = document.getElementsByName('ac-func')[0]
ac.addEventListener('click', clear)

let calcs = []
let currCalc = []
let values = []

renderDisplay()

function digit(val, type, name)
{
    if(currCalc.length == 0 && type == "func-btn" || currCalc.length == 0 && val == '.'){
        currCalc.push(0, val)
    }else{
        
        currCalc.push(val)
    }
    
   renderDisplay(val)
}

function clear(){
    currCalc.splice(currCalc.length-1, 1)
    renderDisplay()
    
}
function renderDisplay(val, type){
    if(currCalc.length == 0 && type != "func-btn"){
        elements.output.innerHTML = '0'
    } else {
        elements.output.innerHTML = ''
        for(i in currCalc)
        {  
            elements.output.innerHTML += currCalc[i]
        }
        console.log(currCalc)
    }
}
function calculate()
{

}
