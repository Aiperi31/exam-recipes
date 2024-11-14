import React from 'react';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function RecipeDetail() {
  const {id} =useParams();
  const [products,setProducts]=useState({});
  const [card,setCard]=useState([]);
  const [task,setTask]=useState([]);

  //const navigate= useNavigate(); 


axios.get("https://6728f2f56d5fa4901b6b9c68.mockapi.io/recipe")
.then((res)=>{
  setProducts(res.data);

const foundProduct= products.find((el)=> el.id == id);
 setCard(foundProduct);
 })
 


 function addToBasket() {


const found=products.find((el)=> el.id == id);
 
task.push(found)

localStorage.setItem("favorites", JSON.stringify(task));
  
 console.log(task)

  
}

// navigate("/favorites");



  return (
<div className='detail'>
<div class="max-w-3xl mt-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-black-400 dark:border-gray-700">
    <a href="#">
       <img class="rounded-t-lg " src={card.avatar} alt="" /> 
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray">{card.name}</h5>
        </a>
        <p class="mb-3 font-normal text-black-900 dark:text-gray-900">{card.description}</p>
        <p class="mb-3 font-normal text-black-900 dark:text-gray-900">{card.desc}</p>
        <Link to={`/Favorites/`}> 
        <button  onClick={addToBasket} type="button" class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
Избранное
</button>
</Link>
    </div>
</div>


</div>

  )
}

export default RecipeDetail;