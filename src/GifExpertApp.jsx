import { useState } from "react"
import {  AddCategory, GifGrid } from "./components";




export const GifExpertApp = () => {

  const [categories,setCategories] = useState(['']);
 

  const onAddCategories = ( newCategory ) => {
    if ( categories.includes(newCategory)) return;
    // console.log(newCategory)
    setCategories( [newCategory,...categories] )
  };




  return (
    <>

      <h1>PROYECTO DE GIF</h1>
      
      < AddCategory 
      onNewCategory={ (value) => onAddCategories(value) }
      />


     


         {
           categories.map( (category) =>(
           <GifGrid 
              key={ category}
              category={ category }/>

           ))
         }
       
      


    </>
    
  )
}





