/*
Create a PostIt class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"
*/

'use strict';

class PostIt{
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(backgroundColor:string, text:string, textColor: string){
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }

  checkMyPostIt():void {
    console.log(`Your postit is ${this.backgroundColor} and the text on it is ${this.textColor} saying: ${this.text}`);  
  }
}

const postIt1: PostIt = new PostIt('orange', 'Idea 1', 'blue');
const postIt2: PostIt = new PostIt('pink', 'Awesome', 'black');
const postIt3: PostIt = new PostIt('yellow', 'Superb!', 'green');

postIt1.checkMyPostIt();
