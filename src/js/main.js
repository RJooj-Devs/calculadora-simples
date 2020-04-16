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
let q = 0

renderDisplay()

function digitNumber(val, type, name)
{
    currCalc.push(Number(val))
    values.push(Number(val))
    renderDisplay(val)
}
function digitFunc(val){
    calcs.push(values.join(''))
    q++
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
    calcs.push(values.join(''))
 
    q++
    let res = 0
    for(var i = 0; i < q; i++)
    {
        if(calcs[i] != ''){
            switch(operators[i])
            {

                case '+':
                res += Number(calcs[i]) + Number(calcs[i+1])
                break
                case 'x':
                    res += Number(calcs[i])*Number(calcs[i+1])
                break
                case '-':
                    res += Number(calcs[i])-Number(calcs[i+1])
            }
        }
        
    }
    elements.output.innerHTML = res
    elements.calcDisplay.innerHTML = currCalc.join('')
    calcs.splice(0, calcs.length)
    calcs.push(res)
    currCalc.splice(0, currCalc.length)
    currCalc.push(res)
    q = 0
    
    renderDisplay()
}
