import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { data } from 'autoprefixer';
import { Link } from 'react-router-dom';




function RecipeList() {

    const [product,setProduct] = useState([]);
    const [value,setValue] = useState("");
  
    useEffect(()=>{
     
    axios.get("https://6728f2f56d5fa4901b6b9c68.mockapi.io/recipe")     
        .then((res)=>{
        setProduct(res.data);
        console.log(res.data)
       })

       },[]);
      
      
       const filteredData=product.filter((el)=>
         el.name.toLowerCase().includes(value.toLowerCase())
         )
        
        

  return (

        <div className='fullCard'>
        <div className='search'>
        <input 
         type="search"
          id="default-search" 
          class="block w-[400px]  p-3 ps-10 m-1 mt-5  text-c text-grey-900 border border-gray-300 rounded-full bg-grey-500 focus:ring-blue-500 focus:border-orange-500 dark:bg-orange-400 dark:border-gray-600 dark:placeholder-violet-900 dark:text-red dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="Поиск рецепта..."
         onChange={(e)=> setValue(e.target.value)} 
         required />
        </div>
        
         {filteredData.map((el)=>{ 
          return( 
       <Link to={`/RecipeDetail/${el.id}`}> 
            <div className='card'>

     <ul class="flex flex-wrap items-center justify-center text-gray-900 dark:text-gray "/>
    <li class="p-3  hover:bg-orange-500 cursor-pointer rounded-full border-2  border-orange-400  bg-grey-500 w-96  font-sans font-medium text-sm">
    {el.name}
        
    </li>
           </div>
     </Link>
           ) 
        })}  
 </div>
 
  )
}

export default RecipeList;