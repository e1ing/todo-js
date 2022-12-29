import React from 'react';
import { PostItem } from './PostItem';

export const PostList = ({ posts, title, remove }) => {

   if (!posts.length) {
      return (
         <h1 style={{ textAlign: "center" }}>Posts not found...</h1>
      )
   }
   return (
      <div className="App">
         <h1 style={{ textAlign: 'center' }}>{title}</h1>
         <div>  
            {posts.map((post, index) =>
               <PostItem 
               key={post.id}
               number={index + 1}
               post={post} 
               remove = {remove}
                />
            )}
         </div>
      </div>
   )
}