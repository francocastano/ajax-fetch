import { showOutput, readNumber } from "./utils.js";

export function getFactFetchPromise(){
    let factText = document.querySelector('#factTextFetchPromise')
    let number = readNumber();

    fetch('http://numbersapi.com/'+number)
    .then(response => response.text())
    .then(text => {
        if(number === ""){
            return
        }
        factText.innerText = text
        showOutput()
    })
    .catch(error => console.log(error))
}

