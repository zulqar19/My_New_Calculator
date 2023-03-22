window.onerror = function(){
    document.getElementById('display').value = "Syntax Error";
    alert("Syntax Error")
}


let text ="";


let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e) =>{
        if (e.target.innerHTML == "=") {
            text = eval(text);
            document.getElementById('display').value = text;
        }else if (e.target.innerHTML == "C") {
            text = ""
            document.getElementById('display').value = text;
        }
        else{
        text += e.target.innerHTML;
        document.getElementById('display').value = text;
        }
    })
})

// for keyboard press
document.addEventListener('keydown' , (e) =>{
    console.log(e.key);
    if (e.key == "/" ||
        e.key == "%" ||
        e.key == "*" ||
        e.key == "-" ||
        e.key == "+" ||
        e.key == "." ||
        e.key <= 9) {
           display.value += e.key;
           document.getElementById('display').value = display.value; 
        }else if(e.keyCode == 67 || e.keyCode == 27 || e.keyCode == 46){
            text =""
            document.getElementById('display').value = text;
        }else if(e.key == "=" || e.key == "Enter"){
            let text = document.getElementById('display').value;
            text = eval(text);
            document.getElementById('display').value = text;
        }
})
