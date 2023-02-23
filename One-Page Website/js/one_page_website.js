// videos were causing issues in browser (they were changed to private recently, I believe, so I removed them.)


// object for corresponding new pics
const big_pics = {
    "nola": "./media_files/an_big.jpg",
    "harper": "./media_files/bh_big.jpeg",
    "realmuto": "./media_files/jr_big.jpg",
    "schwarber": "./media_files/ks_big.jpg",
    "turner": "./media_files/tt_big.webp",
    "wheeler": "./media_files/zw_big.jpg"
}
// function for opening the modal
const open_modal = () => {
    const modal = document.querySelector("#modal-container");
    const modal_bg = document.querySelector("#modal-background");
    modal.style.display = 'grid';
    modal_bg.style.display = 'flex';
}

// function to close modal and background
const close_modal = () => {
    const modal = document.querySelector("#modal-container");
    const modal_bg = document.querySelector("#modal-background")
    modal.style.display = 'none';
    modal_bg.style.display = 'none';
}

// variable for picture frames on modal
const mainPic = document.querySelector("#main-img");
const sidePic1 = document.querySelector("#bottom-pic-1");
const sidePic2 = document.querySelector("#bottom-pic-2");
const sidePic3 = document.querySelector("#bottom-pic-3");

// function to load the pics into display
const load_pics = (link_arr) => {
    mainPic.src = big_pics[link_arr[0]];
    sidePic1.src = big_pics[link_arr[1]];
    sidePic2.src = big_pics[link_arr[2]];
    sidePic3.src = big_pics[link_arr[3]];
}

// variable to track what pic to display
let current_url_order = ['nola', 'harper', 'realmuto', 'schwarber', 'turner', 'wheeler'];

// function for clicking on thumbnail
const roster_click = e => {
    e.preventDefault();
    let curr = e.target.id;
    //console.log(curr);
    //console.log(big_pics[curr]);
    let curr_index = current_url_order.indexOf(curr);
    //console.log(curr_index);
    current_url_order[curr_index] = current_url_order[0];
    current_url_order[0] = curr;
    //console.log(current_url_order);
    load_pics(current_url_order);
    open_modal();
}

// function for next button
const forward_click = (link_arr) => {
    wrapped_pic = link_arr.shift();
    //console.log(link_arr);
    //console.log(wrapped_pic);
    link_arr[link_arr.length] = wrapped_pic;
    //console.log(link_arr);
    current_url_order = link_arr;
    load_pics(link_arr);
}

// preloading
load_pics(current_url_order);

// to alleviate need for argument from html side
const load_on_click = () => {
    forward_click(current_url_order);
}

// forward_click(current_url_order);