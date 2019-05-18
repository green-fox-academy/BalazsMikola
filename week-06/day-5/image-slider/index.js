'use strict';

const listOfImages = [
  {name:'pic1.jpg', title:'Snake with gun', story:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure numquam modi voluptatem nam. Reprehenderit eos, aperiam optio dolorem eligendi nobis molestiae magnam placeat sit, architecto mollitia, ullam accusantium consequuntur'},
  {name:'pic2.jpg', title:'TigerX', story:'Distinctio iure numquam modi voluptatem nam. Reprehenderit eos, aperiam optio dolorem eligendi nobis molestiae magnam placeat sit, architecto mollitia, ullam accusantium consequuntur.'},
  {name:'pic3.jpg', title:'From above', story:'Ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure numquam modi voluptatem nam ullam accusantium consequuntur.'},
  {name:'pic4.jpg', title:'Explosion of colors', story:'Adipisicing elit. Distinctio iure numquam modi voluptatem nam. Reprehenderit eos, aperiam optio dolorem eligendi nobis molestiae magnam placeat.'},
  {name:'pic5.jpg', title:'Eye-contact', story:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure numquam modi voluptatem nam. Reprehenderit eos, aperiam optio dolorem eligendi nobis molestiae magnam placeat sit, architecto mollitia, ullam accusantium consequuntur'},
  {name:'pic6.jpg', title:'White tiger', story:'Distinctio iure numquam modi voluptatem nam. Reprehenderit eos, aperiam optio dolorem eligendi nobis molestiae magnam placeat sit, architecto mollitia, ullam accusantium consequuntur.'},
  {name:'pic7.jpg', title:'Water drop', story:'Ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure numquam modi voluptatem nam ullam accusantium consequuntur.'},
  {name:'pic8.jpg', title:'Summer', story:'Adipisicing elit. Distinctio iure numquam modi voluptatem nam. Reprehenderit eos, aperiam optio dolorem eligendi nobis molestiae magnam placeat.'},
];

let actualImageIndex = 0;

function setInitial(){
  document.getElementsByTagName('h1')[0].innerText = listOfImages[0].title;
  document.getElementsByTagName('p')[0].innerText = listOfImages[0].story;
  document.body.addEventListener('keydown', onKeyPress);
};

function changeMainImgae(index){
  document.getElementsByClassName('content')[0].style.backgroundImage = 'url(assets/'+listOfImages[index].name+')';
  document.getElementsByTagName('h1')[0].innerText = listOfImages[index].title;
  document.getElementsByTagName('p')[0].innerText = listOfImages[index].story;
};

function highlightMiniImage(){
  let thumbnails = document.getElementsByClassName('thumbnail');
  for(let i=0; i<listOfImages.length; i++){
    i===actualImageIndex ? thumbnails[i].style.borderColor = "grey" : thumbnails[i].style.borderColor = "white";
  };
};

function selectMiniImage(index){
  changeMainImgae(index);
  actualImageIndex = index;
  highlightMiniImage();
};

function showImagesInThumbnails(images){
  let thumbnails = document.getElementsByClassName('thumbnail');
  for(let i=0; i<images.length; i++){
    thumbnails[i].style.backgroundImage = 'url(assets/'+listOfImages[i].name+')';
  };  
};

function slide(direction){
  if(direction === 'right'){
    actualImageIndex ++;
    if(actualImageIndex > listOfImages.length-1) actualImageIndex = 0;
    changeMainImgae(actualImageIndex);
    highlightMiniImage(actualImageIndex);
  };
  if(direction === 'left'){
    actualImageIndex --;
    if(actualImageIndex < 0) actualImageIndex = listOfImages.length-1;
    changeMainImgae(actualImageIndex);
    highlightMiniImage(actualImageIndex);
  };
  console.log(actualImageIndex);
};

function onKeyPress(event) {
  switch (event.keyCode)
  {
    case 37: slide('left'); break;
    case 39: slide('right'); break;
  };
};

setInitial();
showImagesInThumbnails(listOfImages);
highlightMiniImage(actualImageIndex);