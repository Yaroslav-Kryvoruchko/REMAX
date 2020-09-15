const imagesOne = document.getElementById("images-1");
const imagesTwo = document.getElementById("images-2");
const imagesTree = document.getElementById("images-3");
const imagesFour = document.getElementById("images-4");
const imagesFIve = document.getElementById("images-5");

const mainPhotoOne = document.querySelector(".gallery__main--image__one");
const mainPhotoTwo = document.querySelector(".gallery__main--image__two");

// function galleryOneImage() {
//     let open = false;

//     if(!open) {
//         imagesOne.classList.add('open');
//         open = true;
//     }else {
//         imagesOne.classList.remove('open');
//     }
// }

let opens = false;

function galleryTwoImage() {

    if(!opens) {
        mainPhotoTwo.classList.add('open');
        mainPhotoOne.classList.remove('open');
        opens = true;
    }else {
        mainPhotoTwo.classList.remove('open');
        opens = false;
    }
}

// imagesOne.addEventListener("click", galleryOneImage);
imagesTwo.addEventListener("click", galleryTwoImage);
