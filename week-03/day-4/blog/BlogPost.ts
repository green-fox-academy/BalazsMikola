'use strict';

export class BlogPost{
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;

  constructor(authorName:string, title:string, text:string, publicationDate:string){
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.publicationDate = publicationDate;
  };

  blogpost():void {
    console.log(`"${this.title}" created by ${this.authorName}, posted at ${this.publicationDate}\r\n"${this.text}"`);  
  };
};
