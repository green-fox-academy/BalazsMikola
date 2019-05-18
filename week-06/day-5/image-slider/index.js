'use strict';

const listOfImages = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg'];
let actualImageIndex = 0;

function slide(direction){
  if(direction === 'right'){
    actualImageIndex ++;
    if(actualImageIndex > listOfImages.length-1) actualImageIndex = 0;
    document.getElementsByClassName('content')[0].style.backgroundImage = 'url(assets/'+listOfImages[actualImageIndex]+')';
  }
  if(direction === 'left'){
    actualImageIndex --;
    if(actualImageIndex < 0) actualImageIndex = listOfImages.length-1;
    document.getElementsByClassName('content')[0].style.backgroundImage = 'url(assets/'+listOfImages[actualImageIndex]+')';
  }
  console.log(actualImageIndex);
}