const inputs=document.querySelectorAll('.angle-input')
const trianglebutton=document.querySelector('#btn-triangle')
const output=document.querySelector('#showoutput')


function calculatesumofangles(angle1,angle2,angle3){
    const sum=angle1+angle2+angle3;
    return sum;



}

function istriangle(){
    const angleformed=calculatesumofangles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));

    if(angleformed===180){
        // console.log("OWO triangle formed an angle")
        output.innerText="OWO Triangle formed an angle"
    }
    else{
        // console.log("oops triangle wont forms an angle")
        output.innerText="oops triangle wont forms an angle"
    }
    




}

trianglebutton.addEventListener("click",istriangle)







