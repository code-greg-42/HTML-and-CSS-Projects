// functionality needed :
// 1. contact form pop-up (click from navbar or footer) (done)
// ^^ close button in top left or right (done)
// ^^ form doesn't submit unless everything is filled out (done in html)
// 2. slideshow next/back buttons (link each picture to its main website (done html))

const modal_full = document.querySelector("#modal-background");

const close_form = () => {
    modal_full.style.display = 'none';
}

const open_form = () => {
    modal_full.style.display = 'block';
}

// select img frame
let img_frame = document.querySelector("#img-frame")

// select about me card
let about_title = document.querySelector("#about-title")
let about_details = document.querySelector('#about-details');

// object to hold slide urls
let slide_urls = {
    "eth": "./images/ethereum-logo.jpg",
    "games": "./images/game-engine-logo.jpg",
    "python": "./images/python-logo.jpg",
    "react": "./images/react-logo.jpg",
    "fam": "./images/the-fam.jpg"
}

// array to hold order
slide_order = ["about", "python", "react", "games", "eth", "fam"];

// function for next slide etc
const forward_click = (arr) => {
    wrapped_pic = arr.shift();
    arr[arr.length] = wrapped_pic;
    curr_order = arr;
    if (arr[0] === 'about') {
        about_title.style.display = 'block';
        about_details.style.display = 'block';
        img_frame.style.display = 'none';
    } else {
        about_title.style.display = 'none';
        about_details.style.display = 'none';
        img_frame.src = slide_urls[arr[0]]
        img_frame.style.display = 'block';
    }
}

// to alleviate need for argument from html side
const load_on_click = () => {
    forward_click(slide_order);
}