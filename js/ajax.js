import { showOutput, readNumber } from "./utils.js";

export function getFactAjax(){
    let factText = document.querySelector('#factTextAjax')
    let number = readNumber();

    let xhr = new XMLHttpRequest();
    xhr.open('GET','http://numbersapi.com/'+number);

    xhr.onload = () => {
        if (xhr.status !== 200 || number == "") {
            return
        }
        factText.innerText = xhr.responseText;
        showOutput()
    }  

    xhr.send();
}
