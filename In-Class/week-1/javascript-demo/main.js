'use strict';

// there is a "load" event that runs on everything when
// the window is loaded, everything is loaded

//for every event, you can register an event handler with
//a property named "onevent-name". an event handler
// is a function.

window.onload = function(){
    document.body.style.backgroundColor = '#a0a0a0';
};

// javascript has a special object called the global object aka "window"
// every variable in global scope is actually stored on the window object.
// window.onload is the same as onload, window.document is the same as
// document

// a more flexible way to do this:

window.addEventListener('load', () => {
    document.body.firstElementChild.textContent = 'DOM changed this';
});

// ideally we don't wait all the way until window loads
// that means, all images have downloaded

// all we really need is the elements to exist in the DOM and not be null
// DOMContentloaded event fires sooner.
window.addEventListener('DOMContentLoaded', () =>{
    let header = document.getElementById('header-text');
    let colA = document.getElementById('col-a');
    // get elements by id, classname, tagname, queryselector
    // query selector gets first matching element according to css selector
    // syntax.
    //querySelectorall gets all matching elements.
    let c = 0;
    header.addEventListener('click', () =>{
        c++;
        header.textContent = `DOM changed this (clicked ${c} times)`;
        // we can use textContent property to get and set text inside an
        // element
        colA.innerHTML = '<em>Col</em> <u>A</u>';
    });

    colA.addEventListener('mouseover', () => {
        // create element
        let footer = document.createElement('h2');
        //we add some text inside it
        footer.textContent = '&amp Revature';
        // we will insert it into the DOM tree at the bottom.
        document.body.appendChild(footer);
    });
    let table = document.getElementById('the-table');
    //listener on the first cell
    table.rows[0].cells[0].addEventListener('click', printEventDetails);
    //listener on the whole table
    table.addEventListener('click', printEventDetails, true);

    function printEventDetails(event)
    {
        // type is the name of the event, e.g. 'click
        console.log(`event.type: ${event.type}`);
        //target is the element that fired the event originally.
        console.log(`event.target: ${event.target}`);
        //currentTarget is the element this evend handler is registerd on.
        console.log(`event.currentTarget: ${event.currentTarget}`);
        //'this' is bound on the same as currentTarget (unless this is an arrow function)
        console.log(`this: ${this}`);
        console.log();
    }
    // if your event handlers take an argument, it will be sett to the
    // event object.

    // methods available on the event object:
    // - preventDefault() - browser has default event handlers
    // example: click on a form button submits.
    // pressing enter on a form field also submits.
    // clicking on a ling navigates to that page.
    // prevent default lets us stop that default behavior from 
    // occurring.

    // stopPropagation()
    // this switches off all future event handlers on elements that come later
    // in the sequence of
    // capturing, target, bubbling hase etc.

    // stopImmediatePropagaation()
        // this switches off all subsequent handlers of this event,
        // even ones on the same element (currentTarget)

    // using these stopPropagation is generally bad practice
});