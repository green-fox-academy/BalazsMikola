'use strict';

const listOfImages = [
  {name:'pic1.jpg', title:'picture1', story:'lorem ipsum1'},
  {name:'pic2.jpg', title:'picture2', story:'lorem ipsum2'},
  {name:'pic3.jpg', title:'picture3', story:'lorem ipsum3'},
  {name:'pic4.jpg', title:'picture4', story:'lorem ipsum4'},
];

let actualImageIndex = 0;

document.getElementsByTagName('h1')[0].innerText = listOfImages[0].title;
document.getElementsByTagName('p')[0].innerText = listOfImages[0].story;

function showImagesInThumbnails(images){
  let thumbnails = document.getElementsByClassName('thumbnails');
  for(let i=0; i<images.length; i++){
    thumbnails[i].style.backgroundImage = 'url(assets/'+listOfImages[i].name+')';
  };
};

function slide(direction){
  if(direction === 'right'){
    actualImageIndex ++;
    if(actualImageIndex > listOfImages.length-1) actualImageIndex = 0;
    document.getElementsByClassName('content')[0].style.backgroundImage = 'url(assets/'+listOfImages[actualImageIndex].name+')';
    document.getElementsByTagName('h1')[0].innerText = listOfImages[actualImageIndex].title;
    document.getElementsByTagName('p')[0].innerText = listOfImages[actualImageIndex].story;
  };
  if(direction === 'left'){
    actualImageIndex --;
    if(actualImageIndex < 0) actualImageIndex = listOfImages.length-1;
    document.getElementsByClassName('content')[0].style.backgroundImage = 'url(assets/'+listOfImages[actualImageIndex].name+')';
    document.getElementsByTagName('h1')[0].innerText = listOfImages[actualImageIndex].title;
    document.getElementsByTagName('p')[0].innerText = listOfImages[actualImageIndex].story;
  };
  console.log(actualImageIndex);
};

showImagesInThumbnails(listOfImages);