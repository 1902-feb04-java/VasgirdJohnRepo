'use strict'

console.log(1);
let jokeText;
document.addEventListener('DOMContentLoaded', () =>
{
    let jokeHeader = document.getElementById('joke-text');
    let jokeButton = document.getElementById('new-joke');

    console.log(2);
    jokeButton.addEventListener('click', () =>{
        console.log(3);
        jokeHeader.textContent = jokeText;
    });
    console.log(4);
});
console.log(5);

function getJoke()
{
    // this object is provided by the browser to let us do AJAX
    // AJAX standds for Asynchronous Javascript and XML
    // but what is means in practice is, HTTP requests via Javascript
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () =>{
        console.log(`readyState: ${xhr.readyState}`);
        if (xhr.readyState == 4)
        {
            // 4 means we have recieved the response
            let responseJSON = xhr.response;
            console.log(responseJSON);

            if (xhr.status >= 200 && xhr.status < 300)
        }
    });
}