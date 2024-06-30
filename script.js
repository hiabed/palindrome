const button = document.querySelector("#check-btn");
const textInput = document.querySelector("#text-input");
const paragraph = document.querySelector("p");

button.onclick = function check()
{
    let str = textInput.value;
    let rev = str.split('').reverse().join('');
    if (str === "") alert("Please input a value");
    if (rev === str)
        paragraph.innerText = `${str} is a palindrome.`
    else
        paragraph.innerText = `${str} is not a palindrome.`

}