const display=document.querySelector("#calc-display");
const buttons=document.querySelectorAll(".btn");
function evaluateResult(){
    const convertedValue=currentValue
    .replace("×","*")
    .replace("÷","/")
    .replace("%","*0.01");
    const result=eval(convertedValue);
    display.value=result.toString();

}
currentValue=""
buttons.forEach(function (button){
    button.addEventListener("click",()=>{
        const value=button.innerText;
        if (value==="AC"){
            currentValue="";
            display.value=currentValue;
        }
        else if (value==="="){
            evaluateResult();
        }
        else{
        currentValue+=value;
        display.value=currentValue;
        }

    })
})