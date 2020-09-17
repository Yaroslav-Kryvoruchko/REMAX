const imagesOne = document.getElementById("images-1");
const imagesTwo = document.getElementById("images-2");
const imagesTree = document.getElementById("images-3");
const imagesFour = document.getElementById("images-4");
const imagesFive = document.getElementById("images-5");

const mainPhotoOne = document.querySelector(".gallery__main--image__one");
const mainPhotoTwo = document.querySelector(".gallery__main--image__two");
const mainPhotoTree = document.querySelector(".gallery__main--image__tree");
const mainPhotoFour = document.querySelector(".gallery__main--image__four");
const mainPhotoFive = document.querySelector(".gallery__main--image__five");

function galleryOneImage() {
  mainPhotoOne.style.display = "block";
  mainPhotoTwo.classList.remove("open");
  mainPhotoTree.classList.remove("open");
  mainPhotoFour.classList.remove("open");
  mainPhotoFive.classList.remove("open");
}

function galleryTwoImage() {
  mainPhotoTwo.classList.add("open");
  mainPhotoOne.style.display = "none";
  mainPhotoTree.classList.remove("open");
  mainPhotoFour.classList.remove("open");
  mainPhotoFive.classList.remove("open");
}

function galleryTreeImage() {
  mainPhotoTree.classList.add("open");
  mainPhotoTwo.classList.remove("open");
  mainPhotoOne.style.display = "none";
  mainPhotoFour.classList.remove("open");
  mainPhotoFive.classList.remove("open");
}

function galleryFourImage() {
  mainPhotoFour.classList.add("open");
  mainPhotoTree.classList.remove("open");
  mainPhotoTwo.classList.remove("open");
  mainPhotoOne.style.display = "none";
  mainPhotoFive.classList.remove("open");
}

function galleryFIveImage() {
  mainPhotoFive.classList.add("open");
  mainPhotoFour.classList.remove("open");
  mainPhotoTree.classList.remove("open");
  mainPhotoTwo.classList.remove("open");
  mainPhotoOne.style.display = "none";
}

imagesOne.addEventListener("click", galleryOneImage);
imagesTwo.addEventListener("click", galleryTwoImage);
imagesTree.addEventListener("click", galleryTreeImage);
imagesFour.addEventListener("click", galleryFourImage);
imagesFive.addEventListener("click", galleryFIveImage);

const photo = document.querySelector(".gallery");
const video = document.querySelector(".video");
const video360 = document.querySelector(".video-360");

const photoItem = document.querySelector(".item__photo");
const videoItem = document.querySelector(".item__video");
const video360Item = document.querySelector(".item__video--360");

const photoBtn = document.getElementById("photo__btn");
const videoBtn = document.getElementById("video__btn");
const video360Btn = document.getElementById("360-video__btn");

function photos() {
  photo.classList.add("animation__open");
  photoItem.classList.remove("where_you--back");
  photo.style.display = "flex";

  video.classList.add("animation__close");
  videoItem.classList.remove("where_you");
  video.style.display = "none";

  video360.classList.add("animation__close");
  video360Item.classList.remove("where_you");
  video360.style.display = "none";
}

function videos() {
  video.classList.add("animation__open");
  videoItem.classList.add("where_you");
  video.style.display = "block";

  photo.classList.add("animation__close");
  photoItem.classList.add("where_you--back");
  photo.style.display = "none";

  video360.classList.add("animation__close");
  video360Item.classList.remove("where_you");
  video360.style.display = "none";
}

function videos360() {
  video360.classList.add("animation__open");
  video360Item.classList.add("where_you");
  video360.style.display = "block";

  video.classList.add("animation__close");
  videoItem.classList.remove("where_you");
  video.style.display = "none";

  photo.classList.add("animation__close");
  photoItem.classList.add("where_you--back");
  photo.style.display = "none";
}

photoBtn.addEventListener("click", photos);
videoBtn.addEventListener("click", videos);
video360Btn.addEventListener("click", videos360);

//menu

const menuBtn = document.querySelector(".burger__menu");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open_menu");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open_menu");
    menuOpen = false;
  }
});

// top

const one = document.querySelector('.info__items__one');
const two = document.querySelector('.info__items__two');
const tree = document.querySelector('.info__items__tree');

const lineOne = document.querySelector('.line__one');
const lineTwo = document.querySelector('.line__two');
const lineTree = document.querySelector('.line__tree');

one.addEventListener('mouseover', () => {
    lineOne.classList.add('see');
});

one.addEventListener('mouseout', () => {
    lineOne.classList.remove('see');
});

two.addEventListener('mouseover', () => {
    lineTwo.classList.add('see');
});

two.addEventListener('mouseout', () => {
    lineTwo.classList.remove('see');
});

tree.addEventListener('mouseover', () => {
    lineTree.classList.add('see');
});

tree.addEventListener('mouseout', () => {
    lineTree.classList.remove('see');
});

//blog 

const btnLeft = document.querySelector('.arrow__left');
const itemBlogFirst = document.querySelector('.blog__items');
const itemBlogSeconds = document.querySelector('.blog__items__two');

const lineBlogOne = document.querySelector('.line--one');
const lineBlogTwo = document.querySelector('.line--two');

let openBlog = false;

btnLeft.addEventListener('click', () => {
    if(!openBlog) {
        itemBlogFirst.classList.add('close__blog');
        itemBlogFirst.style.display = 'none';
        itemBlogSeconds.classList.add('open__blog');
        itemBlogSeconds.style.display = 'flex';

        lineBlogOne.style.backgroundColor = '#dedede';
        lineBlogTwo.style.backgroundColor = '#009cd8';

        openBlog = true;
    }else {
        itemBlogFirst.classList.add('open__blog');
        itemBlogFirst.style.display = 'flex';
        itemBlogSeconds.classList.remove('open__blog');
        itemBlogSeconds.style.display = 'none';

        lineBlogOne.style.backgroundColor = '#009cd8';
        lineBlogTwo.style.backgroundColor = '#dedede';

        openBlog = false;
    }
});
