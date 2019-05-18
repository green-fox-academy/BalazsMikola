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

document.getElementsByTagName('h1')[0].innerText = listOfImages[0].title;
document.getElementsByTagName('p')[0].innerText = listOfImages[0].story;

function highlightMiniImage(index){
  let thumbnails = document.getElementsByClassName('thumbnail');
  for(let i=0; i<listOfImages.length; i++){
    i===index ? thumbnails[i].style.borderColor = "grey" : thumbnails[i].style.borderColor = "white";
  };
};

function selectMiniImage(index){
  document.getElementsByClassName('content')[0].style.backgroundImage = 'url(assets/'+listOfImages[index].name+')';
  document.getElementsByTagName('h1')[0].innerText = listOfImages[index].title;
  document.getElementsByTagName('p')[0].innerText = listOfImages[index].story;
  actualImageIndex = index;
  highlightMiniImage(index);
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
    document.getElementsByClassName('content')[0].style.backgroundImage = 'url(assets/'+listOfImages[actualImageIndex].name+')';
    document.getElementsByTagName('h1')[0].innerText = listOfImages[actualImageIndex].title;
    document.getElementsByTagName('p')[0].innerText = listOfImages[actualImageIndex].story;
    highlightMiniImage(actualImageIndex);
  };
  if(direction === 'left'){
    actualImageIndex --;
    if(actualImageIndex < 0) actualImageIndex = listOfImages.length-1;
    document.getElementsByClassName('content')[0].style.backgroundImage = 'url(assets/'+listOfImages[actualImageIndex].name+')';
    document.getElementsByTagName('h1')[0].innerText = listOfImages[actualImageIndex].title;
    document.getElementsByTagName('p')[0].innerText = listOfImages[actualImageIndex].story;
    highlightMiniImage(actualImageIndex);
  };
  console.log(actualImageIndex);
};

showImagesInThumbnails(listOfImages);
highlightMiniImage(actualImageIndex);