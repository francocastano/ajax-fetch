import { showOutput, readNumber } from "./utils.js"; 

export async function getFactFetchAsync(){
    let factText = document.querySelector('#factTextFetchAsync')
    let number = readNumber();

    try {
        let response = await fetch('http://numbersapi.com/'+number)
        let text = await response.text()
        if(number === ""){
            return
        }
        factText.innerText = text
        showOutput()
    } catch(error) {
        console.log(error)
    }
}
