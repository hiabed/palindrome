const button = document.querySelector("#check-btn");
const textInput = document.querySelector("#text-input");
const paragraph = document.querySelector("#result");

function check()
{
    let punctuation = /[.,\/#!$%\^&\*;:{}=\-_`~() ]/;
    let str = textInput.value.split(punctuation).join('');
    const string = textInput.value;
    let rev = str.split('').reverse().join('');
    if (str === "")
        alert("Please input a value");
    else
    {
        if (rev.toLowerCase() === str.toLowerCase())
            paragraph.innerHTML = `<span style="font-weight: bold">${string}</span> is a palindrome.`
        else
            paragraph.innerHTML = `<b>${string}</b> is not a palindrome.`
    }
    textInput.value = '';
}

function keyPress(event)
{
    if (event.key === 'Enter')
        check();
}

button.onclick = check;
textInput.addEventListener('keydown', keyPress);