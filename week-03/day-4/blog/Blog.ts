'use strict';

import { BlogPost } from "./BlogPost";

export class Blog {
  listOfPosts:BlogPost[] = [];

  addNewPost(authorName:string, title:string, text:string, publicationDate:string):void{
    this.listOfPosts.push(new BlogPost(authorName, title, text, publicationDate));
  };

  deletePost(index:number):string{
    if(index <= this.listOfPosts.length-1){
      this.listOfPosts.splice(index, 1);
      return `Post deleted`;
    }else return `Can not find post with this index: ${index}`;
  };

  updatePost(index:number, newPost:BlogPost):string{
    if(index <= this.listOfPosts.length-1){
      this.listOfPosts[index].authorName = newPost.authorName;
      this.listOfPosts[index].publicationDate = newPost.publicationDate;
      this.listOfPosts[index].text = newPost.text;
      this.listOfPosts[index].title = newPost.title;
    }else return `Can not find post with this index: ${index}`;
  };
};