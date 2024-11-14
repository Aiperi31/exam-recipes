import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';



 function Favorites() {
  
  const [data,setData]= useState([]);
 

        useEffect(()=>{
    
    
      const localData=JSON.parse(localStorage.getItem("favorites")) || [] 
      setData(localData);
        console.log(data)
      
       },[]);

function  delBtn(id) {
 // useEffect(()=>{

   const localDat= JSON.parse(localStorage.getItem("favorites")) || [] 
     setData(localDat);


   const todo=data.filter((el)=> el.id !==id);
   setData(todo)
   console.log(todo)
 //  },[]);
}

  return (
    <div className='favorite'>
      
      {data.map((el,ind)=>{
        return(
          

<div key={ind} class="w-80 flex align-center  justify-center  bg-white mt-3 border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">
    <a href="#">
       <img class="rounded-t-lg" src={el.avatar} alt="" /> 
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-grey-900">{el.name}</h5>
        </a>
        
        <button onClick={()=>delBtn(el.id)} type="button" class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
        Удалить
</button>
    </div>
</div>

        )
       })}
   
    </div>
    
  )
 }

export default Favorites;