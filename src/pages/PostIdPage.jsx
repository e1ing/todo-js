import React from 'react';
import { useParams } from 'react-router-dom';


export const PostIdPage = (props) => {

   const {id} = useParams();
   
   return (
      <div>
         <h1>
            Post page is opened
         </h1>
      </div>
      );
   }