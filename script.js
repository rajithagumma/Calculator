const display=document.querySelector("#calc-display");
const buttons=document.querySelectorAll(".btn");
function evaluateResult(){
    const convertedValue=currentValue
    .replace("×","*")
    .replace("÷","/")
    .replace("%","*0.01")
    .replace("sin","Math.sin")
    .replace("cos","Math.cos")
    .replace("ln","Math.log")
    .replace("π","Math.PI")
    .replace("log","Math.log10")
    .replace("tan","Math.tan")
    .replace("√","Math.sqrt")
    .replace("e","Math.E")
    const result=eval(convertedValue).toString();
    display.value=result.toString();
    return result;

}
currentValue=""
buttons.forEach(function (button){
    button.addEventListener("click",()=>{
        const value=button.innerText;
        try {
            if (value==="AC"){
                currentValue="";
                display.value=currentValue;
            }
            else if (value==="="){
                currentValue=evaluateResult();
        
            }
            else{
                let lastele=currentValue[currentValue.length-1]
                if (value==="+" || value==="-" || value==="×" || value==="÷" || value==="√" || value==="%"){
                    if (isNaN(lastele)){
                        currentValue = currentValue.slice(0, currentValue.length - 1)+value;
                        console.log(currentValue)

                    }
                    else{
                        currentValue+=value;
                        console.log(currentValue)

 
                    }

            }
            else{
                currentValue+=value;
                console.log(currentValue)

            }
            // console.log(currentValue)
            display.value=currentValue;
            }  
        } catch (error){
            console.log(error);
            currentValue="ERROR";
            display.value=currentValue;
        }

    })
})