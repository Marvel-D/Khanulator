const display = document.getElementById('display');
const btn = document.getElementsByClassName('button')
let buttons = Array.from(btn);
//console.log(buttons)

buttons.forEach( button => {
    //note: .map can also be used 
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'RESET':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = math.evaluate(display.innerText);
                    //used instead of using eval()
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'Del':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});




//refrence = Adam Nagy