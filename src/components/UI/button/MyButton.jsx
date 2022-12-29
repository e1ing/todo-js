import React from 'react'; 
import classes from './MyButton.module.css'  
 
export const MyButton = ({children, ...props}) => { 
    //console.log("Here", classes) 
    return ( 
        <button {...props}  className={classes.myBtn} > 
        {children} 
        </button> 
    ) 
}