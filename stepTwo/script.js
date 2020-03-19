const p = document.createElement('p');
const button = document.createElement('button');
const clearButton = document.createElement('button');
const container = document.getElementById('quote_container');
const form = document.createElement('form');
const inputAmount = document.createElement('input');

inputAmount.setAttribute('type', 'text');
inputAmount.setAttribute('value', '');
inputAmount.setAttribute('placeholder', 'Number of quotes want');

container.appendChild(p);
container.appendChild(form);
form.appendChild(inputAmount);
form.appendChild(button);


button.innerHTML = 'Print Quote';
clearButton.innerHTML = 'Clear Quote';

const firstMsg = 'Select an number and type of Quotes';
const errorNoQuote = 'Please choose the type of quote';
const errorNoAmount = 'Please choose an amount';
const errorValue = 'Sorry you can only between 1 and 5 quotes';
const printMore = 'Print more Quotes';
p.innerHTML = firstMsg;
p.idname = "message";

/*
 Creates a radio button and label
 */
function createRadios(radio, name, value, label, text) {
    radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', name);
    radio.setAttribute('class', name);
    radio.setAttribute('id', value);
    radio.setAttribute('value', value);
    label = document.createElement('label');
    label.setAttribute('for', value);
    label.innerHTML = text;
    form.appendChild(label);
    form.appendChild(radio);
}
/*
 call the function to print each radio button and label required
 */
createRadios('select1', 'type', 'human', 'label1', 'Human');
createRadios('select2', 'type', 'animal', 'label2', 'Animal');

/*
 Get the value of the radio button that is checked and return it
 */
function getRadioCheckedValue() {
    let radios = document.getElementsByName('type');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}
/*
 Select the amount of quotes to be printed and print messages if errors
 Run a for loop for the amount the user has input and run the showQuotes function that many times
 */
function selectAmount(quote) {
    inputAmount.setAttribute('value', inputAmount.value);
    let amount = inputAmount.value;
    p.idname = "error";
    if (!quote) {
        p.innerHTML = errorNoQuote;
    }
    else if (!amount) {
        p.innerHTML = errorNoAmount
    }
    else if (amount > 5 || amount <= 0) {
        p.innerHTML = errorValue;
    } else {
        p.innerHTML = '';
        p.idname = "quote";
        for (let i = 0; i < inputAmount.value; i += 1) {
            showQuotes(quote);
        }
        button.innerHTML = printMore;
        inputAmount.value = '';
        form.appendChild(clearButton);
    }

}
/*
 print the quote depending on which quote has been choosen
 */
function showQuotes(quote) {
    if (quote === 'human') {
        p.innerHTML += human.describe() + "<br>";
    } else {
        p.innerHTML += animal.describe() + "<br>";
    }
}

/*
 event listener that clears the quotes should the user decide he doesn't
 want to see any more quotes. Once clicked this button is then removed
 */
clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    p.innerHTML = firstMsg;
    clearButton.remove();
    p.idname = "message";
});

/*
 event listener on submit that gets the value of the radio button and stores it in a variable
 this is then passed to the select Amount function so that we know which quote to print
 as this value is then passed down to the showQuotes function
 */
form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearButton.remove();
    let quote = getRadioCheckedValue();
    selectAmount(quote);
});