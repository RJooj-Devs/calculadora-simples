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
let operators = []


renderDisplay()

function digitNumber(val, type, name)
{
    currCalc.push(val)
    values.push(val)
    renderDisplay(val)
}
function digitFunc(val){
    calcs.push(Number(values.join('')))

    if(val != currCalc[currCalc.length-1])
    {
        currCalc.push(val)
        operators.push(val)
        renderDisplay(val)
        values.splice(0, values.length)
    }
        
}
function clear(){
    
    currCalc.splice(currCalc.length-1, 1)
    values.splice(values.length-1, 1)
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
    }
}
function calculate()
{
    calcs.push(Number(values.join('')))
    values.splice(0, values.length)
    let res
    let n
    for(let op in operators)
    {
        switch(operators[op])
        {
            case '+':
                //em construção...
                n = calcs[op]+1
                res = calcs[op] + calcs[n]
        }
    }
   
    console.log(res)
}
