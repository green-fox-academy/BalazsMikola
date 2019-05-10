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

const post1:BlogPost = new BlogPost( 'John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
const post2:BlogPost = new BlogPost( 'Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
const post3:BlogPost = new BlogPost( 'William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 
'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture \r\n outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');

post3.blogpost();
