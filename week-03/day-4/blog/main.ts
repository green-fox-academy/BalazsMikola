'use strict';

import { Blog } from "./Blog";
import { BlogPost } from "./BlogPost";

const myBlog:Blog = new Blog();
myBlog.addNewPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
myBlog.addNewPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
myBlog.addNewPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture \r\n outside one of IBM’s New York City offices', '2017.03.28.');

myBlog.addNewPost('Elen Parker', 'Elevators', 'Lorem ipsum dolor sit amet.', '2019.01.01.');
console.log(myBlog.deletePost(2));
const blogToUpdateWith:BlogPost = new BlogPost('Elen Updated', 'Elevators2', 'Lorem ipsum dolor sit amet and more.', '2019.01.02.');
myBlog.updatePost(2, blogToUpdateWith);

console.log(myBlog);
