
const button = document.querySelector('#btn');
var outputText = document.querySelector('#output');

//console.log(button);

function eventHandler() {
    const inputText = document.querySelector('#input').value;
    //console.log(inputText);
    //console.log('step 1');
    fetch('https://api.funtranslations.com/translate/morse.json' + '?text=' + inputText)
    .then(response => response.json())
    .then(json => {
        const translatedText = json.contents.translated;
        outputText.innerText = translatedText;
       // console.log(translatedText);
       // console.log('step 2');
    })
    .catch(error => {
        console.log('Error: ',error);
        //console.log('step 3');
    })
}

//console.log('1')
//button.addEventListener('click', eventHandler(inputText))
button.onclick = eventHandler;