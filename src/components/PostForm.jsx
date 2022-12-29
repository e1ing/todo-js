import React, { useState } from 'react';
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';

export const PostForm = ({ create }) => {

   const [post, setPost] = useState({ title: '', body: '' })

   const addNewPost = (e) => {
      const newPost = {
         ...post, id: Date.now()
      }
      create(newPost)
      setPost({ title: '', body: '' })
   }

   return (
      <div>
            <MyInput
               value={post.title}
               onChange={e => setPost({ ...post, title: e.target.value })}
               type='text'
               placeholder="Post title"
            />

            <MyInput
               value={post.body}
               onChange={e => setPost({ ...post, body: e.target.value })}
               type='text'
               placeholder="Post description"
            />

            <MyButton
               onClick={addNewPost}>
                  Create post
            </MyButton>
      </div>
   )
}