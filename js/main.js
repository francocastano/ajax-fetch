import { getFactAjax } from "./ajax.js"
import { getFactFetchAsync } from "./fetchAsync.js"
import { getFactFetchPromise } from "./fetchPromise.js"

let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFactAjax)
numberInput.addEventListener('input', getFactFetchAsync)
numberInput.addEventListener('input', getFactFetchPromise)


// Implementar Fetch Async/Await
// Implementar Fetch Promises
// Mover funcionalidad común a utils.js
