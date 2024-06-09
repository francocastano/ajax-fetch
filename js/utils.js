export function showOutput(){
    let outputs = document.querySelectorAll('#fact')
    outputs.forEach(fact => fact.style.display = 'block')
}

export function readNumber() {
    let numberInput = document.querySelector('#numberInput');
    let number = numberInput.value;
    return number;
}

